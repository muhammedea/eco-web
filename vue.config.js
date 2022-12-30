const { defineConfig } = require('@vue/cli-service');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = defineConfig({
  productionSourceMap: false,
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
    resolve: {},
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3344',
        secure: false,
        pathRewrite: { '^/api': '/' },
      },
    },
  },
});
