<script lang="ts" setup>
definePageMeta({
  layout: 'sidebar',
})

useState('right-sidebar-text').value = 'On this Page'
useState('right-sidebar-items').value = [
  {
    items: [
      { name: 'Tailwind CSS Setup', path: '#tailwind-setup' },
      { name: 'TypeScript Configuration', path: '#typescript-config' },
      { name: 'Custom CSS Variables', path: '#custom-css' },
      { name: 'Component Imports', path: '#component-imports' },
    ],
  },
]
</script>

<template>
  <ClientOnly>
    <div class="flex flex-col gap-20">
      
      <!-- Tailwind CSS Setup -->
      <div id="tailwind-setup">
        <div class="main-div rounded-lg shadow-xl p-6">
          <h2 class="main-text text-xl font-medium mb-4">
            Tailwind CSS Setup
          </h2>
          <p class="text-p mb-4">
            Our components are built with Tailwind CSS. Make sure you have Tailwind properly configured in your project.
          </p>
          
          <div class="bg-gray-50 rounded-lg p-4 mb-4">
            <h3 class="main-text text-lg font-medium mb-2">Installation</h3>
            <pre class="text-sm bg-gray-800 text-gray-100 p-3 rounded overflow-x-auto"><code>npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p</code></pre>
          </div>

          <div class="bg-gray-50 rounded-lg p-4">
            <h3 class="main-text text-lg font-medium mb-2">tailwind.config.js</h3>
            <pre class="text-sm bg-gray-800 text-gray-100 p-3 rounded overflow-x-auto"><code>/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}</code></pre>
          </div>
        </div>
      </div>

      <!-- TypeScript Configuration -->
      <div id="typescript-config">
        <div class="main-div rounded-lg shadow-xl p-6">
          <h2 class="main-text text-xl font-medium mb-4">
            TypeScript Configuration
          </h2>
          <p class="text-p mb-4">
            All components are built with TypeScript for better type safety and development experience.
          </p>
          
          <div class="bg-gray-50 rounded-lg p-4 mb-4">
            <h3 class="main-text text-lg font-medium mb-2">Required Dependencies</h3>
            <pre class="text-sm bg-gray-800 text-gray-100 p-3 rounded overflow-x-auto"><code>npm install -D typescript @types/node</code></pre>
          </div>

          <div class="bg-gray-50 rounded-lg p-4">
            <h3 class="main-text text-lg font-medium mb-2">Component Types</h3>
            <p class="text-p mb-2">Create a types directory and define your component interfaces:</p>
            <pre class="text-sm bg-gray-800 text-gray-100 p-3 rounded overflow-x-auto"><code>// types/index.ts
export interface Card {
  title: string
  text: string
  codeTitle: string
  code: string
  content: {
    type: string
    props: Record '<'string, any'>'
    children: string
  }
}</code></pre>
          </div>
        </div>
      </div>

      <!-- Custom CSS Variables -->
      <div id="custom-css">
        <div class="main-div rounded-lg shadow-xl p-6">
          <h2 class="main-text text-xl font-medium mb-4">
            Custom CSS Variables
          </h2>
          <p class="text-p mb-4">
            Add these custom CSS classes to your global styles for consistent theming across components.
          </p>
          
          <div class="bg-gray-50 rounded-lg p-4">
            <h3 class="main-text text-lg font-medium mb-2">assets/css/main.css</h3>
            <pre class="text-sm bg-gray-800 text-gray-100 p-3 rounded overflow-x-auto"><code>@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .main-text {
    @apply text-gray-900 dark:text-gray-100;
  }
  
  .text-p {
    @apply text-gray-600 dark:text-gray-300;
  }
  
  .main-div {
    @apply bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700;
  }
  
  .active-component {
    @apply bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700;
  }
  
  .active-component-hover {
    @apply hover:bg-gray-50 dark:hover:bg-gray-800/50;
  }
}</code></pre>
          </div>
        </div>
      </div>

      <!-- Component Imports -->
      <div id="component-imports">
        <div class="main-div rounded-lg shadow-xl p-6">
          <h2 class="main-text text-xl font-medium mb-4">
            Component Imports
          </h2>
          <p class="text-p mb-4">
            Components can be imported individually or registered globally depending on your needs.
          </p>
          
          <div class="bg-gray-50 rounded-lg p-4 mb-4">
            <h3 class="main-text text-lg font-medium mb-2">Individual Import</h3>
            <pre class="text-sm bg-gray-800 text-gray-100 p-3 rounded overflow-x-auto"><code>// In your component
import Typewriter from '~/components/text/typing/Typewriter.vue'
import Button from '~/components/ui/Button.vue'</code></pre>
          </div>

          <div class="bg-gray-50 rounded-lg p-4 mb-4">
            <h3 class="main-text text-lg font-medium mb-2">Global Registration (Nuxt 3)</h3>
            <pre class="text-sm bg-gray-800 text-gray-100 p-3 rounded overflow-x-auto"><code>// nuxt.config.ts
export default defineNuxtConfig({
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
})</code></pre>
          </div>

          <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <svg class="w-5 h-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-sm font-medium text-blue-800">
                  Pro Tip
                </h3>
                <p class="text-sm text-blue-700 mt-1">
                  Copy components directly from the documentation and customize them according to your project needs. All components are designed to be easily modifiable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </ClientOnly>
</template>

<style scoped>
/* Isolate styles for documentation */
.absolute {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>