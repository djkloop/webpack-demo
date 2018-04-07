var serverOptions = require('./common-var')
module.exports = {
  contentBase: './build/',
  openPage: "app_index.html", // 指定打开首页
  host: serverOptions.devOptions.server.host,
  port: serverOptions.devOptions.server.port,
  inline: serverOptions.devOptions.server.inline,
  hot: serverOptions.devOptions.server.hot,
  open: serverOptions.devOptions.server.open,
  compress: true,
  watchContentBase: false
};