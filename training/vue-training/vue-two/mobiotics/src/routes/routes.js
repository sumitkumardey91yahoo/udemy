import child from '../components/Child.vue';
import parent from '../Parent.vue'

export const routes = [
    {
        name: 'home',
        path: '/home',
        component: child
    },
    {
        name: 'index',
        path: '/',
        component: parent
    },
]