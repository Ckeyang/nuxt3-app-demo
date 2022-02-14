import { defineNuxtPlugin } from "#app";
import ElementPlus from 'element-plus/dist/index.full';
import '@/assets/scss/elementPlus.scss';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(ElementPlus);
})