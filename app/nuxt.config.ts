// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,
  app: {
    baseURL: '/ongeki_memo/'
  },
  runtimeConfig: {
    public: {
      baseURL: "/ongeki_memo/" // publicとしてアクセス可能にする
    }
  }
})
