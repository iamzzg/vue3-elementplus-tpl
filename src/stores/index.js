import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
export const pinia = createPinia()

// 默认初始化数据不会持久化 需要改变数据才会持久化
pinia.use(piniaPluginPersistedstate)
export function setupStore(app) {
  app.use(pinia)
}
