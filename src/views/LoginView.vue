<template>
    <div class="login-container">
        <h2>Вхід як адміністратор</h2>
        <form @submit.prevent="login">
            <div class="input-group">
                <label for="username">Логін:</label>
                <input type="text" id="username" v-model="username" required />
            </div>
            <div class="input-group">
                <label for="password">Пароль:</label>
                <input type="password" id="password" v-model="password" required />
            </div>
            <button type="submit" class="login-button">Увійти</button>
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
    max-width: 500px;
    margin: 50px auto;
    padding: 30px;
    border: 1px solid #b0e0b3;
    border-radius: 8px;
    background-color: #f7f9f5;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h2 {
    color: #3a6351;
    text-align: center;
    margin-bottom: 20px;
}

.input-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    color: #333;
}

input[type='text'],
input[type='password'] {
    display: block;
    width: 95%;
    padding: 12px;
    border: 2px solid #b0e0b3;
    border-radius: 5px;
    font-size: 16px;
    transition: border-color 0.3s, box-shadow 0.3s;
}

input[type='text']:focus,
input[type='password']:focus {
    border-color: #3a6351;
    outline: none;
    box-shadow: 0 0 5px rgba(58, 99, 81, 0.5);
}

.login-button {
    width: 100%;
    padding: 12px;
    background-color: #3a6351;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
}

.login-button:hover {
    background-color: #305144;
}

.error {
    color: #e74c3c;
    text-align: center;
    margin-top: 10px;
}
</style>
