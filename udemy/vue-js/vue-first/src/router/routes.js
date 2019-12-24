import Vue from 'vue';
import vueRouter from 'vue-router';

import showParent from '../components/show/showData.vue'
import home from '../components/home/home.vue'
import eventCom from '../components/eventBus/parent.vue'

import service from '../components/service/data.vue'
import info from '../components/service/info.vue'
import parent from '../components/dymamic/parent.vue'




console.log(showParent)

Vue.use(vueRouter);

 export const router = new vueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: home,
            name: 'home'
        },
        {
            path: '/show/:showId',
            component: showParent,
            name: 'showPage'
        },
        {
            path: '/event',
            component: eventCom,
            name: 'eventCom'
        },
        {
            path: '/serviced',
            component: service,
            name: 'service'
        },
        {
            path: '/info',
            component: info,
            name: 'info'
        },
        {
            path: '/parentcom',
            component: parent,
            name: 'parent'
        }
    ]
});
