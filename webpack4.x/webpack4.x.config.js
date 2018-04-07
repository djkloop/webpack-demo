// 路径
const path = require('path');
const process = require('process');
// 压缩JS
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
  // html模板
const HtmlWebpackPlugin = require('html-webpack-plugin')
  //
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === "development";
const assetsPath = function(_path) {
  const assetsSubDirectory = "static"
  return path.posix.join(assetsSubDirectory, _path)
}
const extractSass = new ExtractTextPlugin({
  filename: "[name].[sha512:contenthash:base64:5].css",
  disable: isDev
});
module.exports = {
  entry: {
    main: ['./webpack4.x/src/app.js', ]
  },
  output: {
    filename: '[name]_[hash:5]_[id].js',
    path: path.resolve(__dirname + '/build')
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      include: [
        path.resolve(__dirname, 'src'),
      ],
      use: 'babel-loader',
    }, {
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: "css-loader",
          options: {
            minimize: !isDev //css压缩
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
    }, {
      test: /\.(png|jpeg|jpg|gif|svg)(\?.*)?$/,
      loader: 'file-loader',
      options: {
        name: './static/images/[name]_[hash:7].[ext]',
      }
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  plugins: [
    // 引入插件，配置文件名，这里同样可以使用 [hash]
    extractSass,
    // new UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      minify: false,
      filename: 'index.html',
      template: './webpack4.x/src/assets/template.jade',
      title: 'Jade HtmlWbpackPlugin Demo'
    })
  ]
}