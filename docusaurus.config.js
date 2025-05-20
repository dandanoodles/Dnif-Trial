// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DNIF',
  tagline: 'Big Data Analytics & SIEM Platform',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'dandanoodles', // Usually your GitHub org/user name.
  projectName: 'Dnif-Trial', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/dandanoodles/Dnif-Trial/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/dandanoodles/Dnif-Trial/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        style: 'dark',
        logo: {
          alt: 'DNIF Logo',
          src: 'img/logo-light.png',
          srcDark: 'img/logo-dark.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/solutions',
            label: 'Solutions',
            position: 'left',
          },
          {
            to: '/pricing',
            label: 'Pricing',
            position: 'left',
          },
          {
            to: '/support',
            label: 'Support',
            position: 'left',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            to: '/login',
            label: 'Login',
            position: 'right',
            className: 'navbar-login-btn',
          },
          {
            to: '/try-free',
            label: 'Try Free',
            position: 'right',
            className: 'navbar-hyperscale-btn',
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
              {
                label: 'API Reference',
                to: '/docs/api',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/dnif',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/dnif',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/dnifhq',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/dandanoodles/Dnif-Trial',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DNIF. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
