// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL:'/Universal-URL/',
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
