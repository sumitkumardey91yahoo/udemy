import Vue from 'vue'
import App from './App.vue'

import { router } from './store'

import { store } from './vuex'

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

import sumit from 'sumit-kumar-dey-popup'

Vue.use(sumit)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
