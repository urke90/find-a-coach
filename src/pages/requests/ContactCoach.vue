<template>
    <div>
        <base-spinner v-if="isLoading"></base-spinner>
        <form @submit.prevent="submitForm" v-else-if="!isLoading">
            <div>
                <label for="email">E-Mail</label>
                <input type="email" id="email" v-model.trim="email" />
            </div>
            <div>
                <label for="message">Message</label>
                <textarea
                    id="message"
                    rows="5"
                    v-model.trim="message"
                ></textarea>
            </div>
            <div class="actions">
                <base-button>Send Message</base-button>
            </div>
        </form>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            email: '',
            message: ''
        };
    },
    computed: {
        ...mapGetters(['isLoading'])
    },
    methods: {
        submitForm() {
            const request = {
                email: this.email,
                message: this.message,
                coachId: this.$route.params.id
            };
            this.$store.dispatch('addRequest', request);
            this.$router.push('/requests');
        }
    }
};
</script>

<style scoped>
form {
    margin: 1rem;
    border: 1px solid #ccc;
    border-radius: 12px;
    padding: 1rem;
}

.form-control {
    margin: 0.5rem 0;
}

label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    border: 1px solid #ccc;
    padding: 0.15rem;
}

input:focus,
textarea:focus {
    border-color: #3d008d;
    background-color: #faf6ff;
    outline: none;
}

.errors {
    font-weight: bold;
    color: red;
}

.actions {
    text-align: center;
}
</style>
