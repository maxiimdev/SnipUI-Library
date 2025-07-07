<script lang="ts" setup>
definePageMeta({
  layout: 'sidebar',
})

useState('right-sidebar-text').value = 'On this Page'
useState('right-sidebar-items').value = [
  {
    items: [
      { name: 'Installation', path: '#installation' },
      { name: 'First Component', path: '#first-component' },
      { name: 'Project Structure', path: '#project-structure' },
      { name: 'Next Steps', path: '#next-steps' },
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
            Quick Start Guide
          </h1>
          <p class="text-p text-lg leading-relaxed opacity-80">
            Get up and running with My UI Library in minutes. Follow these simple steps to start building beautiful interfaces.
          </p>
        </div>
      </div>

      <!-- Installation Section -->
      <div id="installation" class="group">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-8 h-px bg-gray-300 transition-all duration-500 group-hover:bg-gray-500"></div>
          <h2 class="main-text text-2xl font-medium tracking-wide">
            Installation
          </h2>
        </div>
        
        <div class="active-component rounded-xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300">
          <div class="space-y-6">
            <div>
              <h3 class="main-text font-medium mb-4">Prerequisites</h3>
              <p class="text-p leading-relaxed mb-4">
                Make sure you have the following installed on your system:
              </p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="flex items-center gap-3 p-3 rounded-lg active-component-hover">
                  <div class="w-2 h-2 rounded-full bg-green-500"></div>
                  <span class="text-p">Node.js 18+ or 20+</span>
                </div>
                <div class="flex items-center gap-3 p-3 rounded-lg active-component-hover">
                  <div class="w-2 h-2 rounded-full bg-green-500"></div>
                  <span class="text-p">Vue 3.3+</span>
                </div>
                <div class="flex items-center gap-3 p-3 rounded-lg active-component-hover">
                  <div class="w-2 h-2 rounded-full bg-green-500"></div>
                  <span class="text-p">Tailwind CSS 3.0+</span>
                </div>
                <div class="flex items-center gap-3 p-3 rounded-lg active-component-hover">
                  <div class="w-2 h-2 rounded-full bg-green-500"></div>
                  <span class="text-p">TypeScript (optional)</span>
                </div>
              </div>
            </div>

            <div class="border-t border-gray-200 pt-6">
              <h3 class="main-text font-medium mb-4">Create a new project</h3>
              <div class="space-y-4">
                <div class="relative">
                  <div class="flex items-center justify-between px-4 py-2 bg-gray-50 rounded-t-lg border border-gray-200">
                    <span class="text-sm text-gray-600">Terminal</span>
                    <button class="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                      Copy
                    </button>
                  </div>
                  <div class="px-4 py-3 bg-gray-900 rounded-b-lg border border-gray-200 border-t-0">
                    <code class="text-green-400 font-mono text-sm">
                      npx nuxi@latest init my-ui-project
                    </code>
                  </div>
                </div>
                
                <div class="relative">
                  <div class="flex items-center justify-between px-4 py-2 bg-gray-50 rounded-t-lg border border-gray-200">
                    <span class="text-sm text-gray-600">Terminal</span>
                    <button class="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                      Copy
                    </button>
                  </div>
                  <div class="px-4 py-3 bg-gray-900 rounded-b-lg border border-gray-200 border-t-0">
                    <code class="text-green-400 font-mono text-sm">
                      cd my-ui-project && npm install
                    </code>
                  </div>
                </div>
              </div>
            </div>

            <div class="border-t border-gray-200 pt-6">
              <h3 class="main-text font-medium mb-4">Install Tailwind CSS</h3>
              <div class="space-y-4">
                <div class="relative">
                  <div class="flex items-center justify-between px-4 py-2 bg-gray-50 rounded-t-lg border border-gray-200">
                    <span class="text-sm text-gray-600">Terminal</span>
                    <button class="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                      Copy
                    </button>
                  </div>
                  <div class="px-4 py-3 bg-gray-900 rounded-b-lg border border-gray-200 border-t-0">
                    <code class="text-green-400 font-mono text-sm">
                      npm install -D tailwindcss postcss autoprefixer
                    </code>
                  </div>
                </div>
                
                <div class="relative">
                  <div class="flex items-center justify-between px-4 py-2 bg-gray-50 rounded-t-lg border border-gray-200">
                    <span class="text-sm text-gray-600">Terminal</span>
                    <button class="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                      Copy
                    </button>
                  </div>
                  <div class="px-4 py-3 bg-gray-900 rounded-b-lg border border-gray-200 border-t-0">
                    <code class="text-green-400 font-mono text-sm">
                      npx tailwindcss init -p
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- First Component Section -->
      <div id="first-component" class="group">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-8 h-px bg-gray-300 transition-all duration-500 group-hover:bg-gray-500"></div>
          <h2 class="main-text text-2xl font-medium tracking-wide">
            Your First Component
          </h2>
        </div>
        
        <div class="active-component rounded-xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300">
          <div class="space-y-6">
            <p class="text-p leading-relaxed">
              Let's create your first component! We'll start with a simple typing animation component.
            </p>
            
            <div class="space-y-4">
              <div>
                <h3 class="main-text font-medium mb-3">1. Create the component file</h3>
                <div class="relative">
                  <div class="flex items-center justify-between px-4 py-2 bg-gray-50 rounded-t-lg border border-gray-200">
                    <span class="text-sm text-gray-600">components/Typewriter.vue</span>
                    <button class="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                      Copy
                    </button>
                  </div>
                  <div class="px-4 py-4 bg-gray-900 rounded-b-lg border border-gray-200 border-t-0 overflow-x-auto">
                    <pre class="text-sm text-gray-300 font-mono leading-relaxed"><code>&lt;script lang="ts" setup&gt;
interface Props {
  text: string
  speed?: number
}

const props = withDefaults(defineProps&lt;Props&gt;(), {
  speed: 100
})

const displayText = ref('')
const currentIndex = ref(0)

const typeWriter = () => {
  if (currentIndex.value &lt; props.text.length) {
    displayText.value += props.text.charAt(currentIndex.value)
    currentIndex.value++
    setTimeout(typeWriter, props.speed)
  }
}

onMounted(() => {
  typeWriter()
})
&lt;/script&gt;

&lt;template&gt;
  &lt;span&gt;{{ displayText }}&lt;/span&gt;
&lt;/template&gt;</code></pre>
                  </div>
                </div>
              </div>

              <div>
                <h3 class="main-text font-medium mb-3">2. Use it in your page</h3>
                <div class="relative">
                  <div class="flex items-center justify-between px-4 py-2 bg-gray-50 rounded-t-lg border border-gray-200">
                    <span class="text-sm text-gray-600">pages/index.vue</span>
                    <button class="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                      Copy
                    </button>
                  </div>
                  <div class="px-4 py-4 bg-gray-900 rounded-b-lg border border-gray-200 border-t-0 overflow-x-auto">
                    <pre class="text-sm text-gray-300 font-mono leading-relaxed"><code>&lt;template&gt;
  &lt;div class="p-8"&gt;
    &lt;h1 class="text-3xl font-bold mb-4"&gt;
      &lt;Typewriter text="Welcome to My UI Library!" :speed="80" /&gt;
    &lt;/h1&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-green-50 border border-green-200 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <svg class="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-green-800 font-medium">Success!</span>
              </div>
              <p class="text-green-700 text-sm">
                You've successfully created your first component! Run <code class="bg-green-100 px-1 rounded">npm run dev</code> to see it in action.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Project Structure Section -->
      <div id="project-structure" class="group">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-8 h-px bg-gray-300 transition-all duration-500 group-hover:bg-gray-500"></div>
          <h2 class="main-text text-2xl font-medium tracking-wide">
            Recommended Project Structure
          </h2>
        </div>
        
        <div class="active-component rounded-xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300">
          <div class="space-y-6">
            <p class="text-p leading-relaxed">
              Here's how we recommend organizing your project when using My UI Library components:
            </p>
            
            <div class="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <pre class="text-sm text-gray-700 font-mono leading-relaxed"><code>my-ui-project/
├── components/
│   ├── ui/                    # UI Library components
│   │   ├── animations/
│   │   ├── buttons/
│   │   ├── forms/
│   │   └── text/
│   └── custom/               # Your custom components
├── pages/                    # Your pages
├── assets/
│   └── css/
│       └── main.css         # Tailwind imports
├── types/                   # TypeScript types
├── tailwind.config.js       # Tailwind configuration
└── nuxt.config.ts          # Nuxt configuration</code></pre>
            </div>

            <div class="grid md:grid-cols-2 gap-4">
              <div class="space-y-3">
                <h3 class="main-text font-medium">Best Practices</h3>
                <ul class="space-y-2 text-p text-sm">
                  <li class="flex items-start gap-2">
                    <div class="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></div>
                    <span>Keep UI components in separate folders by category</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <div class="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></div>
                    <span>Use TypeScript for better development experience</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <div class="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></div>
                    <span>Follow consistent naming conventions</span>
                  </li>
                </ul>
              </div>
              
              <div class="space-y-3">
                <h3 class="main-text font-medium">Pro Tips</h3>
                <ul class="space-y-2 text-p text-sm">
                  <li class="flex items-start gap-2">
                    <div class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                    <span>Create a types folder for shared interfaces</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <div class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                    <span>Use auto-imports for frequently used components</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <div class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                    <span>Leverage Nuxt's component auto-discovery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Next Steps Section -->
      <div id="next-steps" class="group">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-8 h-px bg-gray-300 transition-all duration-500 group-hover:bg-gray-500"></div>
          <h2 class="main-text text-2xl font-medium tracking-wide">
            Next Steps
          </h2>
        </div>
        
        <div class="active-component rounded-xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300">
          <div class="space-y-6">
            <p class="text-p leading-relaxed">
              Now that you have the basics set up, here are some next steps to explore:
            </p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="group/card">
                <div class="p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 active-component-hover">
                  <div class="flex items-center gap-3 mb-3">
                    <div class="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                      <svg class="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 class="main-text font-medium">Explore Components</h3>
                  </div>
                  <p class="text-p text-sm mb-4">
                    Browse our extensive collection of ready-to-use components with live examples and code snippets.
                  </p>
                  <RouterLink to="/components" class="text-blue-600 hover:text-blue-700 text-sm font-medium hover:underline">
                    View Components →
                  </RouterLink>
                </div>
              </div>

              <div class="group/card">
                <div class="p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 active-component-hover">
                  <div class="flex items-center gap-3 mb-3">
                    <div class="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                      <svg class="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 class="main-text font-medium">Configuration</h3>
                  </div>
                  <p class="text-p text-sm mb-4">
                    Learn how to customize themes, colors, and global settings for your project.
                  </p>
                  <RouterLink to="/docs/started/configuration" class="text-green-600 hover:text-green-700 text-sm font-medium hover:underline">
                    Configuration Guide →
                  </RouterLink>
                </div>
              </div>

              <div class="group/card">
                <div class="p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 active-component-hover">
                  <div class="flex items-center gap-3 mb-3">
                    <div class="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                      <svg class="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 class="main-text font-medium">Usage Examples</h3>
                  </div>
                  <p class="text-p text-sm mb-4">
                    See real-world examples and learn best practices for implementing components.
                  </p>
                  <RouterLink to="/docs/usage/examples" class="text-purple-600 hover:text-purple-700 text-sm font-medium hover:underline">
                    View Examples →
                  </RouterLink>
                </div>
              </div>

              <div class="group/card">
                <div class="p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 active-component-hover">
                  <div class="flex items-center gap-3 mb-3">
                    <div class="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                      <svg class="w-4 h-4 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 class="main-text font-medium">Need Help?</h3>
                  </div>
                  <p class="text-p text-sm mb-4">
                    Check our FAQ section or troubleshooting guide for common issues and solutions.
                  </p>
                  <RouterLink to="/docs/support/faq" class="text-orange-600 hover:text-orange-700 text-sm font-medium hover:underline">
                    Get Support →
                  </RouterLink>
                </div>
              </div>
            </div>

            <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-blue-800 font-medium mb-2">Quick Tip</h3>
                  <p class="text-blue-700 text-sm">
                    All components are designed to be copy-paste ready. You can directly copy the code from our examples and use it in your project without any additional setup.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped>
.absolute {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>