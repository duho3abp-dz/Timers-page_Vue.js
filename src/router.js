import Vue from 'vue';
import Router from 'vue-router';
import Main from './pages/Main';
import Timers from './pages/Timers';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Main
        },
        {
            path: '/timers',
            component: Timers
        }
    ]
});