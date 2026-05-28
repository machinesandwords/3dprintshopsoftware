# Cloudflare Pages Deployment Checklist

Complete these steps to get your Docusaurus site live on 3dprintshopsoftware.com.

## Pre-Deployment

- [ ] Local site builds successfully: `npm run build`
- [ ] All documentation pages are in place (docs/, blog/)
- [ ] GitHub repository is created and initial commit is pushed
- [ ] You have Cloudflare account access
- [ ] Domain `3dprintshopsoftware.com` is configured in Cloudflare

## Cloudflare Pages Setup

### Step 1: Connect GitHub

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Navigate to **Pages**
3. Click **Create a project** → **Connect to Git**
4. Authorize GitHub (or use existing connection)
5. Select your repository (`3dprintshopsoftware`)
6. Click **Begin setup**

### Step 2: Configure Build Settings

In the Pages setup form:

| Field | Value |
|-------|-------|
| **Framework** | Docusaurus |
| **Build command** | `npm run build` |
| **Build output directory** | `build` |
| **Root directory** | (leave blank) |
| **Environment variables** | (leave blank for now) |

### Step 3: Deploy

1. Click **Save and Deploy**
2. Cloudflare will build and deploy your site
3. You'll receive a temporary URL: `https://<hash>.pages.dev`
4. **Test it** — click the link to verify your site works

## Custom Domain Setup

### Step 1: Connect Your Domain

1. In Cloudflare Pages, go to your project → **Settings** → **Custom domain**
2. Click **Set up custom domain**
3. Enter: `3dprintshopsoftware.com`
4. Click **Continue**

### Step 2: Verify DNS

Cloudflare will automatically:
- Add a CNAME record for your domain
- Route traffic to Cloudflare Pages

If you manage DNS elsewhere:

**Option A: Use Cloudflare's Nameservers** (Recommended)
1. Go to your domain registrar (GoDaddy, Namecheap, Porkbun, etc.)
2. Update nameservers to Cloudflare's:
   - `iris.ns.cloudflare.com`
   - `jeff.ns.cloudflare.com`
3. Save changes (propagation takes 24–48 hours)

**Option B: CNAME Record** (If keeping existing DNS provider)
1. In your registrar's DNS settings, create a CNAME:
   - **Name**: `@` or `3dprintshopsoftware.com`
   - **Target**: Your Pages deployment URL
2. Save and wait for propagation

### Step 3: Verify Deployment

1. Visit `https://3dprintshopsoftware.com`
2. Confirm your site loads
3. Check that all links work (try a few doc pages)

## SSL/HTTPS Certificate

Cloudflare automatically provisions a free SSL certificate via Let's Encrypt. You should see:

- A padlock icon (🔒) in the browser address bar
- HTTPS in the URL: `https://3dprintshopsoftware.com`

No action needed on your part.

## Automatic Deployments

Every time you push to `main` branch, Cloudflare will:

1. Download the latest code
2. Run `npm run build`
3. Deploy the `build/` folder
4. Make changes live within 1–3 minutes

### Push a Test Change

To verify automatic deployment:

1. Make a small edit to a doc file (e.g., `docs/intro.md`)
2. Commit and push: `git push origin main`
3. Watch deployment in Cloudflare Pages dashboard
4. Visit your site to confirm the change appears

## Post-Deployment Checks

- [ ] Site loads at `https://3dprintshopsoftware.com`
- [ ] HTTPS works (padlock icon visible)
- [ ] All doc pages render correctly
- [ ] Navigation sidebar works
- [ ] Links between pages work
- [ ] Search functionality works (if enabled)
- [ ] Mobile version displays properly
- [ ] Dark mode toggle works (if available)

## Monitoring & Analytics

### View Deployment Logs

In Cloudflare Pages dashboard:

1. Go to your project
2. Click **Deployments**
3. Click any deployment to see:
   - Build logs
   - Deploy status
   - Timestamp

### Monitor Performance

1. Go to **Analytics**
2. View:
   - Page views
   - Unique visitors
   - Geographic distribution
   - Device types
   - Browser types

### Set Up Notifications

1. In your project **Settings**
2. Enable notifications for:
   - Failed deployments (email alert)
   - Successful deployments (optional)

## Troubleshooting

### Site says "Page not found"

- Verify custom domain is correctly configured
- Check that DNS changes have propagated (use [whatsmydns.net](https://whatsmydns.net))
- Try clearing browser cache and hard-refresh

### Build fails with error

1. Go to Pages → **Deployments**
2. Click the failed deployment
3. Review the build log error message
4. Common issues:
   - `npm install` failed → check `package.json` for typos
   - `npm run build` failed → run locally to debug
   - Missing environment variables → add to Pages settings
5. Fix locally, push, and Pages will auto-retry

### Site content is stale

1. Hard-refresh browser: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
2. If still stale, clear Cloudflare cache:
   - In Cloudflare dashboard → **Caching** → **Purge Cache** → **Purge Everything**
3. Wait 5 minutes for cache to clear

### Domain won't connect

- Verify nameservers point to Cloudflare
- Check CNAME record is correct (if using CNAME)
- Wait up to 48 hours for DNS propagation
- Use [whatsmydns.net](https://whatsmydns.net) to check propagation status

## Environment Variables (Advanced)

If you need to store secrets (API keys, etc.):

1. In Pages project → **Settings** → **Environment variables**
2. Add variable: `KEY = value`
3. Available in build: `process.env.KEY`
4. Never commit secrets to Git — always use Pages env vars

## Next Steps

Once deployed:

1. **Share the live link** — Tell your customers and community
2. **Monitor performance** — Watch analytics dashboard
3. **Gather feedback** — Ask users what docs they need
4. **Update content regularly** — Keep docs current as features change
5. **Add more resources** — Blog posts, tutorials, FAQs

## Useful Cloudflare Pages Links

- [Pages Dashboard](https://dash.cloudflare.com)
- [Pages Documentation](https://developers.cloudflare.com/pages/)
- [Custom Domain Setup Guide](https://developers.cloudflare.com/pages/configuration/custom-domains/)
- [Troubleshooting Guide](https://developers.cloudflare.com/pages/troubleshooting/)

---

**Status**: ☐ Not started | ☑ Completed | 🚀 Live

When you're ready to deploy, run through this checklist and you'll be live in minutes!
