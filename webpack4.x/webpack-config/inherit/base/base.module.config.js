/*
 * @moduleName: base.module.config.js
 * @Desc: 公共module
 * @Author: djkloop
 * @Date: 2018-04-07 12:29:10
 * @Last Modified by: djkloop
 * @Last Modified time: 2018-04-07 13:05:27
 */

var dirVars = require('../../base/dir-vars.config.js');
module.exports = {
  rules: [{
    test: /\.jsx?/,
    include: dirVars.srcRootDir,
    use: 'babel-loader',
  }, {
    test: /\.jade$/,
    use: ['jade-loader']
  }, {
    test: /\.(png|jpeg|jpg|gif|svg)(\?.*)?$/,
    loader: 'file-loader',
    options: {
      name: './static/images/[name]_[hash:7].[ext]',
    }
  }]
}