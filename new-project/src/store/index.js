import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    comments: []
  },
  getters: {
    getComments: state => state.comments
  },
  actions: {
    changeComment(context, obj) {
      context.commit('changeComment', obj)
    },
    addComment (context, obj) {
      context.commit('addComment', obj)
    },
    removeComment (context, obj) {
      context.commit('removeComment', obj)
    }
  },
  mutations: {
    changeComment (state, payload) {
      state.comments[payload.id].message = payload.message
    },
    addComment (state, payload) {
      state.comments.unshift(payload)
    },
    removeComment (state, payload) {
      state.comments.splice(payload, 1)
    }
  }
})