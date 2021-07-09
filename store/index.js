export default {
  state: () => {
    return {
      headerHeight: 92
    }
  },

  getters: {
    headerHeight: state => state.headerHeight
  },

  mutations: {
    SET_HEADER_HEIGHT (state, payload) {
      state.headerHeight = payload
    }
  },

  actions: {
    setHeaderHeight ({ commit }, payload) {
      commit('SET_HEADER_HEIGHT', payload)
    }
  }
}
