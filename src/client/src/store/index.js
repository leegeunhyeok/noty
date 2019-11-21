import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ''
  },
  mutations: {
    LOGIN (state, token) {
      state.token = token
    },
    LOGOUT (state) {
      state.token = ''
    }
  },
  actions: {
  },
  modules: {
  }
})
