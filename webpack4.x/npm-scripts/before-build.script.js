var fs = require('fs');
var rimraf = require('rimraf');
var dirVars = require('../webpack-config/base/dir-vars.config.js');
console.log(dirVars.buildDir)
rimraf(dirVars.buildDir, fs, function cb() {
  console.log('%c build目录已清空', 'color: #47a33e');
});