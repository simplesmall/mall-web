/**
 * Created by 简小
 * Created on lucky 2020/12/14  19:56
 */
import ProductState from './states'

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = Vuex.Store({
  state: ProductState
})

export default store
