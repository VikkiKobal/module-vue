import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BusRouteList from '../components/BusRouteList.vue';
import LoginView from '../views/LoginView.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/routes', component: BusRouteList },
    { path: '/login', component: LoginView }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
