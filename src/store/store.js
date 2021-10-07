import Vue from 'vue';
import Vuex from 'vuex';

import coaches from './coaches/coaches';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        coaches
    }
});
// comments
