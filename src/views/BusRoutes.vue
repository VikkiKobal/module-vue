<template>
    <div class="bus-routes-container">
        <h1>Маршрути автобусів</h1>
        <search-form @search="filterBusRoutes" />
        <bus-route-list :busRoutes="filteredBusRoutes" :isAdmin="isAdmin" @delete-route="deleteBusRoute" />
    </div>
</template>

<script>
import BusRouteList from '../components/BusRouteList.vue'
import SearchForm from '../components/SearchForm.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
    components: { BusRouteList, SearchForm },
    data() {
        return {
            query: '',
        }
    },
    computed: {
        ...mapGetters(['isAdmin']),
        filteredBusRoutes() {
            return this.$store.getters.filteredBusRoutes(this.query)
        },
    },
    methods: {
        ...mapActions(['deleteBusRoute']),
        filterBusRoutes(query) {
            this.query = query
        },
    },
    mounted() {
        this.fetchBusRoutes()
    },
}
</script>

<style scoped>
.bus-routes-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    color: #343a40;
}

.search-form {
    margin-bottom: 20px;
}
</style>
