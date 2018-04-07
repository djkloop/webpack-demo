var fs = require('fs');
var rimraf = require('rimraf');
var dirVars = require('../webpack-config/base/dir-vars.config.js');
console.log(dirVars.buildDir)
rimraf(dirVars.buildDir, fs, function cb() {
  console.log('\x1B[36m%s\x1B[0m', 'build目录已清空')
});