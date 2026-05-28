// @ts-check
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '3D Print Shop Software',
  tagline: 'ERP and workflow automation for print farm operators',
  favicon: 'img/favicon.ico',

  url: 'https://3dprintshopsoftware.com',
  baseUrl: '/',

  organizationName: 'machinesandwords',
  projectName: '3dprintshopsoftware',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      navbar: {
        title: '3D Print Shop Software',
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/machinesandwords/3dprintshopsoftware',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/machinesandwords/3dprintshopsoftware',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 3D Print Shop Software.`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
      },
    }),
};

module.exports = config;