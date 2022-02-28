import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import { setupI18n } from './i18n'
import pl from '@/locales/pl.json'
import en from '@/locales/en.json'

interface ISetupI18n {
  globalInjection: boolean
  legacy: boolean
  locale: string
  fallbackLocale: string
  // eslint-disable-next-line
  messages: any
  modifiers: string
}

const i18n = setupI18n(<ISetupI18n>{
  globalInjection: true,
  legacy: false,
  locale: 'pl',
  fallbackLocale: 'pl',
  messages: {
    pl,
    en,
  },
})

const router = setupRouter(i18n)

createApp(App).use(i18n).use(router).mount('#app')
