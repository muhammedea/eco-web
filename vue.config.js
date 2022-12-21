const { defineConfig } = require('@vue/cli-service');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = defineConfig({
  productionSourceMap: false,
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new NodePolyfillPlugin(),
    ],
    resolve: {
    },
  },
});
