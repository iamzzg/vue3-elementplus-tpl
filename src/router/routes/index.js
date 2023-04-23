import { PageNotFoundRoute, RootRoute } from './basic-route'

// 基本路由
const commonRouteList = []
const commonRouteModules = require.context('./common', true, /\.js$/)
commonRouteModules.keys().forEach(key => {
  const mod = commonRouteModules(key).default || {}
  const modArr = Array.isArray(mod) ? mod : [mod]
  commonRouteList.push(...modArr)
})

// 动态路由
const asyncRouteList = []
const asyncRouteModules = require.context('./modules', true, /\.js$/)
asyncRouteModules.keys().forEach(key => {
  const mod = asyncRouteModules(key).default || {}
  console.log(mod)

  const modArr = Array.isArray(mod) ? mod : [mod]
  asyncRouteList.push(...modArr)
})

export const asyncRoutes = asyncRouteList

export const basicRoute = [RootRoute, ...commonRouteList, PageNotFoundRoute]
