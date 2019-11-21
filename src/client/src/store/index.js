import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    userId: ''
  },
  mutations: {
    LOGIN (state, { token, userId }) {
      state.token = token
      state.userId = userId
    },
    LOGOUT (state) {
      state.token = ''
      state.userId = ''
    }
  },
  actions: {
  },
  modules: {
  }
})
