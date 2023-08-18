const baseURL = import.meta.env.VITE_ROUTER_BASE_URL
export default defineNuxtConfig({
  app: {
    baseURL: baseURL,
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'Universal URL'
    }
  },
  srcDir: 'src/',
  devtools: { enabled: true },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
  ],
  css: ["@/assets/style/normalize.css"],
})
