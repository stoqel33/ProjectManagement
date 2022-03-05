import axios from 'axios'

import store from '@/store'
import { router } from '@/main'

axios.defaults.baseURL = 'http://localhost:8000/api'

axios.interceptors.request.use((config) => {
    if (config.headers == undefined) config.headers = {}
    config.headers['Authorization'] = `Bearer ${store.getters['auth/getToken']}`
    return config
})

axios.interceptors.response.use(undefined, async (error) => {
    if (error) {
        if (error.response.status === 401) {
            store.dispatch('auth/logout')
            router.push({ name: 'LoginPage' })
        }
    }
})
