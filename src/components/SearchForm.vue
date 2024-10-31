<template>
    <div class="search-container">
        <input
            type="text"
            v-model="query"
            placeholder="Пошук за номером маршруту"
            class="search-input"
            @input="search"
            aria-label="Search for bus route by number"
        />
        <button @click="search" class="search-button" aria-label="Search">Пошук</button>
        <p v-if="noResults" class="no-results-message">Нічого не знайдено</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            query: '',
        }
    },
    computed: {
        noResults() {
            return this.query && this.$store.getters.filteredBusRoutes(this.query).length === 0
        },
    },
    methods: {
        search() {
            this.$emit('search', this.query)
        },
    },
}
</script>

<style scoped>
</style>
