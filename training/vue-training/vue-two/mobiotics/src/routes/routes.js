import child from '../components/Child.vue';
import parent from '../Parent.vue'
import vuex from '../components/Vuex.vue'
import login from '../components/login.vue'

import init from '../components/sumit/Init.vue'


export const routes = [
    {
        name: 'home',
        path: '/home/:id',
        component: child,
        meta: { requiresAuth: true }

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
    {
        name: 'login',
        path: '/login',
        component: login
    },
    {
        name: 'init',
        path: '/init',
        component: init
    },
    {
        path: '*',
        redirect: 'https://google.com',
      },
]


