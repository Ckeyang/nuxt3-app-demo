import * as api from "~~/api";
export default defineNuxtPlugin(() => {
    return {
        provide: {
            service: api
        }
    }
})