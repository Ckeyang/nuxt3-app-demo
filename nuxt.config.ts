import { defineNuxtConfig } from 'nuxt3'
import { join } from 'path';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    meta: {
        title: 'Nuxt3 UI',
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
    buildModules: ['@nuxtjs/tailwindcss'],
})
