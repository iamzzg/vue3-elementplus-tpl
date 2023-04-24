import 'nprogress/nprogress.css'
import NProgress from 'nprogress'
import { useCachedViewStoreOutside } from '@/stores/modules/cached-view'

NProgress.configure({ showSpinner: false })

const cachedViewStore = useCachedViewStoreOutside()

export function setupRouterGuard(router) {
  setupNprogressGaurd(router)

  setupCachedViewGaurd(router)
}

// nprogress
function setupNprogressGaurd(router) {
  router.beforeEach(() => {
    NProgress.start()
  })

  router.afterEach(() => {
    NProgress.done()
  })
}

// 页面 keep-alive 缓存
function setupCachedViewGaurd(router) {
  router.beforeEach((to, from, next) => {
    if (to.name && to.meta.cache) {
      cachedViewStore.addViewName(to.name)
      // debugger
    }
    next()
  })

  // router.afterEach(() => {
  // })
}
