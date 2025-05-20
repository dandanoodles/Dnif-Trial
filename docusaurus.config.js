themeConfig: {
  navbar: {
    style: 'dark',
    logo: {
      alt: 'Your Logo',
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
        className: 'navbar-cta-btn',
      },
    ],
  },
}