<script lang="ts" setup>
definePageMeta({
  layout: 'default',
})

const stats = [
  { number: '50+', label: 'Components' },
  { number: '100%', label: 'Free' },
  { number: '0ms', label: 'Setup Time' },
  { number: '∞', label: 'Possibilities' },
]

const codeExample = `<template>
  <div class="p-6 rounded-lg shadow-xl main-div">
    <h2 class="main-text text-xl font-medium mb-4">
      Welcome to My UI Library
    </h2>
    <p class="text-p opacity-80">
      Modern Vue 3 components ready to use
    </p>
  </div>
</template>`
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section
      class="relative px-4 sm:px-6 py-12 sm:py-20 lg:py-32 overflow-hidden h-auto sm:h-screen"
    >
      <div class="relative max-w-5xl sm:max-w-6xl mx-auto text-center">
        <div class="mb-6 sm:mb-8">
          <div
            class="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 active-component rounded-full shadow-lg mb-6 sm:mb-8"
          >
            <div
              class="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-500 rounded-full animate-pulse"
            ></div>
            <span class="text-xs sm:text-sm main-text opacity-70"
              >Snip UI • Ready to use • No installation required</span
            >
          </div>
        </div>

        <h1
          class="main-text text-3xl sm:text-5xl lg:text-7xl font-light tracking-tight mb-4 sm:mb-6 leading-tight"
        >
          Modern UI Components
          <span
            class="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"
          >
            for Vue 3
          </span>
        </h1>

        <p
          class="text-p text-base sm:text-xl lg:text-2xl leading-relaxed opacity-80 mb-8 sm:mb-12 max-w-xl sm:max-w-3xl mx-auto"
        >
          A curated collection of beautiful, accessible, and customizable
          components. Copy, paste, and build amazing interfaces in minutes.
        </p>

        <div
          class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-10 sm:mb-16"
        >
          <RouterLink
            to="/components"
            class="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-2 sm:gap-3"
          >
            Browse Components
            <svg
              class="w-4 sm:w-5 h-4 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </RouterLink>

          <RouterLink
            to="/docs"
            class="group px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-700 rounded-lg font-medium border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-gray-300 flex items-center gap-2 sm:gap-3"
          >
            Documentation
            <svg
              class="w-4 sm:w-5 h-4 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </RouterLink>
        </div>

        <!-- Stats -->
        <div
          class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-lg sm:max-w-2xl mx-auto"
        >
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="main-text text-xl sm:text-3xl font-light mb-1 sm:mb-2">
              {{ stat.number }}
            </div>
            <div class="text-p text-xs sm:text-sm opacity-60">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Code Preview Section -->
    <section class="sm:px-6 py-12 sm:py-20 main-div">
      <div class="max-w-5xl sm:max-w-6xl mx-auto">
        <div class="text-center mb-8 sm:mb-16">
          <h2
            class="main-text text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight mb-3 sm:mb-4"
          >
            See it in action
          </h2>
          <p class="text-p text-sm sm:text-lg opacity-70">
            Clean, modern components with beautiful animations and interactions
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-6 sm:gap-12 items-center">
          <div class="order-2 lg:order-1">
            <div
              class="main-div rounded-xl shadow-2xl p-4 sm:p-8 active-component"
            >
              <div class="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div
                  class="w-2 sm:w-3 h-2 sm:h-3 bg-red-500 rounded-full"
                ></div>
                <div
                  class="w-2 sm:w-3 h-2 sm:h-3 bg-yellow-500 rounded-full"
                ></div>
                <div
                  class="w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full"
                ></div>
                <span
                  class="main-text text-xs sm:text-sm opacity-50 ml-2 sm:ml-4"
                  >Component.vue</span
                >
              </div>
              <pre
                class="text-xs sm:text-sm bg-gray-900 text-green-400 p-3 sm:p-4 rounded-lg overflow-x-auto"
              ><code>{{ codeExample }}</code></pre>
            </div>
          </div>

          <div class="order-1 lg:order-2 px-5">
            <div
              class="main-div rounded-xl shadow-2xl p-4 sm:p-8 active-component"
            >
              <h3 class="main-text text-lg sm:text-xl font-medium mb-3 sm:mb-4">
                Welcome to Snip UI
              </h3>
              <p class="text-p text-sm sm:text-base opacity-80 mb-4 sm:mb-6">
                Modern Vue 3 components ready to use
              </p>
              <div class="flex items-center gap-3 sm:gap-4">
                <Icon name="arcticons:nequi-colombia" size="40" sm:size="50" />
                <div>
                  <div class="main-text font-medium text-sm sm:text-base">
                    Component Library
                  </div>
                  <div class="text-p text-xs sm:text-sm">
                    Vue 3 + TypeScript + Tailwind
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="px-4 sm:px-6 py-12 sm:py-20 main-div">
      <div class="max-w-4xl mx-auto text-center">
        <h2
          class="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight mb-3 sm:mb-4"
        >
          Ready to build something amazing?
        </h2>
        <p class="text-base sm:text-xl opacity-90 mb-6 sm:mb-8 leading-relaxed">
          Start using our components today and accelerate your development
          process.
        </p>

        <div
          class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12"
        >
          <RouterLink
            to="/components"
            class="group px-6 sm:px-8 py-3 sm:py-4 bg-white text-indigo-600 rounded-lg font-medium transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-2 sm:gap-3"
          >
            Start Building
            <svg
              class="w-4 sm:w-5 h-4 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </RouterLink>

          <RouterLink
            to="/docs/started/about"
            class="group px-6 sm:px-8 py-3 sm:py-4 border border-white/20 rounded-lg font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/40 flex items-center gap-2 sm:gap-3"
          >
            Learn More
            <svg
              class="w-4 sm:w-5 h-4 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </RouterLink>
        </div>

        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm opacity-70"
        >
          <div class="flex items-center gap-2">
            <svg
              class="w-3 sm:w-4 h-3 sm:h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span>No installation required</span>
          </div>
          <div class="flex items-center gap-2">
            <svg
              class="w-3 sm:w-4 h-3 sm:h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span>100% Free</span>
          </div>
          <div class="flex items-center gap-2">
            <svg
              class="w-3 sm:w-4 h-3 sm:h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span>TypeScript Ready</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="px-4 sm:px-6 py-8 sm:py-12">
      <div class="max-w-5xl sm:max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
          <div class="md:col-span-2">
            <h3 class="main-text text-base sm:text-lg font-medium mb-3 sm:mb-4">
              Snip UI
            </h3>
            <p class="text-p text-sm sm:text-base opacity-70 mb-4 max-w-md">
              Modern Vue 3 components for building beautiful interfaces. Copy,
              paste, and customize to fit your needs.
            </p>
          </div>

          <div>
            <h4 class="main-text text-sm sm:text-base font-medium mb-3 sm:mb-4">
              Quick Links
            </h4>
            <div class="space-y-2">
              <RouterLink
                to="/components"
                class="block text-p text-xs sm:text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                Components
              </RouterLink>
              <RouterLink
                to="/docs"
                class="block text-p text-xs sm:text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                Documentation
              </RouterLink>
              <RouterLink
                to="/docs/started/about"
                class="block text-p text-xs sm:text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                About
              </RouterLink>
            </div>
          </div>

          <div>
            <h4 class="main-text text-sm sm:text-base font-medium mb-3 sm:mb-4">
              Support
            </h4>
            <div class="space-y-2">
              <RouterLink
                to="/docs/support/faq"
                class="block text-p text-xs sm:text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                FAQ
              </RouterLink>
              <RouterLink
                to="/docs/support/troubleshooting"
                class="block text-p text-xs sm:text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                Troubleshooting
              </RouterLink>
              <RouterLink
                to="/docs/usage/examples"
                class="block text-p text-xs sm:text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                Examples
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Additional animations */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Code syntax highlighting */
pre code {
  font-family: 'Fira Code', 'Consolas', monospace;
  font-size: 0.9em;
  line-height: 1.5;
}
</style>
