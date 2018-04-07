const dev = 'development';
const $isDev = process.env.NODE_ENV === dev;
let $commonVar = {};
$commonVar = {
  $isDev,
  devOptions: {
    server: {
      host: 'localhost',
      port: 9999, // 默认8080
      inline: true, // 可以监控js变化
      hot: true, // 热启动
      open: true
    }
  }
}
module.exports = $commonVar;