import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "app-config" | "app-footer" | "app-layout" | "app-menu" | "app-menu-item" | "app-sidebar" | "app-topbar" | "default"
declare module "C:/Users/Singularity Limited/Desktop/Unit-1/pera-revamp/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}