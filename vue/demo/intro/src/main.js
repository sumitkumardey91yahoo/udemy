import Vue from 'vue'
import App from './App.vue'
import { store } from './store/stote'

Vue.config.productionTip = false

new Vue({
  render: function(h) {
    return h(App)
  },
  store: store
}).$mount('#app-one')
