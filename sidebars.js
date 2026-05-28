/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarConfig} */
const sidebars = {
  // But you can create a sidebar manually
  tutorialSidebar: [
    'intro',
    {
      label: 'Getting Started',
      items: [
        'getting-started/installation',
        'getting-started/first-project',
        'getting-started/configuration',
      ],
    },
    {
      label: 'Features',
      items: [
        'features/job-costing',
        'features/pricing-calculator',
        'features/inventory',
        'features/maintenance',
      ],
    },
    {
      label: 'API Reference',
      items: ['api/overview'],
    },
  ],
};

module.exports = sidebars;
