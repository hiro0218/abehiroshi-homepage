module.exports = {
  // Headers of the page
  head: {
    title: 'abehiroshi-homepage',
    meta: [
      { charset: 'utf-8' },
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
    },
    postcss: [
      require('autoprefixer')({
        browsers: ['IE >= 11']
      })
    ]
  },
  generate: {
    dir: 'dist'
  },
  router: {
    base: '/abehiroshi-homepage/'
  },
  cache: true,
  modules: [
    '@nuxtjs/component-cache'
  ]
}
