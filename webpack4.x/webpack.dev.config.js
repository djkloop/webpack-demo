require('./npm-scripts/before-build.script');
const setMode = require('./webpack-config/common-var');
let mode = setMode.$isDev && setMode.$isDev === true ? 'development' : 'production'
module.exports = {
  entry: require('./webpack-config/entry.config.js'),
  output: require('./webpack-config/output.config.js'),
  module: require('./webpack-config/module.config.js'),
  plugins: require('./webpack-config/plugins.config.js'),
  devServer: require('./webpack-config/devServer.config.js'),
  mode
};