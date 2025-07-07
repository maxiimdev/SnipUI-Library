<script lang="ts" setup>
definePageMeta({
  layout: 'default',
})

const features = [
  {
    title: 'Modern Stack',
    description:
      'Built with Vue 3, TypeScript, and Tailwind CSS for optimal performance and developer experience.',
    icon: '⚡',
  },
  {
    title: 'Copy & Paste',
    description:
      'No installation required. Simply copy the component code and integrate it into your project.',
    icon: '📋',
  },
  {
    title: 'Fully Customizable',
    description:
      'Every component is designed to be easily customizable and extendable for your specific needs.',
    icon: '🎨',
  },
  {
    title: 'TypeScript Ready',
    description:
      'Full TypeScript support with proper type definitions and interfaces for better development.',
    icon: '🔧',
  },
]

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
    <section class="relative px-6 py-20 lg:py-32 overflow-hidden">
      <div class="relative max-w-6xl mx-auto text-center">
        <div class="mb-8">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 active-component rounded-full shadow-lg mb-8"
          >
            <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span class="text-sm main-text opacity-70"
              >Ready to use • No installation required</span
            >
          </div>
        </div>

        <h1
          class="main-text text-5xl lg:text-7xl font-light tracking-tight mb-6 leading-tight"
        >
          Modern UI Components
          <span
            class="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"
          >
            for Vue 3
          </span>
        </h1>

        <p
          class="text-p text-xl lg:text-2xl leading-relaxed opacity-80 mb-12 max-w-3xl mx-auto"
        >
          A curated collection of beautiful, accessible, and customizable
          components. Copy, paste, and build amazing interfaces in minutes.
        </p>

        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <RouterLink
            to="/components"
            class="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-3"
          >
            Browse Components
            <svg
              class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
            class="group px-8 py-4 bg-white text-gray-700 rounded-lg font-medium border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-gray-300 flex items-center gap-3"
          >
            Documentation
            <svg
              class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="main-text text-3xl font-light mb-2">
              {{ stat.number }}
            </div>
            <div class="text-p text-sm opacity-60">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Code Preview Section -->
    <section class="px-6 py-20 main-div">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2
            class="main-text text-3xl lg:text-4xl font-light tracking-tight mb-4"
          >
            See it in action
          </h2>
          <p class="text-p text-lg opacity-70">
            Clean, modern components with beautiful animations and interactions
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1">
            <div class="main-div rounded-xl shadow-2xl p-8 active-component">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                <span class="main-text text-sm opacity-50 ml-4"
                  >Component.vue</span
                >
              </div>
              <pre
                class="text-sm bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto"
              ><code>{{ codeExample }}</code></pre>
            </div>
          </div>

          <div class="order-1 lg:order-2">
            <div class="main-div rounded-xl shadow-2xl p-8 active-component">
              <h3 class="main-text text-xl font-medium mb-4">
                Welcome to My UI Library
              </h3>
              <p class="text-p opacity-80 mb-6">
                Modern Vue 3 components ready to use
              </p>
              <div class="flex items-center gap-4">
                <div
                  class="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold"
                >
                  UI
                </div>
                <div>
                  <div class="main-text font-medium">Component Library</div>
                  <div class="text-p text-sm">
                    Vue 3 + TypeScript + Tailwind
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="px-6 py-20">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2
            class="main-text text-3xl lg:text-4xl font-light tracking-tight mb-4"
          >
            Why choose My UI Library?
          </h2>
          <p class="text-p text-lg opacity-70 max-w-2xl mx-auto">
            Built with modern web standards and best practices, designed for
            developers who value quality and efficiency.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="group main-div rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <div
              class="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110"
            >
              {{ feature.icon }}
            </div>
            <h3 class="main-text text-lg font-medium mb-3">
              {{ feature.title }}
            </h3>
            <p class="text-p opacity-80 leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="px-6 py-20 main-div"
    >
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl lg:text-4xl font-light tracking-tight mb-4">
          Ready to build something amazing?
        </h2>
        <p class="text-xl opacity-90 mb-8 leading-relaxed">
          Start using our components today and accelerate your development
          process.
        </p>

        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <RouterLink
            to="/components"
            class="group px-8 py-4 bg-white text-indigo-600 rounded-lg font-medium transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-3"
          >
            Start Building
            <svg
              class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
            class="group px-8 py-4 border border-white/20 rounded-lg font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/40 flex items-center gap-3"
          >
            Learn More
            <svg
              class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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

        <div class="flex items-center justify-center gap-8 text-sm opacity-70">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span>No installation required</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span>100% Free</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
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
    <footer class="px-6 py-12">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-4 gap-8">
          <div class="md:col-span-2">
            <h3 class="main-text text-lg font-medium mb-4">My UI Library</h3>
            <p class="text-p opacity-70 mb-4 max-w-md">
              Modern Vue 3 components for building beautiful interfaces. Copy,
              paste, and customize to fit your needs.
            </p>
          </div>

          <div>
            <h4 class="main-text font-medium mb-4">Quick Links</h4>
            <div class="space-y-2">
              <RouterLink
                to="/components"
                class="block text-p opacity-70 hover:opacity-100 transition-opacity"
              >
                Components
              </RouterLink>
              <RouterLink
                to="/docs"
                class="block text-p opacity-70 hover:opacity-100 transition-opacity"
              >
                Documentation
              </RouterLink>
              <RouterLink
                to="/docs/started/about"
                class="block text-p opacity-70 hover:opacity-100 transition-opacity"
              >
                About
              </RouterLink>
            </div>
          </div>

          <div>
            <h4 class="main-text font-medium mb-4">Support</h4>
            <div class="space-y-2">
              <RouterLink
                to="/docs/support/faq"
                class="block text-p opacity-70 hover:opacity-100 transition-opacity"
              >
                FAQ
              </RouterLink>
              <RouterLink
                to="/docs/support/troubleshooting"
                class="block text-p opacity-70 hover:opacity-100 transition-opacity"
              >
                Troubleshooting
              </RouterLink>
              <RouterLink
                to="/docs/usage/examples"
                class="block text-p opacity-70 hover:opacity-100 transition-opacity"
              >
                Examples
              </RouterLink>
            </div>
          </div>
        </div>

        <div class="mt-12 pt-8 border-t border-gray-200 text-center">
          <p class="text-p opacity-60">
            © 2025 My UI Library. Built with Vue 3, TypeScript, and Tailwind
            CSS.
          </p>
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
