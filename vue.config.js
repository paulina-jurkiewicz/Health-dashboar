const webpack = require("webpack");

module.exports = {
  publicPath: '/dashboard/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/styles/global/_mixins.scss";
          @import "@/assets/styles/global/_variables.scss";
          @import "@/assets/styles/global/_functions.scss";
        `
      },
      less: {
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    port: 8080
  }
};
