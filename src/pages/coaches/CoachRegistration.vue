<template>
    <section>
        <base-card>
            <base-spinner v-if="isLoading"></base-spinner>
            <coach-form
                v-else-if="!isLoading"
                @submit-data="registerCoach"
            ></coach-form>
        </base-card>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
    components: {
        CoachForm
    },
    methods: {
        registerCoach(data) {
            this.$store.dispatch('addCoach', data);
            this.$router.push('/coaches');
        }
    },
    computed: {
        ...mapGetters(['isLoading'])
    }
};
</script>
