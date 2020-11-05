module.exports = {
  // Preloader configuration
  loading: {
    color: 'black',
    height: '5px',
    throttle: 200
  },

  // Build configuration
  build: {
    vendor: ['vue-resource'],
    // Run ESLint on save
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  plugins: [
    '~plugins/vue-resource',
    { src: '~plugins/ga.js', mode: 'client' }
  ],
}

