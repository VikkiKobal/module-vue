<template>
    <li>
        <p>Маршрут {{ route.routeNumber }} - {{ route.endStop }}</p>
        <p>Автобус: {{ route.busBrand }} - Час поїздки: {{ route.tripTime }}</p>
        <button v-if="isAdmin" @click="$emit('delete', route.routeNumber)">Видалити</button>
    </li>
</template>

<script>
export default {
    props: {
        route: Object,
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
}
</script>

<style scoped>
.route-item {
    padding: 15px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
}

.route-info {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
}

.bus-info {
    font-size: 16px;
    margin-bottom: 10px;
}

.delete-button {
    padding: 8px 12px;
    background-color: #ff4d4d;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.delete-button:hover {
    background-color: #ff1a1a;
}
</style>