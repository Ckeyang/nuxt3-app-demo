import { createPersistedStatePlugin } from 'pinia-plugin-persistedstate-2'
import Cookies from 'js-cookie'
import cookie from 'cookie'

export default function ({ $pinia, ssrContext }: any) {
    $pinia.use(
        createPersistedStatePlugin({
            // plugin options goes here
            storage: {
                getItem: (key) => {
                    // if (localStorage) {

                    //     return JSON.parse(localStorage.getItem(key) || '')
                    // }
                    // See https://nuxtjs.org/guide/plugins/#using-process-flags
                    if (process.server) {
                        const parsedCookies = cookie.parse(ssrContext.req.headers.cookie)
                        return parsedCookies[key]
                    } else {
                        return Cookies.get(key)
                    }
                },
                // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
                setItem: (key, value) => {
                    // if (localStorage) {
                    //     localStorage.setItem(key, JSON.stringify(value));
                    // } else {
                    Cookies.set(key, value, { expires: 365, secure: false })
                    // }
                },
                removeItem: (key) => {
                    // if (localStorage) {
                    //     localStorage.removeItem(key);
                    // } else {
                    Cookies.remove(key);
                    // }
                },
            },
        }),
    )
}