// Anthropic API Proxy — Cloudflare Worker
// Deploy at: workers.cloudflare.com
// Set environment variable ANTHROPIC_API_KEY in Worker settings (never in this file)
//
// Rate limit: 5 requests per IP per hour
// CORS: locked to your domain + localhost for development

const RATE_LIMIT_REQUESTS = 5;
const RATE_LIMIT_WINDOW_SECONDS = 3600;
const ALLOWED_ORIGINS = [
  'https://3dprintshopsoftware.com',
  'http://127.0.0.1:5500',
  'http://localhost:5500'
];

export default {
  async fetch(request, env, ctx) {

    const origin = request.headers.get('Origin') || '';

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return corsResponse(null, 204, origin);
    }

    // Only accept POST
    if (request.method !== 'POST') {
      return corsResponse(JSON.stringify({ error: 'Method not allowed' }), 405, origin);
    }

    // Origin check
    if (!ALLOWED_ORIGINS.includes(origin)) {
      return corsResponse(JSON.stringify({ error: 'Forbidden' }), 403, origin);
    }

    // Rate limiting by IP using Cloudflare KV
    const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
    const rateLimitKey = `rl:${ip}`;

    const current = await env.RATE_LIMIT_KV.get(rateLimitKey);
    const count = current ? parseInt(current) : 0;

    if (count >= RATE_LIMIT_REQUESTS) {
      return corsResponse(
        JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }),
        429,
        origin
      );
    }

    // Increment counter; set expiry on first request
    if (count === 0) {
      await env.RATE_LIMIT_KV.put(rateLimitKey, '1', {
        expirationTtl: RATE_LIMIT_WINDOW_SECONDS
      });
    } else {
      await env.RATE_LIMIT_KV.put(rateLimitKey, String(count + 1), {
        expirationTtl: RATE_LIMIT_WINDOW_SECONDS
      });
    }

    // Parse and validate request body
    let body;
    try {
      body = await request.json();
    } catch {
      return corsResponse(JSON.stringify({ error: 'Invalid JSON' }), 400, origin);
    }

    // Only allow the fields the widget actually needs
    const sanitized = {
      model: 'claude-sonnet-4-5',
      max_tokens: 1000,
      messages: body.messages
    };

    if (!sanitized.messages || !Array.isArray(sanitized.messages)) {
      return corsResponse(JSON.stringify({ error: 'Invalid request' }), 400, origin);
    }

    // Forward to Anthropic
    const anthropicResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(sanitized)
    });

    const data = await anthropicResponse.json();
    return corsResponse(JSON.stringify(data), anthropicResponse.status, origin);
  }
};

function corsResponse(body, status, origin) {
  return new Response(body, {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}