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
      <a href="/tools/fleet-management" class="nav-item depth-1">├ Fleet management</a>
      <a href="/tools/job-costing" class="nav-item depth-1">├ Job costing</a>
      <a href="/tools/inventory" class="nav-item depth-1 last">└ Inventory</a>
    </div>

    <div class="nav-divider"></div>

    <div class="nav-section">
      <div class="nav-section-label">Comparisons</div>
      <a href="/comparisons/3dprintops-vs-flowq" class="nav-item depth-0">3DPrintOps vs. FlowQ</a>
      <a href="/comparisons/spreadsheet-vs-mrpeasy" class="nav-item depth-0">Spreadsheet vs. MRPeasy</a>
    </div>

    <div class="nav-divider"></div>

    <div class="nav-section">
      <div class="nav-section-label">Guides</div>
      <a href="/guides/job-costing-101" class="nav-item depth-0">Job costing 101</a>
      <a href="/guides/choosing-first-software" class="nav-item depth-0">Choosing your first software</a>
      <a href="/guides/fleet-management" class="nav-item depth-0">Do you need fleet management?</a>
      <a href="/guides/custom-stack" class="nav-item depth-0">Building a custom stack</a>
      <a href="/guides/migrating-spreadsheets" class="nav-item depth-0">Migrating from spreadsheets</a>
      <a href="/guides/when-to-upgrade" class="nav-item depth-0">When to upgrade your tooling</a>
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
})();
