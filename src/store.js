import Vue from 'vue'
import Vuex from 'vuex'

// peticiones
import axios from './axios-auth';


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        idToken: null,
        userId: null,
        user: null
    },
    mutations: {
        authUser(state, userData) {
            state.idToken = userData.token,
                state.userId = '07'
        },
        storeUser(state, user) {
            state.user = user
        }
    },
    actions: {
        signup({ commit }, authData) {

        },
        login({ commit, dispatch }, authData) {
            axios.post('/api/login', authData)
                .then(res => {
                    console.log(res);
                    commit('authUser', {
                        token: res.data.token
                    });
                    dispatch('storeUser', 'Angel');
                })
                .catch(error => console.log(error))
        },
        storeUser({ commit }, user) {
            commit('storeUser', user);
        }
    },
    getters: {
        user(state) {
            return state.user;
        },
        isAuthenticated(state) {
            return state.idToken !== null;
        }
    }
})