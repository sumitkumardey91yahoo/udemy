import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';

const Movie = (resolve) => {
  require.ensure(['@/components/HelloWorld'], () => {
    resolve(require('@/components/HelloWorld'))
  }, 'Route-Movie');
};

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Movie
    },
  ],
  mode:'history'
});
