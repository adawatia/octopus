// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  srcDir: 'app',
  css: ['~/assets/css/main.css'],
  
  // GitHub Pages configuration
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/octopus/' : '/',
    buildAssetsDir: 'assets',
  },
  
  // Enable static site generation
  ssr: false,
  target: 'static'
})
