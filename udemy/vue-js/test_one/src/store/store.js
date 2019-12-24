import vue from 'vue';
import vuex from 'vuex';
vue.use(vuex);

import state from './state.js'
import * as getters from './getters';
console.log("getters",getters)
import * as mutations from './mutations'

console.log(vuex)

export const store = new vuex.Store({
  state,
  getters,
  mutations
});