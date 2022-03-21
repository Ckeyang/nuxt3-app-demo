import { defineNuxtConfig } from 'nuxt3'
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    meta: {
        title: process.env.npm_package_name,
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1, user-scalable=0',
            }
        ],
        link: [],
        script: [],
    },
    buildModules: [
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss'
    ],
    plugins: [
        '@/plugins/persistedstate.ts'
    ],
    publicRuntimeConfig: {
        NODE_ENV: process.env.NODE_ENV || ""
    },
    typescript: {
        strict: true
    }
})
