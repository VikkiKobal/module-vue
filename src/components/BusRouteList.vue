<template>
    <div>
        <h1>Маршрути</h1>
        <button v-if="isAdmin" @click="logout">Вийти як адміністратор</button>

        <search-form @search="filterBusRoutes" />

        <ul>
            <li v-for="route in filteredRoutes" :key="route.routeNumber">
                <p>Маршрут {{ route.routeNumber }} - {{ route.endStop }}</p>
                <p>Автобус: {{ route.busBrand }} - Час поїздки: {{ route.tripTime }}</p>
                <button v-if="isAdmin" @click="deleteRoute(route.routeNumber)">Видалити</button>
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
</style>
