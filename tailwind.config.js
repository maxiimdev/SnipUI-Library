/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Использует классы вроде `dark` для переключения

  content: [
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
