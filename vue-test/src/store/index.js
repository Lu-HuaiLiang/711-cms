import Vue from 'vue'
import Vuex from 'vuex'
import user from './module/user'
import router from './module/router'
import tabNav from './module/tabNav'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: false,
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    
  },
  modules: {
    user,
    router,
    tabNav
  }
})
