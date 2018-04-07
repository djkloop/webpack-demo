const $isDev = require('./common-var');
let isDev = $isDev ? 'dev' : 'prod';
$isDev && $isDev === true ? module.exports = require(`./inherit/${isDev}/${isDev}.plugins.config.js`) : module.exports = require(`./inherit/${isDev}/${isDev}.plugins.config.js`)