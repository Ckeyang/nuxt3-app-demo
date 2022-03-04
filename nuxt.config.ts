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
            },
            {
                hid: 'keywords',
                name: 'keywords',
                content: 'keywords',
            },
            {
                hid: 'description',
                name: 'description',
                content: 'description',
            },
        ],
        link: [],
        script: [],
    },
    plugins: [
        '@/plugins/persistedstate.ts'
    ],
    buildModules: ['@nuxtjs/tailwindcss'],
    publicRuntimeConfig: {
        NODE_ENV: process.env.NODE_ENV || ""
    },
    typescript: {
        strict: true
    }
})
