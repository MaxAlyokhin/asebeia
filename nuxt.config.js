module.exports = {
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    // 'bulma',
    // CSS file in the project
    "@/assets/styles/style.css",
    "@/assets/styles/breakpoints.css"
  ],
  // Preloader configuration
  loading: {
    color: "black",
    height: "5px",
    throttle: 200
  },

  // Build configuration
  build: {
    vendor: ["vue-resource"],
    // Run ESLint on save
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },

  plugins: ["~plugins/vue-resource", { src: "~plugins/ga.js", mode: "client" }]
};
