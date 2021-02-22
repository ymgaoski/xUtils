//引入 nodeJS 内置模块 path
const path = require('path');

module.exports = {
  // 模式
  mode: 'development', // 也可以使用 production
  // 入口
  entry: './src/index.js', 
  // 出口
  output: {
    // 打包文件夹
    path: path.resolve(__dirname, 'dist'),
    // 打包文件
    filename: 'xgao-utils.js', 
    // 向外暴露的对象的名称
    library: 'xUtils',
    // 打包生成库可以通过 umd/esm/commonjs/reqirejs 的语法引入
    libraryTarget: 'umd', 
    // 解决node和浏览器都能使用 全局属性
    globalObject: "this",
  },
}