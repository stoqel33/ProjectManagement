<template>
    <h1>Auth page</h1>
    <button @click="register">login</button>
    <router-view></router-view>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const { dispatch } = useStore()
const router = useRouter()

const register = async () => {
    try {
        await dispatch('auth/login', { email: 'konrad@wp.pl', password: 'haslo123' })
        router.push({ name: 'DashboardLayout' })
    } catch (err) {
        console.log(err.response?.data)
    }
}
</script>
