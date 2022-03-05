import axios from 'axios'

const state = () => ({
    user: {
        data: {},
        token: sessionStorage.getItem('token'),
    },
})
const getters = {
    getToken: (state) => {
        return state.user.token
    },
}

const actions = {
    async login({ commit }, userData) {
        const resp = await axios.post('/login', userData)
        commit('setUser', resp.data)
    },

    async logout({ commit }) {
        commit('logout')
    },
}

const mutations = {
    setUser: (state, data) => {
        if (data.token) {
            state.user.token = data.token
            state.user.data = data?.data
            sessionStorage.setItem('token', data.token)
        }
    },

    logout: async (state) => {
        state.user.data = {}
        state.user.token = null
        sessionStorage.removeItem('token')
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
