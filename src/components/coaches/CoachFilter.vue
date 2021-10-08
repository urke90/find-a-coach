<template>
    <base-card>
        <h2>Find your Coach</h2>
        <span class="filter-option">
            <input
                type="checkbox"
                id="frontend"
                @change="updateFiltersHandler"
                checked
            />
            <label for="frontend">Frontend</label>
        </span>
        <span class="filter-option">
            <input
                type="checkbox"
                id="backend"
                @change="updateFiltersHandler"
                checked
            />
            <label for="backend">Backend</label>
        </span>
        <span class="filter-option">
            <input
                type="checkbox"
                id="career"
                @change="updateFiltersHandler"
                checked
            />
            <label for="career">Career</label>
        </span>
    </base-card>
</template>

<script>
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
    methods: {
        updateFiltersHandler(ev) {
            // spread existing filters and change value based on target ID
            const updatedFilters = {
                ...this.filters,
                [ev.target.id]: ev.target.checked
            };
            this.filters = updatedFilters;
            this.$emit('update-filters', updatedFilters);
        }
    }
};
</script>

<style scoped>
h2 {
    margin: 0.5rem 0;
}

.filter-option {
    margin-right: 1rem;
}

.filter-option label,
.filter-option input {
    vertical-align: middle;
}

.filter-option label {
    margin-left: 0.25rem;
}

.filter-option.active label {
    font-weight: bold;
}
</style>
