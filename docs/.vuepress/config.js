module.exports = {
  title: 'Magic Label™',
  description: 'Just playing around',
  dest: 'public/docs',
  base: '/docs/',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Parisienne&display=swap' }],
    ['script', { src: 'https://js.stripe.com/v3/buy-button.js' }],
  ],
  plugins: [
    [ 
      '@vuepress/google-analytics',
      {
        'ga': 'UA-43410269-6' // UA-00000000-0
      }
    ],
    [
      'vuepress-plugin-google-adsense',
      {
        'google_ad_client': 'ca-pub-1717720203982550', // ca-pub-0000000000000000
        'enable_page_level_ads': true
      }
    ],
    'mermaidjs'
  
  ],
  themeConfig: {
//    sidebar: 'auto',
//    displayAllHeaders: true // Default: false
  sidebar: {
    '/guide/': [
      'how-it-works',                 /* /guide/ */
      'basic-usage',
      'getting-started',  /* /guide/started.html */
    ],
/*  TODO:
    '/others/': [

    ]
*/
  },
  lastUpdated: 'Last Updated', // string | boolean
    
    nav: [
      { text: 'Guide', link: '/guide/'},
      { text: 'Shop', link: 'https://payhip.com/b/bj4t2'},
    ]
  }
}
