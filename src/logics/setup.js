import '@/assets/icons/index' //图标
import 'normalize.css'
import '@/design/index.scss'
import 'windi.css'

import resgisterGlobalComp from '@/components/resgisterGlobalComp'
import { setupStore } from '@/stores/index'
import { setupRouterGuard } from '@/router/guard'

export default (app, router) => {
  setupStore(app)

  resgisterGlobalComp(app)

  // 设置路由导航守卫
  setupRouterGuard(router)

  app.use(router)
}

// 全局注入 体积太大
// function registerEPIcons(app) {
//   for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//     app.component(key, component)
//   }
// }
