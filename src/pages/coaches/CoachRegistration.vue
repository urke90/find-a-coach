<template>
    <section>
        <base-card>
            <coach-form @submit-data="registerCoach"></coach-form>
        </base-card>
    </section>
</template>

<script>
import { mapActions } from 'vuex';
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
    components: {
        CoachForm
    },
    methods: {
        ...mapActions(['addCoach']),
        registerCoach(data) {
            console.log('data iz register coach forme', data);
            this.addCoach(data);
            this.$router.push('/coaches');
        }
    }
};
</script>
