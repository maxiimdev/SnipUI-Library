<script lang="ts" setup>
import { animationCode, commonCode, cssCode, eventCode, findModuleCode, propsCode, reactiveCode, responsCode, stylesCode, tailwindCode, templateCode, tsCode } from '~/assets/code-examples/docs/trouble'

definePageMeta({
  layout: 'sidebar',
})

useState('right-sidebar-text').value = 'On this Page'
useState('right-sidebar-items').value = [
  {
    items: [
      { name: 'Common Issues', path: '#common-issues' },
      { name: 'TypeScript Errors', path: '#typescript-errors' },
      { name: 'Styling Problems', path: '#styling-problems' },
      { name: 'Component Not Working', path: '#component-not-working' },
      { name: 'Performance Issues', path: '#performance-issues' },
    ],
  },
]

const troubleshootingSections = [
  {
    id: 'common-issues',
    title: 'Common Issues',
    problems: [
      {
        problem: 'Component doesn\'t render',
        solution: 'Make sure you have properly imported the component and that all required dependencies (Vue 3, TypeScript, Tailwind CSS) are installed and configured.',
        code: commonCode
      },
      {
        problem: 'Styles are not applied',
        solution: 'Ensure Tailwind CSS is properly configured and that you\'ve included all necessary utility classes in your Tailwind config.',
        code: stylesCode
      },
      {
        problem: 'Animation not working',
        solution: 'Check if you have the required CSS transitions and that JavaScript animations are properly initialized.',
        code: animationCode
      }
    ]
  },
  {
    id: 'typescript-errors',
    title: 'TypeScript Errors',
    problems: [
      {
        problem: 'Property does not exist on type',
        solution: 'Make sure you\'ve defined the correct types for your props and that your component interface matches the expected structure.',
        code: tsCode
      },
      {
        problem: 'Cannot find module',
        solution: 'Ensure that your TypeScript configuration includes the correct paths and that you\'re using the right import syntax.',
        code: findModuleCode
      },
      {
        problem: 'Template compilation errors',
        solution: 'Make sure your template syntax is correct and that all referenced variables are properly defined in your script section.',
        code: templateCode
      }
    ]
  },
  {
    id: 'styling-problems',
    title: 'Styling Problems',
    problems: [
      {
        problem: 'Tailwind classes not working',
        solution: 'Make sure the classes are included in your Tailwind build and that you\'re not using arbitrary values incorrectly.',
        code: tailwindCode
      },
      {
        problem: 'CSS conflicts with existing styles',
        solution: 'Use CSS specificity or scoped styles to prevent conflicts. Consider using CSS modules or scoped styling.',
        code: cssCode
      },
      {
        problem: 'Responsive design not working',
        solution: 'Check that you\'re using the correct Tailwind breakpoint prefixes and that your viewport meta tag is set correctly.',
        code: responsCode
      }
    ]
  },
  {
    id: 'component-not-working',
    title: 'Component Not Working',
    problems: [
      {
        problem: 'Event handlers not firing',
        solution: 'Check that event handlers are properly bound and that the event names match Vue 3 syntax.',
        code: eventCode
      },
      {
        problem: 'Reactivity not working',
        solution: 'Ensure you\'re using ref() or reactive() for reactive data and that you\'re accessing .value when needed.',
        code: reactiveCode
      },
      {
        problem: 'Props not updating',
        solution: 'Check that props are being passed correctly and that the parent component is properly reactive.',
        code: propsCode
      }
    ]
  },
  {
    id: 'performance-issues',
    title: 'Performance Issues',
    problems: [
      {
        problem: 'Slow rendering',
        solution: 'Use v-memo, v-once, or computed properties to optimize rendering. Consider virtualizing large lists.',
        code: `<!-- Use v-memo for expensive computations -->
<div v-memo="[count, user.name]">
  <ExpensiveComponent :count="count" :user="user" />
</div>

<!-- Use v-once for static content -->
<div v-once>
  <StaticComponent />
</div>

<!-- Use computed for derived values -->
const expensiveValue = computed(() => {
  return heavyComputation(props.data)
})`
      },
      {
        problem: 'Memory leaks',
        solution: 'Make sure to clean up event listeners, timers, and subscriptions in the onUnmounted lifecycle hook.',
        code: `// Clean up properly
onMounted(() => {
  const timer = setInterval(() => {
    // Do something
  }, 1000)
  
  onUnmounted(() => {
    clearInterval(timer)
  })
})

// Or use watchEffect with cleanup
watchEffect((onInvalidate) => {
  const subscription = subscribe()
  
  onInvalidate(() => {
    subscription.unsubscribe()
  })
})`
      },
      {
        problem: 'Large bundle size',
        solution: 'Use tree-shaking, dynamic imports, and remove unused dependencies to reduce bundle size.',
        code: `// Use dynamic imports for code splitting
const LazyComponent = defineAsyncComponent(() => 
  import('~/components/LazyComponent.vue')
)

// Import only what you need
import { ref, computed } from 'vue'
// Instead of: import * as Vue from 'vue'

// Use tree-shaking friendly imports
import { debounce } from 'lodash-es'
// Instead of: import _ from 'lodash'`
      }
    ]
  }
]
</script>

