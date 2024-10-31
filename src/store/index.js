import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            busRoutes: [
                {
                    routeNumber: "101",
                    endStop: "Центральний вокзал",
                    busBrand: "Mercedes",
                    tripTime: "30 хв"
                },
                {
                    routeNumber: "202",
                    endStop: "Університет",
                    busBrand: "Volvo",
                    tripTime: "20 хв"
                },
                {
                    routeNumber: "303",
                    endStop: "Аеропорт",
                    busBrand: "Scania",
                    tripTime: "45 хв"
                },
                {
                    routeNumber: "404",
                    endStop: "Головна площа",
                    busBrand: "MAN",
                    tripTime: "15 хв"
                },
                {
                    routeNumber: "505",
                    endStop: "ТЦ Океан Плаза",
                    busBrand: "Iveco",
                    tripTime: "25 хв"
                },
                {
                    routeNumber: "606",
                    endStop: "Автовокзал",
                    busBrand: "Mercedes",
                    tripTime: "35 хв"
                },
                {
                    routeNumber: "707",
                    endStop: "Парк Шевченка",
                    busBrand: "Volvo",
                    tripTime: "18 хв"
                },
                {
                    routeNumber: "808",
                    endStop: "Кінотеатр Київ",
                    busBrand: "Neoplan",
                    tripTime: "22 хв"
                },
                {
                    routeNumber: "909",
                    endStop: "Стадіон Олімпійський",
                    busBrand: "Scania",
                    tripTime: "28 хв"
                },
                {
                    routeNumber: "1010",
                    endStop: "Житловий район Лісовий",
                    busBrand: "Mercedes",
                    tripTime: "40 хв"
                }
            ],
            isAdmin: false
        };
    },
    getters: {
        getBusRoutes(state) {
            return state.busRoutes;
        },
        filteredBusRoutes: (state) => (query) => {
            if (!query) return state.busRoutes;
            return state.busRoutes.filter(route =>
                route.routeNumber.toLowerCase().includes(query.toLowerCase()) ||
                route.endStop.toLowerCase().includes(query.toLowerCase())
            );
        },
        isAdmin(state) {
            return state.isAdmin;
        }
    },
    mutations: {
        deleteBusRoute(state, routeNumber) {
            state.busRoutes = state.busRoutes.filter(route => route.routeNumber !== routeNumber);
        },
        setAdmin(state, status) {
            state.isAdmin = status;
        }
    },
    actions: {
        deleteBusRoute({ commit }, routeNumber) {
            commit('deleteBusRoute', routeNumber);
        },
        logout({ commit }) {
            commit('setAdmin', false);
        },
        setAdminStatus({ commit }, status) {
            commit('setAdmin', status);
        }
    }
});

export default store;
