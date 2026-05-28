# 3D Print Shop Software Documentation

This is the official documentation site for **3D Print Shop Software**, hosted on Cloudflare Pages.

**Live Site**: [https://3dprintshopsoftware.com](https://3dprintshopsoftware.com)

## Quick Start

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd 3dprintshopsoftware
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The site will open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

## Project Structure

```
3dprintshopsoftware/
├── docs/                    # Documentation content
│   ├── intro.md            # Main landing page
│   ├── getting-started/    # Setup guides
│   ├── features/           # Feature documentation
│   └── api/                # API reference
├── blog/                   # Blog posts (optional)
├── src/
│   ├── components/         # Custom React components
│   ├── css/               # Global styles
│   └── pages/             # Custom pages
├── docusaurus.config.js   # Main configuration
├── sidebars.js            # Sidebar navigation
├── tsconfig.json          # TypeScript config
└── package.json           # Dependencies
```

## Adding Content

### New Documentation Page

1. Create a `.md` file in the appropriate `docs/` subdirectory
2. Add frontmatter at the top:
   ```yaml
   ---
   sidebar_position: 1
   ---
   ```
3. The page will auto-appear in the sidebar based on folder structure

### New Blog Post

```bash
npm run docusaurus blog:version 2026-05-28 # Create a versioned snapshot (optional)
```

Create a file in `blog/`:
```
blog/2026-05-28-my-post.md
```

### Updating Navigation

Edit `sidebars.js` to reorganize the documentation structure.

## Deployment to Cloudflare Pages

### Setup (First Time Only)

1. **Create a new Cloudflare Pages project**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Pages → Create a project
   - Connect your GitHub repository
   - Build command: `npm run build`
   - Build output directory: `build`

2. **Set up environment variables** (if needed)
   - Add any required environment variables in Cloudflare Pages settings

3. **Configure custom domain**
   - Add `3dprintshopsoftware.com` as your custom domain
   - Update your domain's nameservers to point to Cloudflare

### Automatic Deployment

Once configured, every push to `main` branch triggers an automatic build and deployment.

### Manual Deployment

If you prefer to deploy manually:

```bash
npm run build
npx wrangler pages deploy build --project-name=3dprintshopsoftware
```

## Customization

### Branding

Edit `docusaurus.config.js`:

- **Site title**: `title: '3D Print Shop Software'`
- **Tagline**: `tagline: 'ERP and workflow automation for print farm operators'`
- **Logo**: Replace `src/img/logo.svg`
- **Favicon**: Replace `src/img/favicon.ico`

### Colors & Theme

Edit `src/css/custom.css` to customize:

- Primary color (blue in current config)
- Dark mode palette
- Font sizes and spacing

### Navbar Links

Update `docusaurus.config.js` `navbar.items` array to add/remove:

- Documentation links
- Blog link
- External links (GitHub, Twitter, etc.)

## Useful Commands

| Command | Purpose |
|---------|---------|
| `npm start` | Local dev server at http://localhost:3000 |
| `npm run build` | Production build |
| `npm run serve` | Serve production build locally |
| `npm run clear` | Clear build cache |
| `npm run swizzle` | Customize Docusaurus components |
| `npm run write-translations` | Set up i18n |

## Troubleshooting

### Build fails locally

```bash
rm -rf node_modules
npm install
npm run build
```

### Changes not showing up

1. Clear cache: `npm run clear`
2. Restart dev server: `npm start`
3. Hard-refresh browser: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)

### Deployment fails

- Check build logs in Cloudflare Pages dashboard
- Verify Node.js version matches (18.x+)
- Ensure all environment variables are set

## Documentation Standards

When adding content, follow these conventions:

- **Headings**: Use H1 (`#`) once per page, then H2 (`##`) for sections
- **Code blocks**: Use triple backticks with language identifier:
  ```javascript
  // Code here
  ```
- **Links**: Link to other docs with relative paths: `[Link text](../path/to/file)`
- **Images**: Store in `static/img/` and reference with `/img/filename.ext`

## Contributing

To contribute to documentation:

1. Create a feature branch: `git checkout -b docs/my-changes`
2. Make your edits
3. Push and create a pull request
4. Changes deploy automatically after merge to `main`

## Support

For issues or questions:

- **Documentation**: Check [Getting Started](docs/getting-started/installation)
- **Community**: Discuss on [r/3dprintingbusiness](https://reddit.com/r/3dprintingbusiness)

## License

Documentation © 2026 Machines & Words. All rights reserved.

---

**Built with [Docusaurus](https://docusaurus.io/)**
