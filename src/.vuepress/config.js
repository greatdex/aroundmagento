const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Around Magento',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Small Talk',
          collapsable: false,
          children: [
            '',
          ]
        },
        {
          title: 'Upgrade Consideration',
          collapsable: false,
          children: [
            '2.4.4'
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    [
      'gitalk-maker',
      {
        gitalkConfig: {
          clientID: 'b75651c31292d7aff917',
          clientSecret: '569b9f7356e96bdbf90d2911fe88b2c09f403814',
          repo: 'aroundmagento',
          owner: 'greatdex',
          admin: ['greatdex'],
          distractionFreeMode: false 
        }
      }
    ]
  ]
}
