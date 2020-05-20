import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({ // adding stuff to the headers or changing what's displayed on it
  strict: false, // never modify the state unless it's through an action or mutation
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setUser (state, user) {
      state.user = user
      if (user) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token) // call the mutation called setToken and pass that token
    },
    setUser ({ commit }, user) {
      commit('setUser', user)
    }
  }
})
