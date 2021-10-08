<template>
    <div>
        <section>
            Filter
        </section>
        <section>
            <base-card>
                <div class="controls">
                    <button>Refresh</button>
                    <base-button :is-link="true" link-to="/register"
                        >Register as Coach</base-button
                    >
                </div>
                <ul v-if="hasCoaches">
                    <coach-item
                        v-for="coach in coaches"
                        :key="coach.id"
                        :first-name="coach.firstName"
                        :last-name="coach.lastName"
                        :areas="coach.areas"
                        :id="coach.id"
                        :rate="coach.hourlyRate"
                    ></coach-item>
                </ul>
                <h3 v-else>No Coaches Found</h3>
            </base-card>
        </section>
    </div>
</template>

<script>
import BaseCard from '../../components/base/BaseCard.vue';
import CoachItem from '../../components/coaches/CoachItem.vue';

export default {
    components: {
        CoachItem,
        BaseCard
    },
    computed: {
        coaches() {
            return this.$store.getters.coaches;
        },
        hasCoaches() {
            return this.$store.getters.hasCoaches;
        }
    },
    methods: {
        idemo() {
            console.log('uraaaaa');
        }
    }
};
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.controls {
    display: flex;
    justify-content: space-between;
}
</style>
