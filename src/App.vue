<template>
    <div id="app">
        <the-header></the-header>
        <base-modal :show="hasErrorMessage"></base-modal>
        <router-view></router-view>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import TheHeader from './components/layout/TheHeader.vue';
import BaseModal from './components/base/BaseModal.vue';

export default {
    components: {
        TheHeader,
        BaseModal
    },
    computed: {
        ...mapGetters(['hasErrorMessage'])
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
    box-sizing: border-box;
}

html {
    font-family: 'Roboto', sans-serif;
}

body {
    margin: 0;
}
</style>
