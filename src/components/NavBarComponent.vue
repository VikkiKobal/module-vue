<template>
    <nav>
        <ul>
            <li>
                <router-link to="/">Головна</router-link>
            </li>
            <li>
                <router-link to="/routes">Маршрути</router-link>
            </li>
            <li>
                <router-link to="/login">Вхід</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavBarComponent',
}
</script>

<style scoped>
nav {
    background-color: #f8f9fa;
    padding: 10px;
}
nav ul {
    list-style-type: none;
    display: flex;
}
nav li {
    margin-right: 20px;
    font-size: 22px;
}
nav a {
    text-decoration: none;
    color: #3a6351;
    font-family: 'Alegreya Sans SC';
}
nav a:hover {
    text-decoration: underline;
}
</style>
