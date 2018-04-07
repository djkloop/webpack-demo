require('./npm-scripts/before-build.script');
module.exports = {
  entry: require('./webpack-config/entry.config.js'),
  output: require('./webpack-config/output.config.js'),
  module: require('./webpack-config/module.config.js'),
  plugins: require('./webpack-config/plugins.config.js')
};