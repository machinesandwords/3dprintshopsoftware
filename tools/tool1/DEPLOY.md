# Anthropic Proxy — Deployment Guide

## What this does
A Cloudflare Worker that sits between your site and the Anthropic API.
- Holds your API key server-side (never exposed to the browser)
- Rate limits by IP: 5 requests per hour per visitor
- Only accepts requests from 3dprintshopsoftware.com
- Only forwards the fields the widget actually needs (can't be abused as a general relay)

---

## Step 1 — Install Wrangler (Cloudflare's CLI)

```bash
npm install -g wrangler
```

Then log in:

```bash
wrangler login
```

This opens a browser window. Log in with your Cloudflare account.

---

## Step 2 — Create a KV namespace for rate limiting

In your terminal:

```bash
wrangler kv:namespace create "RATE_LIMIT_KV"
```

This outputs something like:

```
{ binding = "RATE_LIMIT_KV", id = "abc123def456..." }
```

Copy the `id` value and paste it into `wrangler.toml`, replacing `KV_NAMESPACE_ID_HERE`.

---

## Step 3 — Set your Anthropic API key as a secret

```bash
wrangler secret put ANTHROPIC_API_KEY
```

Paste your Anthropic API key when prompted. It is stored encrypted in Cloudflare —
never in your code or config files.

---

## Step 4 — Deploy

```bash
wrangler deploy
```

Your Worker URL will be something like:
`https://anthropic-proxy.YOUR-SUBDOMAIN.workers.dev`

Note this URL — you'll need it in the widget.

---

## Step 5 — Update the widget

In the friction map widget, find this line:

```javascript
const PROXY_URL = 'YOUR_WORKER_URL_HERE';
```

Replace `YOUR_WORKER_URL_HERE` with your Worker URL from Step 4.

---

## Step 6 — Point your custom domain (optional but recommended)

In Cloudflare dashboard:
- Workers & Pages → your worker → Triggers → Add Custom Domain
- Use something like `api.3dprintshopsoftware.com`

This keeps the endpoint on your own domain rather than workers.dev.

---

## Monitoring

In Cloudflare dashboard → Workers → your worker:
- Requests graph shows usage over time
- Errors tab catches any failures
- Free tier: 100,000 requests/day — far more than you'll need

---

## Rate limit tuning

Currently set to 5 requests per IP per hour.
To adjust, change these values in worker.js:

```javascript
const RATE_LIMIT_REQUESTS = 5;
const RATE_LIMIT_WINDOW_SECONDS = 3600; // 1 hour
```

Redeploy with `wrangler deploy` after any changes.
