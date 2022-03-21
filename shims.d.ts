declare module '*.vue' {
    import { ComponentOptions } from "vue";
    const componentOptions: ComponentOptions
    export default componentOptions
}

declare const global: any
global.requestAnimationFrame = (cb: any) => {
    return clearTimeout(cb, 0)
};
declare interface Window {
    cancelUpload: Function
}
declare module 'cookie'
declare module 'js-cookie'