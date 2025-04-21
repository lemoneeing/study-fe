// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],
  vite: {
    css: {
      preprocessorOptions:{
        scss:{
          additionalData: "@use '@/assets/scss/global.scss' as *;",
        },
      },
    },
  },
  typescript: {
    shim: false,
    typeCheck: true
  }
})