<template>
  <ClientOnly>
    <div class="flex flex-col gap-20">
      <div class="main-div rounded-lg shadow-xl p-6">
        <h1 class="main-text text-3xl font-light tracking-tight mb-4">
          Troubleshooting Guide
        </h1>
        <p class="text-p text-lg leading-relaxed opacity-80 mb-8">
          Common issues and solutions when working with My UI Library components. 
          If you're still having problems, check the <RouterLink to="/docs/support/faq" class="text-indigo-600 hover:underline">FAQ section</RouterLink> 
          for additional help.
        </p>
      </div>

      <div 
        v-for="section in troubleshootingSections" 
        :key="section.id"
        :id="section.id"
        class="space-y-6"
      >
        <div class="main-div rounded-lg shadow-xl p-6">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-8 h-px bg-gray-300"></div>
            <h2 class="main-text text-xl font-medium tracking-wide">
              {{ section.title }}
            </h2>
          </div>
          
          <div class="space-y-8">
            <div 
              v-for="(issue, index) in section.problems" 
              :key="index"
              class="border-l-4 border-red-200 pl-6 py-4 bg-red-50 rounded-r-lg"
            >
              <h3 class="main-text text-lg font-medium mb-3 flex items-start gap-3">
                <span class="text-red-600 text-xl">⚠️</span>
                {{ issue.problem }}
              </h3>
              
              <div class="mb-4">
                <p class="text-p leading-relaxed opacity-90 mb-4">
                  {{ issue.solution }}
                </p>
              </div>
              
              <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre class="text-green-400 text-sm"><code>{{ issue.code }}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="main-div rounded-lg shadow-xl p-6 bg-gradient-to-r from-green-50 to-blue-50">
        <h2 class="main-text text-xl font-medium mb-4">
          Debug Checklist
        </h2>
        <p class="text-p mb-6">
          When troubleshooting issues, follow this systematic approach:
        </p>
        
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">1</div>
            <div>
              <h3 class="main-text font-medium">Check the console</h3>
              <p class="text-p text-sm opacity-80">Look for any error messages or warnings in the browser console</p>
            </div>
          </div>
          
          <div class="flex items-start gap-3">
            <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">2</div>
            <div>
              <h3 class="main-text font-medium">Verify dependencies</h3>
              <p class="text-p text-sm opacity-80">Ensure Vue 3, TypeScript, and Tailwind CSS are properly installed</p>
            </div>
          </div>
          
          <div class="flex items-start gap-3">
            <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">3</div>
            <div>
              <h3 class="main-text font-medium">Check import paths</h3>
              <p class="text-p text-sm opacity-80">Make sure all imports are correct and files exist at the specified paths</p>
            </div>
          </div>
          
          <div class="flex items-start gap-3">
            <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">4</div>
            <div>
              <h3 class="main-text font-medium">Validate component code</h3>
              <p class="text-p text-sm opacity-80">Compare your code with the documentation examples</p>
            </div>
          </div>
          
          <div class="flex items-start gap-3">
            <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">5</div>
            <div>
              <h3 class="main-text font-medium">Test in isolation</h3>
              <p class="text-p text-sm opacity-80">Try the component in a minimal setup to isolate the issue</p>
            </div>
          </div>
        </div>
      </div>

      <div class="main-div rounded-lg shadow-xl p-6 bg-gradient-to-r from-purple-50 to-pink-50">
        <h2 class="main-text text-xl font-medium mb-4">
          Still Need Help?
        </h2>
        <p class="text-p mb-4">
          If you're still experiencing issues after following this guide:
        </p>
        <div class="space-y-2">
          <div class="flex items-center gap-3">
            <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span class="text-p">
              Review the 
              <RouterLink to="/docs/support/faq" class="text-purple-600 hover:underline">FAQ section</RouterLink>
              for common questions
            </span>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span class="text-p">
              Check the 
              <RouterLink to="/docs/usage/examples" class="text-purple-600 hover:underline">examples page</RouterLink>
              for working implementations
            </span>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span class="text-p">
              Browse the 
              <RouterLink to="/components" class="text-purple-600 hover:underline">components page</RouterLink>
              for detailed code examples
            </span>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped>
code {
  font-family: 'Fira Code', 'Consolas', monospace;
  font-size: 0.9em;
  line-height: 1.4;
}

pre {
  font-family: 'Fira Code', 'Consolas', monospace;
  line-height: 1.6;
}
</style>