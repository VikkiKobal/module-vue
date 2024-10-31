<template>
    <div>
        <h1>Маршрути</h1>
        <button v-if="isAdmin" @click="logout" class="logout-button">Вийти як адміністратор</button>

        <search-form @search="filterBusRoutes" />

        <ul>
            <li v-for="route in filteredRoutes" :key="route.routeNumber">
                <p>Маршрут {{ route.routeNumber }} - {{ route.endStop }}</p>
                <p>Автобус: {{ route.busBrand }} - Час поїздки: {{ route.tripTime }}</p>
                <button v-if="isAdmin" @click="deleteRoute(route.routeNumber)" class="delete-button">Видалити</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SearchForm from '../components/SearchForm.vue'

export default {
    components: { SearchForm },
    computed: {
        ...mapGetters(['getBusRoutes']),
        isAdmin() {
            return this.$store.state.isAdmin
        },
        routes() {
            return this.getBusRoutes
        },
        filteredRoutes() {
            if (!this.searchQuery) return this.routes
            return this.routes.filter((route) => route.routeNumber.includes(this.searchQuery))
        },
    },
    data() {
        return {
            searchQuery: '',
        }
    },
    methods: {
        ...mapActions(['deleteBusRoute']),
        deleteRoute(routeNumber) {
            this.deleteBusRoute(routeNumber)
        },
        logout() {
            this.$store.dispatch('logout')
            this.$router.push('/')
        },
        filterBusRoutes(query) {
            this.searchQuery = query
        },
    },
}
</script>

<style scoped>
.logout-button,
.delete-button {
    padding: 10px 12px;
    background-color: #3a6351;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s, transform 0.3s;
}

.logout-button:hover,
.delete-button:hover {
    background-color: #305144;
    transform: scale(1.05);
}

.logout-button:focus,
.delete-button:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(58, 99, 81, 0.5);
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin-bottom: 15px;
}
</style>
