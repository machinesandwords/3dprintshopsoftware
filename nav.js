/**
 * nav.js — Shared sidebar navigation
 * Injected into every page. Edit once, updates everywhere.
 * To mark a link active, add class="active" to the matching <a> tag on each page,
 * or use the auto-detection below which matches on pathname.
 */

(function() {
  const nav = `
    <div class="nav-section">
      <div class="nav-section-label">Why</div>
      <a href="/why" class="nav-item depth-0">Manifesto</a>
    </div>

    <div class="nav-divider"></div>

    <div class="nav-section">
      <div class="nav-section-label">Landscape</div>
      <a href="/landscape" class="nav-item depth-0">Overview</a>
      <a href="/landscape/vendors" class="nav-item depth-0">Vendor index</a>
      <a href="/landscape/printer-control" class="nav-item depth-1">├ Printer control</a>
      <a href="/landscape/fleet-management" class="nav-item depth-1">├ Fleet management</a>
      <a href="/landscape/job-economics" class="nav-item depth-1">├ Job economics</a>
      <a href="/landscape/inventory" class="nav-item depth-1">├ Inventory &amp; materials</a>
      <a href="/landscape/customer-management" class="nav-item depth-1 last">└ Customer management</a>
    </div>

    <div class="nav-divider"></div>

    <div class="nav-section">
      <div class="nav-section-label">Tools</div>
      <a href="/tools" class="nav-item depth-0">All tools</a>
      <a href="/tools/job-pricing-tool" class="nav-item depth-1">├ What should I charge for this job?</a>
      <a href="/tools/wheres-your-operation-leaking" class="nav-item depth-1">├ Where's your operation leaking?</a>
      <a href="/tools/does-this-tool-pencil-out" class="nav-item depth-1">├ Does this tool pencil out?</a>
      <a href="/tools/what-does-this-stack-cost-to-run" class="nav-item depth-1">├  What does this stack cost to run?</a>
      <a href="/tools/normalize-your-software-costs" class="nav-item depth-1 last">└ Normalize your software costs</a>
    </div>

    <div class="nav-divider"></div>

    <div class="nav-section">
      <div class="nav-section-label">Comparisons</div>
      <a href="/comparisons" class="nav-item depth-0">All comparisons</a>
      <a href="/comparisons/octoprint-vs-klipper" class="nav-item depth-1">├ OctoPrint vs. Klipper</a>
      <a href="/comparisons/3dpboss-vs-3dprintops" class="nav-item depth-1">├ 3DPBOSS vs. 3DPrintOps</a>
      <a href="/comparisons" class="nav-item depth-1">└ More &rarr;</a>
    </div>

    <div class="nav-divider"></div>

    <div class="nav-section">
      <div class="nav-section-label">Guides</div>
      <a href="/guides" class="nav-item depth-0">All guides</a>
      <a href="/guides/calculate-true-cost-of-sku" class="nav-item depth-1">├ True cost per SKU</a>
      <a href="/guides/hiring-first-employee" class="nav-item depth-1">├ Hire your first employee</a>
      <a href="/guides" class="nav-item depth-1">└ More &rarr;</a>
    </div>

    <div class="nav-divider"></div>

    <div class="nav-section">
      <a href="/subscribe" class="nav-item depth-0 nav-subscribe">Subscribe →</a>
    </div>
  `;

  // Inject into element with id="sidebar-nav"
  const container = document.getElementById('sidebar-nav');
  if (container) {
    container.innerHTML = nav;

    // Auto-highlight active link based on current path
    const path = window.location.pathname;
    const links = container.querySelectorAll('a.nav-item');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href === path || (href !== '/' && path.startsWith(href))) {
        link.classList.add('active');
      }
    });
  }

  // Mobile bottom nav
  const mobileNav = document.createElement('nav');
  mobileNav.className = 'mobile-nav';
  mobileNav.setAttribute('aria-label', 'Mobile navigation');
  mobileNav.innerHTML = `
    <a href="/landscape">Landscape</a>
    <a href="/comparisons">Compare</a>
    <a href="/guides">Guides</a>
    <a href="/tools">Tools</a>
    <a href="/subscribe">Subscribe</a>
  `;
  document.body.appendChild(mobileNav);

  // Auto-highlight active mobile nav link
  const path2 = window.location.pathname;
  const mobileLinks = mobileNav.querySelectorAll('a');
  mobileLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href !== '/' && path2.startsWith(href)) {
      link.classList.add('active');
    }
  });

})();