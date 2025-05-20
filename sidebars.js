// sidebars.js

module.exports = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'intro',
        'installation',
        'quick-start',
      ],
    },
    {
      type: 'category',
      label: 'Product Features',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'features/overview',
          label: 'Overview',
        },
        {
          type: 'category',
          label: 'Modules',
          collapsed: true,
          items: [
            'features/modules/authentication',
            'features/modules/logging',
            'features/modules/alerting',
          ],
        },
      ],
    },
    {
      type: 'link',
      label: 'Visit Blog',
      href: '/blog',
    },
  ],
};
