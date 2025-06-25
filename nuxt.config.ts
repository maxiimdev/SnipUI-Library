// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: true,
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxtjs/color-mode', '@nuxt/icon', '@nuxt/content', '@nuxtjs/tailwindcss'],
  colorMode: {
    classSuffix: '-mode', // Соответствует вашим классам .dark-mode, .sepia-mode
  },
  css: ['~/assets/css/tailwind.css', 'prismjs/themes/prism-dark.css'],
})