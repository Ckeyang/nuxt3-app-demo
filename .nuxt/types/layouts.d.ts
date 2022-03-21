import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}