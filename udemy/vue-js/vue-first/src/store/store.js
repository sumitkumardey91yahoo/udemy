import Vue from 'vue';
import vuex from 'vuex';

console.log("vuex", vuex)

Vue.use(vuex);

import * as getters from './getters'
import * as mutations from './mutations'

import * as actions from './actions'

import * as subscribe from './subscribeModule'

export const store = new vuex.Store({
    state: {
        name: 'test',
        age: 0,
        baseurl: ''
    },
    getters,
    mutations,
    actions,
    modules: {
        subscribe
    }
})

