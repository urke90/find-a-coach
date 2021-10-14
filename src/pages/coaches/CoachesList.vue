<template>
    <div>
        <section>
            <coach-filter @update-filters="setFilters"></coach-filter>
        </section>
        <section>
            <base-card>
                <div class="controls">
                    <base-button @click.native="loadCoaches" mode="outline"
                        >Refresh</base-button
                    >
                    <base-button :is-link="true" link-to="/register"
                        >Register as Coach</base-button
                    >
                </div>
                <div v-if="isLoading">
                    <base-spinner></base-spinner>
                </div>
                <ul v-else-if="hasCoaches && !isLoading">
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
                <h3 v-else>
                    No Coaches Found. Please register as coach to continue!
                </h3>
            </base-card>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

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
        ...mapGetters(['isLoading', 'hasCoaches']),
        filteredCoaches() {
            return this.$store.getters.coaches.filter(coach => {
                if (this.filters.frontend && coach.areas.includes('frontend'))
                    return true;
                if (this.filters.backend && coach.areas.includes('backend'))
                    return true;
                if (this.filters.career && coach.areas.includes('career'))
                    return true;
            });
        }
    },
    methods: {
        setFilters(updatedFilters) {
            this.filters = updatedFilters;
        },
        async loadCoaches() {
            await this.$store.dispatch('setCoaches');
        }
    },
    async created() {
        this.loadCoaches();
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
