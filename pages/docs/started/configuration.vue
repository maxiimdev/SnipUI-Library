<script lang="ts" setup>
definePageMeta({
  layout: 'sidebar',
});

useState('right-sidebar-text').value = 'On This Page';
useState('right-sidebar-items').value = [
  {
    items: [
      { name: 'Tailwind CSS Setup', path: '#tailwind-setup' },
      { name: 'TypeScript Configuration', path: '#typescript-config' },
      { name: 'Custom CSS Variables', path: '#custom-css' },
      { name: 'Component Imports', path: '#component-imports' },
    ],
  },
];

const codeCards = [
  {
    title: 'Installation',
    codeTitle: 'Terminal',
    code: `npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`,
  },
  {
    title: 'tailwind.config.js',
    codeTitle: 'tailwind.config.js',
    code: `/** @type {import('tailwindcss').Config} */
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
}`,
  },
  {
    title: 'Required Dependencies',
    codeTitle: 'Terminal',
    code: `npm install -D typescript @types/node`,
  },
  {
    title: 'Component Types',
    codeTitle: 'types/index.ts',
    code: `// types/index.ts
export interface Card {
  title: string
  text: string
  codeTitle: string
  code: string
  content: {
    type: string
    props: Record<string, any>
    children: string
  }
}`,
  },
  {
    title: 'assets/css/main.css',
    codeTitle: 'assets/css/main.css',
    code: `@tailwind base;
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
}`,
  },
  {
    title: 'Individual Import',
    codeTitle: 'Component File',
    code: `// In your component
import Typewriter from '~/components/text/typing/Typewriter.vue'
import Button from '~/components/ui/Button.vue'`,
  },
  {
    title: 'Global Registration (Nuxt 3)',
    codeTitle: 'nuxt.config.ts',
    code: `// nuxt.config.ts
export default defineNuxtConfig({
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
})`,
  },
];
</script>

<template>
  <ClientOnly>
    <div class="w-full max-w-7xl mx-auto py-6 flex flex-col lg:flex-row gap-12">
      <div>
        <!-- Hero Section -->
        <div class="mb-16">
          <h1 class="main-text text-4xl mb-4 font-light tracking-tight">
            Configuration Guide
          </h1>
          <p class="text-p text-lg leading-relaxed opacity-80">
            Learn how to configure Tailwind CSS, TypeScript, custom CSS variables, and component imports to get the most out of My UI Library.
          </p>
        </div>

        <!-- Tailwind CSS Setup -->
        <div id="tailwind-setup" class="group">
          <div class="main-div rounded-lg shadow-xl p-6">
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-8 h-px bg-gray-300 transition-all duration-500 group-hover:bg-gray-500"
              ></div>
              <h2 class="main-text text-2xl font-medium tracking-wide">
                Tailwind CSS Setup
              </h2>
            </div>
            <p class="text-p mb-4">
              Our components are built with Tailwind CSS. Make sure you have
              Tailwind properly configured in your project.
            </p>

            <div class="space-y-4">
              <CodeCard :card="codeCards[0]" isCompact />
              <CodeCard :card="codeCards[1]" isCompact />
            </div>
          </div>
        </div>

        <!-- TypeScript Configuration -->
        <div id="typescript-config" class="group mt-12">
          <div class="main-div rounded-lg shadow-xl p-6">
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-8 h-px bg-gray-300 transition-all duration-500 group-hover:bg-gray-500"
              ></div>
              <h2 class="main-text text-2xl font-medium tracking-wide">
                TypeScript Configuration
              </h2>
            </div>
            <p class="text-p mb-4">
              All components are built with TypeScript for better type safety and
              development experience.
            </p>

            <div class="space-y-4">
              <CodeCard :card="codeCards[2]" isCompact />
              <p class="text-p mb-2">
                Create a types directory and define your component interfaces:
              </p>
              <CodeCard :card="codeCards[3]" isCompact />
            </div>
          </div>
        </div>

        <!-- Custom CSS Variables -->
        <div id="custom-css" class="group mt-12">
          <div class="main-div rounded-lg shadow-xl p-6">
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-8 h-px bg-gray-300 transition-all duration-500 group-hover:bg-gray-500"
              ></div>
              <h2 class="main-text text-2xl font-medium tracking-wide">
                Custom CSS Variables
              </h2>
            </div>
            <p class="text-p mb-4">
              Add these custom CSS classes to your global styles for consistent
              theming across components.
            </p>

            <CodeCard :card="codeCards[4]" isCompact />
          </div>
        </div>

        <!-- Component Imports -->
        <div id="component-imports" class="group mt-12">
          <div class="main-div rounded-lg shadow-xl p-6">
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-8 h-px bg-gray-300 transition-all duration-500 group-hover:bg-gray-500"
              ></div>
              <h2 class="main-text text-2xl font-medium tracking-wide">
                Component Imports
              </h2>
            </div>
            <p class="text-p mb-4">
              Components can be imported individually or registered globally
              depending on your needs.
            </p>

            <div class="space-y-4">
              <CodeCard :card="codeCards[5]" isCompact />
              <CodeCard :card="codeCards[6]" isCompact />
              <div class="active-component rounded-lg p-4">
                <div class="flex items-start">
                  <div class="flex-shrink-0">
                    <svg
                      class="w-5 h-5 tag-class mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div class="ml-3">
                    <h3 class="text-sm font-medium tag-class">Pro Tip</h3>
                    <p class="text-sm tag-class mt-1">
                      Copy components directly from the documentation and customize
                      them according to your project needs. All components are
                      designed to be easily modifiable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
