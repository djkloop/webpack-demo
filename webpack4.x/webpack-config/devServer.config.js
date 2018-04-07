var serverOptions = require('./common-var')
module.exports = {
  contentBase: './build/',
  host: serverOptions.devOptions.server.host,
  port: serverOptions.devOptions.server.port,
  inline: serverOptions.devOptions.server.inline,
  hot: serverOptions.devOptions.server.hot,
  open: serverOptions.devOptions.server.open,
  compress: true,
  watchContentBase: false
};