import { defineStore, acceptHMRUpdate } from 'pinia'
import router from './modules/router'
import button from './modules/button'
import user from './modules/user'
export const useRouterStore = defineStore('router', router)
export const useButtonStore = defineStore('button', button)
export const useUserStore = defineStore('user', user)

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useRouterStore, import.meta.hot))
    import.meta.hot.accept(acceptHMRUpdate(useButtonStore, import.meta.hot))
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}