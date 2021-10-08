<template>
    <div>
        <section>
            <coach-filter @update-filters="setFilters"></coach-filter>
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
                        v-for="coach in filteredCoaches"
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
import CoachFilter from '../../components/coaches/CoachFilter.vue';

export default {
    data() {
        return {
            filters: {
                frontend: true,
                backend: true,
                career: true
            }
        };
    },
    components: {
        CoachItem,
        BaseCard,
        CoachFilter
    },
    computed: {
        filteredCoaches() {
            return this.$store.getters.coaches.filter(coach => {
                if (this.filters.frontend && coach.areas.includes('frontend'))
                    return true;
                if (this.filters.backend && coach.areas.includes('backend'))
                    return true;
                if (this.filters.career && coach.areas.includes('career'))
                    return true;
            });
        },
        hasCoaches() {
            return this.$store.getters.hasCoaches;
        }
    },
    methods: {
        setFilters(updatedFilters) {
            this.filters = updatedFilters;
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
