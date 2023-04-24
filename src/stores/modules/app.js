import { pinia } from '../index'
export const useAppStore = defineStore({
  id: 'app',
  state: () => {
    return {
      appTitle: 'App'
    }
  },
  actions: {
    setAppTitle(title) {
      this.appTitle = title
    }
  },
  persist: {
    key: 'app',
    storage: localStorage
  } // 持久化
})

// 组件外部使用
export function useAppStoreOutside() {
  return useAppStore(pinia)
}
