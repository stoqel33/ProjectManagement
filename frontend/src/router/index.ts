import { createRouter, createWebHistory } from 'vue-router'
import { setI18nLanguage, loadLocaleMessages, SUPPORT_LOCALES } from '@/i18n'

import HomeView from '../views/HomeView.vue'

export function setupRouter(i18n) {
  const locale = i18n.mode === 'legacy' ? i18n.global.locale : i18n.global.locale.value

  const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  router.beforeEach(async (to) => {
    const paramsLocale: string = (to.params.locale as string) || 'en'

    if (!SUPPORT_LOCALES.includes(paramsLocale)) {
      return `/${locale}`
    }

    if (!i18n.global.availableLocales.includes(paramsLocale)) {
      await loadLocaleMessages(i18n, paramsLocale)
    }

    // set i18n language
    setI18nLanguage(i18n, paramsLocale)
  })

  return router
}
