import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "D:/1--------------------work/learn-nuxt3/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}