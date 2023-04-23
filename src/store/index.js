import { createStore } from 'vuex'
import getters from './getters'

// 全局注册module
const modules = {}

const context = require.context('./modules', true, /\.js$/)

context.keys().forEach(key => {
  const reg = /.*\/(.*)\.js$/
  const matches = key.match(reg)
  const moduleName = matches[1] // 模块名称，文件名
  modules[moduleName] = context(key).default
})

export default createStore({
  getters,
  modules
})
