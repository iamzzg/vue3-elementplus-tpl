const { name } = require('./package.json')
const { loadEnv } = require('./build/env')

const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

const path = require('path')
const port = process.env.VUE_APP_PORT || process.env.npm_config_port || 666

function resolvePath(dir) {
  return path.resolve(__dirname, dir)
}

const envObj = loadEnv()

module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  productionSourceMap: envObj.sourceMap,
  devServer: {
    port,
    open: true,
    overlay: {
      errors: false,
      warnings: false
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        // 在所有scss文件注入该文件
        prependData: `@import "~@/design/color.scss";`
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolvePath('src')
      }
    },
    // 微应用配置
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  },
  chainWebpack(config) {
    // svg-icon
    config.module.rule('svg').exclude.add(resolvePath('src/assets/icons')).end()

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolvePath('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    // 在vue组件的style标签自动导入scss
    const _variables = config.module.rule('scss').oneOfs.store
    _variables.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: [resolvePath('src/design/color.scss'), resolvePath('src/design/_mixin.scss')]
        })
        .end()
    })
  }
}
