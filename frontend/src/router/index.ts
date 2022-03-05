import {
    createRouter,
    createWebHistory,
    NavigationGuardNext,
    RouteLocationNormalized,
    RouteRecordRaw,
} from 'vue-router'
import { setI18nLanguage, loadLocaleMessages, SUPPORT_LOCALES } from '@/i18n'
import { AuthLayout, DashboardLayout } from '@/layouts'
import { LoginPage, RegisterPage, NotFoundPage } from '@/views'

import store from '@/store'

export function setupRouter(i18n) {
    const locale = i18n.mode === 'legacy' ? i18n.global.locale : i18n.global.locale.value

    const routes: Array<RouteRecordRaw> = [
        {
            path: '/',
            redirect: '/dashboard',
            name: 'DashboardLayout',
            component: DashboardLayout,
            meta: { requiredAuth: true },
            children: [{ path: '/dashboard', name: 'DashboardPage', component: DashboardLayout }],
        },
        {
            path: '/auth',
            redirect: '/login',
            name: 'AuthLayout',
            component: AuthLayout,
            children: [
                { path: '/login', name: 'LoginPage', component: LoginPage },
                { path: '/register', name: 'RegisterPage', component: RegisterPage },
            ],
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFoundPage,
        },
    ]

    const router = createRouter({
        history: createWebHistory(),
        routes,
    })

    router.beforeEach(
        async (
            to: RouteLocationNormalized,
            from: RouteLocationNormalized,
            next: NavigationGuardNext
        ) => {
            if (to.meta.requiredAuth && !store.getters['auth/getToken']) {
                next({ name: 'LoginPage' })
            } else if (
                store.getters['auth/getToken'] &&
                (to.name == 'LoginPage' || to.name == 'RegisterPage')
            ) {
                next({ name: 'DashboardPage' })
            } else {
                next()
            }

            const paramsLocale: string = (to.params.locale as string) || 'en'

            if (!SUPPORT_LOCALES.includes(paramsLocale)) {
                return `/${locale}`
            }

            if (!i18n.global.availableLocales.includes(paramsLocale)) {
                await loadLocaleMessages(i18n, paramsLocale)
            }

            // set i18n language
            setI18nLanguage(i18n, paramsLocale)
        }
    )

    return router
}
