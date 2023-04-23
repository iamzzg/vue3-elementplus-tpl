const appModule = {
  namespaced: true,
  state() {
    return {
      appTitle: 'App'
    }
  },
  mutations: {
    setAppTitle(state, title) {
      state.appTitle = title
    }
  },
  actions: {
    setAppTitle({ commit }, title) {
      commit('setAppTitle', title)
    }
  }
}

export default appModule
