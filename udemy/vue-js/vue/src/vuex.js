import vue from 'vue';
import vuex from 'vuex';
vue.use(vuex);
import * as getters from './getters';
import * as mutations from './mutations'
import paytm from './paytm'
console.log(vuex);

console.log(getters)
export const store = new vuex.Store({
    state: {
        name: 'sumit'
    },
    getters: getters,
    mutations: mutations,
    actions: {

    },
    modules: {
        paytm
    }
})

console.log(store)