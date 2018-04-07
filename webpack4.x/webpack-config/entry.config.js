var path = require('path');
var dirVars = require('./base/dir-vars.config.js');
var pageArr = require('./base/page-entries.config.js');
var configEntry = {};
pageArr.forEach((page) => {
  configEntry[path.basename(page, path.extname(page))] = path.resolve(dirVars.srcRootDir, page);
});
module.exports = configEntry;