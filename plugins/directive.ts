import { registDirecive } from '@/directive'
export default defineNuxtPlugin((nuxtApp) => {
    registDirecive(nuxtApp.vueApp);
})