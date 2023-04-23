module.exports = {
  /* 配置项... */
  // 接受相对于项目根目录的 globs 和文件路径
  // 默认情况下，它会扫描在 src/ 目录下扩展名为 vue, html, mdx, pug, jsx, tsx 的文件。
  preflight: false,
  extract: {
    // 设置 扫描 指定js文件,有些js中使用了类名
    include: ['src/**/*.{vue,jsx,tsx,svelte}', 'shared/**/*.{vue,ts}'],
    exclude: ['node_modules/**/*', 'git/**/*']
  },
  theme: {
    extend: {
      colors: {
        primary: '#337ecc'
      }
    }
  }
}
