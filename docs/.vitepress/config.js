export default {
  title: 'Learn Sencha ExtJS',
  description: 'Complete ExtJS Training',
  base: '/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/' },
      { text: 'Core Concepts', link: '/core-concepts/' },
      { text: 'Components', link: '/components/' },
      { text: 'Advanced', link: '/advanced/' }
    ],
    sidebar: {
      '/getting-started/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/getting-started/' },
            { text: 'Installation', link: '/getting-started/installation' },
            { text: 'Project Structure', link: '/getting-started/project-structure' },
            { text: 'First Application', link: '/getting-started/first-app' }
          ]
        }
      ],
      '/core-concepts/': [
        {
          text: 'Core Concepts',
          items: [
            { text: 'Overview', link: '/core-concepts/' },
            { text: 'Class System', link: '/core-concepts/class-system' },
            { text: 'Component Lifecycle', link: '/core-concepts/lifecycle' },
            { text: 'Layouts', link: '/core-concepts/layouts' },
            { text: 'Data Package', link: '/core-concepts/data-package' },
            { text: 'Events', link: '/core-concepts/events' },
            { text: 'MVVM', link: '/core-concepts/mvvm' }
          ]
        }
      ],
      '/components/': [
        {
          text: 'Components',
          items: [
            { text: 'Overview', link: '/components/' },
            { text: 'Grids', link: '/components/grids' },
            { text: 'Forms', link: '/components/forms' },
            { text: 'Trees', link: '/components/trees' },
            { text: 'Charts', link: '/components/charts' },
            { text: 'Panels', link: '/components/panels' },
            { text: 'Windows', link: '/components/windows' },
            { text: 'Toolbars', link: '/components/toolbars' }
          ]
        }
      ],
      '/advanced/': [
        {
          text: 'Advanced Topics',
          items: [
            { text: 'Overview', link: '/advanced/' },
            { text: 'Custom Components', link: '/advanced/custom-components' },
            { text: 'Plugins', link: '/advanced/plugins' },
            { text: 'Theming', link: '/advanced/theming' },
            { text: 'Performance', link: '/advanced/performance' },
            { text: 'Testing', link: '/advanced/testing' },
            { text: 'Build & Deploy', link: '/advanced/build-deploy' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/sencha-extjs-learning' }
    ]
  }
}