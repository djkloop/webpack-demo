/*
 * @Author: djkloop
 * @Date: 2018-01-19 13:14:22
 * @Last Modified by: djkloop
 * @Last Modified time: 2018-01-19 13:52:17
 * @Desc: multifile-webpack-config
 */

// webpack 合并配置插件
const merge = require('webpack-merge')
// webpack
const webapck = require('webpack')
// html 插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 删除dist目录插件
const CleanWebpackPlugin = require('clean-webpack-plugin')
// css
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
// path
const path = require('path')

// 基本配置
const baseConfig = {
  entry: {
    react: 'react'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin({
      filename: 'css/[name].[hash].css'
    }),
    new CleanWebpackPlugin(path.resolve(__dirname, 'dist')),
    new webapck
      .optimize
      .CommonsChunkPlugin({name: 'react', minChunks: Infinity})
  ]
}

// 设立一个函数
const generatePage = function ({
  title = '',
  entry = '',
  template = './src/index.html',
  name = '',
  chunks = []
} = {}) {
  return {
    entry,
    plugins: [new HtmlWebpackPlugin({
        chunks,
        template,
        title,
        filename: name + '.html'
      })]
  }
}

// 页面数组集合
const pages = [
  generatePage({
    title: 'page A',
    entry: {
      a: './src/pages/a'
    },
    name: 'a',
    chunks: ['react', 'a']
  }),
  generatePage({
    title: 'page B',
    entry: {
      b: './src/pages/b'
    },
    name: 'b',
    chunks: ['react', 'b']
  }),
  generatePage({
    title: 'page C',
    entry: {
      c: './src/pages/c'
    },
    name: 'c',
    chunks: ['react', 'c']
  })
]

//module.exports = pages.map(page => merge(baseConfig, page))
module.exports = merge([baseConfig].concat(pages))