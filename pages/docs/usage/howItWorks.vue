<script lang="ts" setup>
definePageMeta({
  layout: 'sidebar',
})

useState('right-sidebar-text').value = 'On this Page'
useState('right-sidebar-items').value = [
  {
    items: [
      { name: 'Component Structure', path: '#component-structure' },
      { name: 'Code Examples', path: '#code-examples' },
      { name: 'Copy & Paste Workflow', path: '#copy-paste-workflow' },
      { name: 'Customization Guide', path: '#customization-guide' },
      { name: 'Best Practices', path: '#best-practices' },
    ],
  },
]
</script>

<template>
  <ClientOnly>
    <div class="flex flex-col gap-20">
      
      <!-- Component Structure -->
      <div id="component-structure">
        <div class="main-div rounded-lg shadow-xl p-6">
          <h2 class="main-text text-2xl font-medium mb-4">
            Component Structure
          </h2>
          <p class="text-p mb-6">
            All components in this library follow a consistent structure using Vue 3 Composition API with TypeScript.
          </p>
          
          <div class="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 class="main-text text-lg font-medium mb-3">Typical Component Structure</h3>
            <pre class="text-sm bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto"><code>&lt;script lang="ts" setup&gt;
import { ref, onMounted } from 'vue'

// Props interface
interface Props {
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

// Define props with defaults
const props = withDefaults(defineProps&lt;Props&gt;(), {
  variant: 'primary',
  disabled: false,
})

// Reactive state
const isLoading = ref(false)
const isActive = ref(false)

// Methods
const handleClick = () =&gt; {
  isActive.value = !isActive.value
}

// Lifecycle
onMounted(() =&gt; {
  // Component initialization
})
&lt;/script&gt;

&lt;template&gt;
  &lt;button
    :class="[
      'px-4 py-2 rounded-lg transition-all duration-300',
      variant === 'primary' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800',
      { 'opacity-50 cursor-not-allowed': disabled }
    ]"
    :disabled="disabled"
    @click="handleClick"
  &gt;
    &lt;slot /&gt;
  &lt;/button&gt;
&lt;/template&gt;</code></pre>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="active-component rounded-lg p-4">
              <h4 class="main-text font-medium mb-2">TypeScript Support</h4>
              <p class="text-p text-sm">All components use TypeScript interfaces for props and proper type safety.</p>
            </div>
            
            <div class="active-component rounded-lg p-4">
              <h4 class="main-text font-medium mb-2">Composition API</h4>
              <p class="text-p text-sm">Modern Vue 3 syntax with &lt;script setup&gt; for cleaner code.</p>
            </div>
            
            <div class="active-component rounded-lg p-4">
              <h4 class="main-text font-medium mb-2">Tailwind Classes</h4>
              <p class="text-p text-sm">Utility-first CSS with dynamic class binding for variants.</p>
            </div>
            
            <div class="active-component rounded-lg p-4">
              <h4 class="main-text font-medium mb-2">Reactive State</h4>
              <p class="text-p text-sm">Vue's reactivity system for interactive components.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Code Examples -->
      <div id="code-examples">
        <div class="main-div rounded-lg shadow-xl p-6">
          <h2 class="main-text text-2xl font-medium mb-4">
            Code Examples
          </h2>
          <p class="text-p mb-6">
            Each component page shows live examples with full source code that you can copy and use.
          </p>
          
          <div class="space-y-6">
            <div class="border border-gray-200 rounded-lg overflow-hidden">
              <div class="bg-gray-50 px-4 py-2 border-b border-gray-200">
                <h3 class="main-text text-sm font-medium">Live Preview</h3>
              </div>
              <div class="p-6 bg-white">
                <div class="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg inline-block">
                  Example Component
                </div>
              </div>
            </div>
            
            <div class="border border-gray-200 rounded-lg overflow-hidden">
              <div class="bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center justify-between">
                <h3 class="main-text text-sm font-medium">Source Code</h3>
                <button class="text-blue-600 hover:text-blue-800 text-sm">Copy Code</button>
              </div>
              <div class="p-4 bg-gray-800">
                <pre class="text-sm text-gray-100 overflow-x-auto"><code>&lt;template&gt;
  &lt;button class="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg"&gt;
    Example Component
  &lt;/button&gt;
