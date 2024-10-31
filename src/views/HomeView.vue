<template>
    <div>
        <h1>Ласкаво просимо до довідника студентів!</h1>
        <p>Тут ви можете знайти інформацію про розклад руху маршрутних таксі.</p>
        <router-link to="/routes">Перейти до маршрутів</router-link>
    </div>
</template>

<script>
export default {
    name: 'HomeView',
}
</script>
<style scoped>
.router-link {
    display: inline-block;
    padding: 10px 20px;
    background-color: #3a6351;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-size: 16px;
    transition: background-color 0.3s, transform 0.3s;
    margin: 0 auto;
    text-align: center;
}

div {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #b0e0b3;
    border-radius: 8px;
    background-color: #f7f9f5;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}
</style>