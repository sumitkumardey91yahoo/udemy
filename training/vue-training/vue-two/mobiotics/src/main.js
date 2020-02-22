import Vue from 'vue' // class
import App from './App.vue' // component

import vueRouter from 'vue-router'

import { routes } from './routes/routes.js'

import { store } from './store/store'



Vue.filter('reverse', (d) => {

  return d.split('').reverse().join('');
})

const router = new vueRouter({
  routes: routes,
  mode: 'history'
})

Vue.use(vueRouter)

new Vue({
  router: router,
  store: store,
  render: (abc) => {
    return abc(App)
  } 
}).$mount('#appabc')