&lt;/template&gt;</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Copy & Paste Workflow -->
      <div id="copy-paste-workflow">
        <div class="main-div rounded-lg shadow-xl p-6">
          <h2 class="main-text text-2xl font-medium mb-4">
            Copy & Paste Workflow
          </h2>
          <p class="text-p mb-6">
            Simple 3-step process to integrate components into your project.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="text-center">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-blue-600 font-bold text-lg">1</span>
              </div>
              <h3 class="main-text text-lg font-medium mb-2">Browse Components</h3>
              <p class="text-p text-sm">Find the component you need from our collection.</p>
            </div>
            
            <div class="text-center">
              <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-green-600 font-bold text-lg">2</span>
              </div>
              <h3 class="main-text text-lg font-medium mb-2">Copy Code</h3>
              <p class="text-p text-sm">Click the copy button to get the complete component code.</p>
            </div>
            
            <div class="text-center">
              <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-purple-600 font-bold text-lg">3</span>
              </div>
              <h3 class="main-text text-lg font-medium mb-2">Paste & Customize</h3>
              <p class="text-p text-sm">Paste into your project and customize as needed.</p>
            </div>
          </div>
          
          <div class="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <svg class="w-5 h-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-sm font-medium text-blue-800">
                  No Installation Required
                </h3>
                <p class="text-sm text-blue-700 mt-1">
                  Components are standalone and don't require any package installation. Just copy, paste, and start using.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Customization Guide -->
      <div id="customization-guide">
        <div class="main-div rounded-lg shadow-xl p-6">
          <h2 class="main-text text-2xl font-medium mb-4">
            Customization Guide
          </h2>
          <p class="text-p mb-6">
            Components are designed to be easily customizable. Here's how to modify them for your needs.
          </p>
          
          <div class="space-y-6">
            <div class="active-component rounded-lg p-4">
              <h3 class="main-text text-lg font-medium mb-3">Styling Customization</h3>
              <p class="text-p text-sm mb-3">Modify Tailwind classes to match your design system:</p>
              <pre class="text-sm bg-gray-800 text-gray-100 p-3 rounded overflow-x-auto"><code>// Before
class="bg-blue-500 text-white px-4 py-2"

// After - matching your brand colors
class="bg-red-500 text-white px-6 py-3"</code></pre>
            </div>
            
            <div class="active-component rounded-lg p-4">
              <h3 class="main-text text-lg font-medium mb-3">Props Customization</h3>
              <p class="text-p text-sm mb-3">Add or modify props to fit your requirements:</p>
              <pre class="text-sm bg-gray-800 text-gray-100 p-3 rounded overflow-x-auto"><code>// Add new props
interface Props {
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
}</code></pre>
            </div>
            
            <div class="active-component rounded-lg p-4">
              <h3 class="main-text text-lg font-medium mb-3">Animation Customization</h3>
              <p class="text-p text-sm mb-3">Adjust animation timing and effects:</p>
              <pre class="text-sm bg-gray-800 text-gray-100 p-3 rounded overflow-x-auto"><code>// Modify transition duration
class="transition-all duration-300"

// Custom timing
class="transition-all duration-500 ease-in-out"</code></pre>
            </div>
          </div>
        </div>
      </div>

      <!-- Best Practices -->
      <div id="best-practices">
        <div class="main-div rounded-lg shadow-xl p-6">
          <h2 class="main-text text-2xl font-medium mb-4">
            Best Practices
          </h2>
          <p class="text-p mb-6">
            Follow these guidelines to get the most out of the component library.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg class="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 class="main-text text-sm font-medium mb-1">Use TypeScript</h3>
                  <p class="text-p text-xs">Enable type safety and better IDE support.</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg class="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 class="main-text text-sm font-medium mb-1">Follow Naming Conventions</h3>
                  <p class="text-p text-xs">Use clear, descriptive component names.</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg class="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 class="main-text text-sm font-medium mb-1">Test Components</h3>
                  <p class="text-p text-xs">Test interactive features before deployment.</p>
                </div>
              </div>
            </div>
            
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg class="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 class="main-text text-sm font-medium mb-1">Optimize Performance</h3>
                  <p class="text-p text-xs">Use lazy loading for heavy components.</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg class="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 class="main-text text-sm font-medium mb-1">Accessibility First</h3>
                  <p class="text-p text-xs">Add proper ARIA labels and keyboard support.</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg class="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 class="main-text text-sm font-medium mb-1">Consistent Styling</h3>
                  <p class="text-p text-xs">Maintain design consistency across your app.</p>
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
/* Isolate styles for documentation */
.absolute {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>