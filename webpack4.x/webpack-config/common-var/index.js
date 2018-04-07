const dev = 'development';
const $isDev = process.env.NODE_ENV === dev;
let $commonVar = {};

$commonVar = {
  $isDev
}

module.exports = $commonVar;