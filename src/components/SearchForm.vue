<template>
    <div class="search-container">
        <input
            type="text"
            v-model="query"
            placeholder="Пошук за номером маршруту"
            class="search-input"
            @input="search"
        />
        <button @click="search" class="search-button">Пошук</button>
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
.search-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
}

.search-input {
    padding: 10px;
    border: 2px solid #a8d5ba;
    border-radius: 5px;
    font-size: 16px;
    width: 300px;
    transition: border-color 0.3s, box-shadow 0.3s;
}

.search-input:focus {
    border-color: #4caf50;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
    outline: none;
}

.search-button {
    padding: 10px 15px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    margin-left: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.search-button:hover {
    background-color: #388e3c;
}

.no-results-message {
    color: #f44336;
    margin-top: 10px;
    font-size: 14px;
}
</style>
