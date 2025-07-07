<script lang="ts" setup>
definePageMeta({
  layout: 'sidebar',
})

useState('right-sidebar-text').value = 'On this Page'
useState('right-sidebar-items').value = [
  {
    items: [
      { name: 'What is My UI Library?', path: '#what-is' },
      { name: 'Philosophy', path: '#philosophy' },
      { name: 'Tech Stack', path: '#tech-stack' },
      { name: 'Why Choose Us?', path: '#why-choose' },
    ],
  },
]
</script>

<template>
  <ClientOnly>
    <div class="flex flex-col gap-16">
      <!-- Hero Section -->
      <div class="w-full">
        <div class="mb-8">
          <h1 class="main-text text-4xl mb-4 font-light tracking-tight">
            About My UI Library
          </h1>
          <p class="text-p text-lg leading-relaxed opacity-80">
            A modern collection of Vue 3 components and snippets designed for developers who value simplicity and elegance.
          </p>
        </div>
      </div>

      <!-- What is Section -->
      <div id="what-is" class="group">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-8 h-px bg-gray-300 transition-all duration-500 group-hover:bg-gray-500"></div>
          <h2 class="main-text text-2xl font-medium tracking-wide">
            What is My UI Library?
          </h2>
        </div>
        
        <div class="active-component rounded-xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300">
          <div class="space-y-4">
            <p class="text-p leading-relaxed">
              My UI Library is a carefully curated collection of reusable Vue 3 components and code snippets built with modern web technologies. Each component is designed to be lightweight, accessible, and easy to integrate into your projects.
            </p>
            <p class="text-p leading-relaxed">
              Whether you're building a simple landing page or a complex web application, our components provide the building blocks you need to create beautiful, functional interfaces quickly and efficiently.
            </p>
            <div class="pt-4">
              <RouterLink 
                to="/components" 
                class="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors duration-200 font-medium"
              >
                Explore Components
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Philosophy Section -->
      <div id="philosophy" class="group">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-8 h-px bg-gray-300 transition-all duration-500 group-hover:bg-gray-500"></div>
          <h2 class="main-text text-2xl font-medium tracking-wide">
            Philosophy
          </h2>
        </div>
        
        <div class="active-component rounded-xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300">
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <div class="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 class="main-text font-medium mb-2">Simplicity First</h3>
                  <p class="text-p text-sm leading-relaxed">
                    Clean, minimal code that's easy to understand and customize.
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 class="main-text font-medium mb-2">Developer Experience</h3>
                  <p class="text-p text-sm leading-relaxed">
                    Built with TypeScript for better IDE support and fewer runtime errors.
                  </p>
                </div>
              </div>
            </div>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <div class="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 class="main-text font-medium mb-2">Performance</h3>
                  <p class="text-p text-sm leading-relaxed">
                    Lightweight components with minimal dependencies and optimal rendering.
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 class="main-text font-medium mb-2">Accessibility</h3>
                  <p class="text-p text-sm leading-relaxed">
                    Following WCAG guidelines to ensure inclusive user experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tech Stack Section -->
      <div id="tech-stack" class="group">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-8 h-px bg-gray-300 transition-all duration-500 group-hover:bg-gray-500"></div>
          <h2 class="main-text text-2xl font-medium tracking-wide">
            Tech Stack
          </h2>
        </div>
        
        <div class="active-component rounded-xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300">
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="text-center p-4 rounded-lg active-component-hover transition-all duration-300">
              <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 class="main-text font-medium mb-1">Vue 3</h3>
              <p class="text-p text-sm">Composition API with &lt;script setup&gt;</p>
            </div>
            
            <div class="text-center p-4 rounded-lg active-component-hover transition-all duration-300">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 class="main-text font-medium mb-1">TypeScript</h3>
              <p class="text-p text-sm">Type safety and better DX</p>
            </div>
            
            <div class="text-center p-4 rounded-lg active-component-hover transition-all duration-300">
              <div class="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-cyan-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 class="main-text font-medium mb-1">Tailwind CSS</h3>
              <p class="text-p text-sm">Utility-first styling</p>
            </div>
            
            <div class="text-center p-4 rounded-lg active-component-hover transition-all duration-300">
              <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 class="main-text font-medium mb-1">Nuxt 3</h3>
              <p class="text-p text-sm">Modern Vue framework</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Why Choose Section -->
      <div id="why-choose" class="group">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-8 h-px bg-gray-300 transition-all duration-500 group-hover:bg-gray-500"></div>
          <h2 class="main-text text-2xl font-medium tracking-wide">
            Why Choose My UI Library?
          </h2>
        </div>
        
        <div class="active-component rounded-xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300">
          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div class="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 class="main-text font-medium mb-2">Lightning Fast Development</h3>
                <p class="text-p leading-relaxed">
                  Copy and paste components directly into your project. No complex setup or configuration required.
                </p>
              </div>
            </div>
            
            <div class="flex items-start gap-4">
              <div class="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <div>
                <h3 class="main-text font-medium mb-2">Fully Customizable</h3>
                <p class="text-p leading-relaxed">
                  Every component is built with customization in mind. Easily modify styles, animations, and behavior.
                </p>
              </div>
            </div>
            
            <div class="flex items-start gap-4">
              <div class="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 class="main-text font-medium mb-2">Production Ready</h3>
                <p class="text-p leading-relaxed">
                  All components are tested and optimized for production use with proper error handling and accessibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>