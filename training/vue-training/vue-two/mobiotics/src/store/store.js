import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as abc from './mutations';
import * as actions from './actions'
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        color: 'red',
        name: 'mobiotics'
    },
    getters,
    mutations: abc,
    actions
})