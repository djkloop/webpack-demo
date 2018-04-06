// 路径
const path = require('path');
// 压缩JS
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
  // html模板
const HtmlWebpackPlugin = require('html-webpack-plugin')
  //
const ExtractTextPlugin = require('extract-text-webpack-plugin')
console.log(process.env.NODE_ENV)
const extractSass = new ExtractTextPlugin({
  filename: "[name].[sha512:contenthash:base64:5].css",
  disable: process.env.NODE_ENV === "development"
});
module.exports = {
  entry: {
    main: ['./webpack4.x/src/app.js', ]
  },
  output: {
    filename: '[name]_[hash:5]_[id].js',
    path: path.resolve(__dirname + '/dist')
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: "css-loader",
          options: {
            minimize: true //css压缩
          }
        }, {
          loader: "sass-loader"
        }],
        // 在开发环境使用 style-loader
        fallback: "style-loader"
      })
    }, {
      test: /\.jade$/,
      use: ['jade-loader']
    }]
  },
  plugins: [
    // 引入插件，配置文件名，这里同样可以使用 [hash]
    extractSass,
    new UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './webpack4.x/src/assets/template.jade',
      title: 'Jade HtmlWbpackPlugin Demo'
    })
  ]
}