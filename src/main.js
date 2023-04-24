import './public-path'
import { createApp } from 'vue'
import App from './App.vue'
import routes, { createHistoryRouterByRoutes } from './router'
import setupApp from './logics/setup'

let router = null
let instance = null

function render(props = {}) {
  const { container } = props
  router = createHistoryRouterByRoutes(routes)

  instance = createApp(App)

  setupApp(instance, router)

  instance.mount(container ? container.querySelector('#app') : '#app')
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped')
}
export async function mount(props) {
  console.log('[vue] props from main framework', props)
  render(props)
}
export async function unmount() {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
  router = null
}
