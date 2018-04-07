var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var dirVars = require('../../base/dir-vars.config');
var pageArr = require('../../base/page-entries.config.js');

// const extractSass = new ExtractTextPlugin({
//   filename: "[name].[sha512:contenthash:base64:5].css",
// });

// var configPlugins = [
//   /* 抽取出chunk的css */
//   extractSass
// ];
var configPlugins = [];
pageArr.forEach((page, index) => {
  let formatPageName = path.basename(page, path.extname(page))
  const htmlPlugin = new HtmlWebpackPlugin({
    minify: false,
    filename: `${formatPageName}_index.html`,
    template: path.resolve(dirVars.pagesDir, `./${formatPageName}.jade`),
    title: `Jade - ${formatPageName} - HtmlWbpackPlugin - Demo - ${index}`
  });
  configPlugins.push(htmlPlugin);
});

module.exports = configPlugins;