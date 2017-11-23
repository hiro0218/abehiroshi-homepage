module.exports = {
  // Headers of the page
  head: {
    title: 'abehiroshi-homepage',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '「阿部寛のホームページ」をモダン化してみる' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' }
    ]
  },
  // Customize the progress bar color
  loading: false,
  // Build configuration
  build: {
    // Run ESLint on save
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    dir: 'dist'
  },
  router: {
    base: '/abehiroshi-homepage/'
  }
}
