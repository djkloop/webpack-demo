const $isDev = require('./common-var');
let isDev = $isDev ? 'dev' : 'prod';
console.log(isDev)
$isDev && $isDev === true ? module.exports = require(`./inherit/${isDev}/${isDev}.module.config.js`) : module.exports = require(`./inherit/${isDev}/${isDev}.module.config.js`)