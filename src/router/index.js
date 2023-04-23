import { createRouter, createWebHistory } from 'vue-router'
import { basicRoute } from './routes'

export const createHistoryRouterByRoutes = routes => {
  return createRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/app-vue/' : '',
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
}

export default basicRoute
