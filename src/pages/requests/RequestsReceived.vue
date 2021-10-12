<template>
    <section>
        <base-card>
            <header>
                <h2>Received Requests</h2>
            </header>
            <base-spinner v-if="isLoading"></base-spinner>
            <ul v-else-if="hasRequests && !isLoading">
                <request-item
                    v-for="req in requests"
                    :key="req.id"
                    :email="req.email"
                    :message="req.message"
                ></request-item>
            </ul>
            <h3 v-else>No Requests yet!</h3>
        </base-card>
    </section>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';

export default {
    components: {
        RequestItem
    },
    data() {
        return {
            isLoading: false
        };
    },
    computed: {
        requests() {
            return this.$store.getters.allRequests;
        },
        hasRequests() {
            return this.$store.getters.hasRequests;
        }
    },
    async created() {
        try {
            this.isLoading = true;
            await this.$store.dispatch('setRequests');
            this.isLoading = false;
        } catch (err) {
            console.error(err);
        }
    }
};
</script>

<style scoped>
header {
    text-align: center;
}

ul {
    list-style: none;
    margin: 2rem auto;
    padding: 0;
    max-width: 30rem;
}

h3 {
    text-align: center;
}
</style>
