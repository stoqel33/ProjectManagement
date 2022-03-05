<template>
    <h1>{{ t('Main_Page.Hello new project') }}</h1>
    <button @click="logout">logout</button>
</template>

<script setup lang="ts">
import axios from 'axios'

import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { dispatch } = useStore()
const { t } = useI18n()

onMounted(async () => {
    try {
        await axios.get('project/all')
    } catch (err) {
        console.log(err.response?.data)
    }
})

const logout = () => {
    dispatch('auth/logout', null)
    router.push({ name: 'LoginPage' })
}
</script>
