import Vue from 'vue';
import VueRouter from 'vue-router';

import { routes } from './routes';
import store from './store/store.js';
import App from './App.vue';
import BaseCard from './components/base/BaseCard.vue';
import BaseButton from './components/base/BaseButton.vue';
import BaseBadge from './components/base/BaseBadge.vue';
import BaseSpinner from './components/base/BaseSpinner.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes
});

Vue.component('base-card', BaseCard);
Vue.component('base-button', BaseButton);
Vue.component('base-badge', BaseBadge);
Vue.component('base-spinner', BaseSpinner);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
