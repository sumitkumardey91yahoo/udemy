import Vue from 'vue'
import App from './App.vue'

import { router } from './router/routes'
import { store } from './store/store'

new Vue({
  data: {
    sumit: 100
  },
  el: '#app',
  router,
  store,
  render: h => h(App)
})
