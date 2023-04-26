import '@/assets/icons/index' //图标
import 'normalize.css'
import '@/design/index.scss'
import 'windi.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import resgisterGlobalComp from '@/components/resgisterGlobalComp'
import { setupStore } from '@/stores/index'
import { setupRouterGuard } from '@/router/guard'

export default (app, router) => {
  registerEPIcons(app)
  setupStore(app)

  resgisterGlobalComp(app)

  // 设置路由导航守卫
  setupRouterGuard(router)

  app.use(router)
}

function registerEPIcons(app) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
