import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "auth"
declare module "C:/Users/Singularity Limited/Desktop/Unit-1/pera-revamp/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}