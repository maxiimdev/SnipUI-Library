// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Snip UI', // Название сайта
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Modern UI Components for Vue 3' },
        { name: 'keywords', content: 'nuxt, vue, web app, SEO, snip, ui, snip ui, ui components, dev components' },
        // Соцсети
        { property: 'og:title', content: 'Snip UI' },
        {
          property: 'og:description',
          content: 'Modern UI Components for Vue 3',
        },
        { property: 'og:image', content: '/og-image.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: '/og-image.jpg' },
      ],
      link: [
        { rel: 'icon', href: '/favicon-white.png' }, // Фавикон в public/favicon.ico
      ],
    },
  },
  components: true,
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
  ],
  colorMode: {
    classSuffix: '-mode', // Соответствует вашим классам .dark-mode, .sepia-mode
  },
  css: ['~/assets/css/tailwind.css', 'prismjs/themes/prism-dark.css'],
})
