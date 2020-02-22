import child from '../components/Child.vue';
import parent from '../Parent.vue'
import vuex from '../components/Vuex.vue'

export const routes = [
    {
        name: 'home',
        path: '/home/:id',
        component: child
    },
    {
        name: 'index',
        path: '/',
        component: parent
    },
    {
        name: 'vuex',
        path: '/vuex',
        component: vuex
    },
]