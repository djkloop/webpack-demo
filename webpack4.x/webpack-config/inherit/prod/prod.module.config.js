/*
 * @moduleName:prod.module.config.js
 * @Desc: 线上环境module
 * @Author: djkloop
 * @Date: 2018-04-07 12:31:45
 * @Last Modified by: djkloop
 * @Last Modified time: 2018-04-07 13:31:40
 */

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var dirVars = require('./base/dir-vars.config.js');
const moduleConfig = require('./inherit/base.module.config.js');
let $isDev = require('../../common-var');

console.log($isDev);

const extractSass = new ExtractTextPlugin({
  filename: "[name].[sha512:contenthash:base64:5].css",
});

moduleConfig.rules.push({
  test: /\.scss$/,
  include: dirVars.srcRootDir,
  use: extractSass.extract({
    use: [{
      loader: "css-loader",
    },{
      loader: "postcss-loader",
      options: {
        ident: 'postcss',
        plugins: [
          // require('autoprefix')(),
          require('postcss-cssnext')()
        ]
      }
    }, {
      loader: "sass-loader"
    }]
  })
});

module.exports = moduleConfig;