const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/symmetrica-ssr-core/'
  }
} : {};

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'symmetrica-ssr-core',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['axios']
  },
  axios: {
    proxy: true,
  },
  proxy: {
    '/api': {
      target: 'http://api.holypony.ru/',
        pathRewrite: {
          '^/api/': ''
        }
    }
  },
  server: {
    host: '0.0.0.0',
    port: '3001',
  },
  ...routerBase,
}
