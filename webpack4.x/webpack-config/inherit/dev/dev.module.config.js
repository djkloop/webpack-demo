var dirVars = require('../../base/dir-vars.config.js');
console.log('\x1B[36m%s\x1B[0m', '加载成功')

const moduleConfig = require('../base/base.module.config.js');
moduleConfig.rules.push({
  test: /\.scss$/,
  use: [{
    loader: "style-loader" // creates style nodes from JS strings
  }, {
    loader: "css-loader" // translates CSS into CommonJS
  }, {
    loader: "sass-loader" // compiles Sass to CSS
  }]
});
module.exports = moduleConfig;