import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router';

import  { routes } from './routes'

Vue.use(vueRouter);

let router = new vueRouter({
  routes,
  mode: "history"
});

new Vue({
  el: '#app',
  router,
  render: function(cb) {
    return cb(App)
  }

 // render: h => h(App)
})
