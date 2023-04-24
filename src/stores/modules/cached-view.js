import { pinia } from '../index'

export const useCachedViewStore = defineStore({
  id: 'cacheView',
  state: () => ({
    cachedView: new Set()
  }),
  getters: {
    cachedViewArr() {
      return Array.from(this.cachedView)
    }
  },
  actions: {
    addViewName(name) {
      this.cachedView.add(name)
      this.cachedView.delete(undefined)
    },
    removeViewName(name) {
      this.cachedView.delete(name)
    },
    removeCurrentViewName() {
      const route = useRoute()
      this.cachedView.delete(route.name)
    },
    clearCachedView() {
      this.cachedView = new Set()
    }
  }
})

export function useCachedViewStoreOutside() {
  return useCachedViewStore(pinia)
}
