import Vue from 'vue' // class
import App from './App.vue' // component

import vueRouter from 'vue-router'

import { routes } from './routes/routes.js'

const router = new vueRouter({
  routes: routes,
  mode: 'history'
})

Vue.use(vueRouter)

new Vue({
  router,
  render: (abc) => {
    return abc(App)
  } 
}).$mount('#appabc')
