<template>
  <h1>{{ t('Main_Page.Hello new project') }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'HomeView',
  setup() {
    const { t } = useI18n()

    return { t }
  },
})
</script>
