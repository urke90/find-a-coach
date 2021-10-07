import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import { routes } from './routes';
import store from './store/store.js';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

/*
1. napraviti vuex store
2. getters.
    - coaches ---> vraca sve coaches
    - hasCoaches ---> coaches.length > 1
3. u coachesList
    - filteredCoaches ---> returns coaches
    - ako ima coaches izlistati ih, ako nema "No Coaches Found"
*/
