<template>
    <div class="login-container">
        <h2>Вхід як адміністратор</h2>
        <form @submit.prevent="login">
            <div>
                <label for="username">Логін:</label>
                <input type="text" id="username" v-model="username" required />
            </div>
            <div>
                <label for="password">Пароль:</label>
                <input type="password" id="password" v-model="password" required />
            </div>
            <button type="submit">Увійти</button>
            <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            errorMessage: '',
        }
    },
    methods: {
        login() {
            const adminUsername = 'admin'
            const adminPassword = '1111'

            if (this.username === adminUsername && this.password === adminPassword) {
                this.$store.commit('setAdmin', true)
                this.$router.push('/routes')
            } else {
                this.errorMessage = 'Неправильний логін або пароль!'
            }
        },
    },
}
</script>

<style scoped>
.login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
}
.error {
    color: red;
}
</style>
