module.exports = {
  printWidth: 100, // 打印宽度
  tabWidth: 2, // tab 宽度
  useTabs: false, // 使用tab
  semi: false, // 分号
  vueIndentScriptAndStyle: true, // vue indent <script/>  <style/>
  singleQuote: true, // 单引号
  quoteProps: 'as-needed', // 对象key 引号
  bracketSpacing: true, // 导入对象和{}之间加空格
  trailingComma: 'none', // 尾随逗号
  // jsxBracketSameLine: true, // 尖括号和结尾同一行 Deprecated
  bracketSameLine: true, // 尖括号和结尾同一行
  jsxSingleQuote: false, // jsx 中使用单引号
  arrowParens: 'avoid', //  x=>x , (x)=>
  insertPragma: false, // insert <!-- @format -->
  requirePragma: false, // 只在@format或者@prettier 文件格式
  proseWrap: 'never', //  prose散文是否根据printWidth 格式换行
  htmlWhitespaceSensitivity: 'strict', // HTML空白灵敏度
  endOfLine: 'auto' // 结尾
}
