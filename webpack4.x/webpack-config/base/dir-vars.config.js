var path = require('path');
var moduleExports = {};

const currentDirectory = path.resolve(__dirname, '../../');
console.log(currentDirectory);
// 源文件目录
moduleExports.staticRootDir = path.resolve(__dirname, '../../'); // 项目根目录
moduleExports.srcRootDir = path.resolve(moduleExports.staticRootDir, './src'); // 项目业务代码根目录
moduleExports.pagesDir = path.resolve(moduleExports.srcRootDir, './views'); // 存放各个页面独有的部分，如入口文件、只有该页面使用到的css、模板文件等
moduleExports.publicStatic = path.resolve(moduleExports.staticRootDir, './static')

// 生成文件目录
moduleExports.buildDir = path.resolve(moduleExports.staticRootDir, './build'); // 存放编译后生成的所有代码、资源（图片、字体等，虽然只是简单的从源目录迁移过来）

module.exports = moduleExports;