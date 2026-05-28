/** @type {import('@docusaurus/plugin-content-docs').SidebarConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installation',
        'getting-started/first-project',
        'getting-started/configuration',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'features/job-costing',
        'features/pricing-calculator',
        'features/inventory',
        'features/maintenance',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: ['api/overview'],
    },
  ],
};

module.exports = sidebars;