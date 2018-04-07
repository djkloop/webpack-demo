var webpack = require('webpack');
var pluginsConfig = require('../base/base.plugins.config.js');
// pluginsConfig.push(new webpack.LoaderOptionsPlugin({
//   options: {
//     postcss: require('./vendor/postcss.config.js'),
//     eslint: require('./vendor/eslint.config.js'),
//   },
// }));
module.exports = pluginsConfig;