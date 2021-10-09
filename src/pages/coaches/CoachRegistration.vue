<template>
    <section>
        <base-card>
            <coach-form @submit-data="registerCoach"></coach-form>
        </base-card>
    </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
    components: {
        CoachForm
    },
    methods: {
        registerCoach(data) {
            console.log('data iz register coach forme', data);
        }
    }
};
</script>
