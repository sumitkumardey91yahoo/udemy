import Vue from 'vue'
import vueRouter from 'vue-router'
import a from './components/a.vue';
import b from './components/b.vue';
import app from './App.vue';
import com from './components/com/parent.vue';



Vue.use(vueRouter);

 export const router = new vueRouter({
    routes: [
        {
            component: com,
            path: '/', 
            name: 'com'
        },
        {
            component: a,
            path: '/a/:id',
            name: 'abc'
        },
        {
            component: b,
            path: '/b',
            name: 'b'
        }
    ],
    mode: 'history'
})