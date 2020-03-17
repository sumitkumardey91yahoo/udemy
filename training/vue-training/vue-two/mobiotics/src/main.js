import Vue from 'vue' // class
import App from './App.vue' // component

import vueRouter from 'vue-router'

import { routes } from './routes/routes.js'

import { store } from './store/store'

// var sumit = 1;

Vue.filter('reverse', (d) => {

  return d.split('').reverse().join('');
})

const router = new vueRouter({
  routes: routes,
  mode: 'history'
})

// router.beforeEach((to, from, next) => {
//   if (to.fullPath !== '/' && !localStorage.getItem(‘auth’)) next(’/’)
//   else next()
//   })

// router.beforeEach((to, from, next) => {
//   if (to.fullPath !== '/login' && !localStorage.getItem('auth')) next({name: 'login'})
//   else next()
// })


Vue.use(vueRouter)

new Vue({
  router: router,
  store: store,
  render: (abc) => {
    return abc(App)
  } 
}).$mount('#appabc')
