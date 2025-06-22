// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxtjs/color-mode', '@nuxt/icon'],
  colorMode: {
    classSuffix: '-mode', // Соответствует вашим классам .dark-mode, .sepia-mode
  },
  css: ['~/assets/css/tailwind.css'],
})