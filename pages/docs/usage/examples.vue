<script lang="ts" setup>
definePageMeta({
  layout: 'sidebar',
})

useState('right-sidebar-text').value = 'On this Page'
useState('right-sidebar-items').value = [
  {
    items: [
      { name: 'Text Components', path: '#text-components' },
      { name: 'Button Components', path: '#button-components' },
      { name: 'Card Components', path: '#card-components' },
      { name: 'Form Components', path: '#form-components' },
      { name: 'Animation Components', path: '#animation-components' },
    ],
  },
]
</script>

<template>
  <ClientOnly>
    <div class="flex flex-col gap-20">
      
      <!-- Text Components -->
      <div id="text-components">
        <div class="main-div rounded-lg shadow-xl p-6">
          <h2 class="main-text text-2xl font-medium mb-4">
            Text Components
          </h2>
          <p class="text-p mb-6">
            Interactive text components with typewriter effects and animations.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="active-component rounded-lg p-4">
              <h3 class="main-text text-lg font-medium mb-2">Simple Typing</h3>
              <p class="text-p text-sm mb-3">Text appears character by character with a typewriter effect.</p>
              <RouterLink to="/components/text/typing" class="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View Component →
              </RouterLink>
            </div>
            
            <div class="active-component rounded-lg p-4">
              <h3 class="main-text text-lg font-medium mb-2">Blinking Cursor</h3>
              <p class="text-p text-sm mb-3">Typewriter effect with an animated blinking cursor.</p>
              <RouterLink to="/components/text/typing" class="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View Component →
              </RouterLink>
            </div>
            
            <div class="active-component rounded-lg p-4">
              <h3 class="main-text text-lg font-medium mb-2">Cycle Typing</h3>
              <p class="text-p text-sm mb-3">Text types and deletes in a continuous loop.</p>
              <RouterLink to="/components/text/typing" class="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View Component →
              </RouterLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Button Components -->
      <div id="button-components">
        <div class="main-div rounded-lg shadow-xl p-6">
          <h2 class="main-text text-2xl font-medium mb-4">
            Button Components
          </h2>
          <p class="text-p mb-6">
            Interactive buttons with various states and animations.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="active-component rounded-lg p-4">
              <h3 class="main-text text-lg font-medium mb-2">Burger Button</h3>
              <p class="text-p text-sm mb-3">Hamburger menu toggle with smooth animation.</p>
              <RouterLink to="/components/action/buttons" class="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View Component →
              </RouterLink>
            </div>
            
            <div class="active-component rounded-lg p-4">
              <h3 class="main-text text-lg font-medium mb-2">Theme Toggle</h3>
              <p class="text-p text-sm mb-3">Sun/moon icon toggle for theme switching.</p>
              <RouterLink to="/components/action/buttons" class="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View Component →
              </RouterLink>
            </div>
            
            <div class="active-component rounded-lg p-4">
              <h3 class="main-text text-lg font-medium mb-2">Async Button</h3>
              <p class="text-p text-sm mb-3">Button with loading, success, and error states.</p>
              <RouterLink to="/components/action/buttons" class="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View Component →
              </RouterLink>
            </div>
            
            <div class="active-component rounded-lg p-4">
              <h3 class="main-text text-lg font-medium mb-2">Dropdown Button</h3>
              <p class="text-p text-sm mb-3">Button that opens a dropdown menu.</p>
              <RouterLink to="/components/action/buttons" class="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View Component →
              </RouterLink>
            </div>
            
            <div class="active-component rounded-lg p-4">
              <h3 class="main-text text-lg font-medium mb-2">Icon Button</h3>
              <p class="text-p text-sm mb-3">Compact button with icon and state toggle.</p>
              <RouterLink to="/components/action/buttons" class="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View Component →
              </RouterLink>
            </div>
            
            <div class="active-component rounded-lg p-4">
              <h3 class="main-text text-lg font-medium mb-2">Tooltips Button</h3>
              <p class="text-p text-sm mb-3">Icon buttons with dynamic tooltips.</p>
              <RouterLink to="/components/action/buttons" class="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View Component →
              </RouterLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Card Components -->
      <div id="card-components">
        <div class="main-div rounded-lg shadow-xl p-6">
          <h2 class="main-text text-2xl font-medium mb-4">
            Card Components
          </h2>
          <p class="text-p mb-6">
            Interactive cards with hover effects and animations.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="active-component rounded-lg p-4">
              <h3 class="main-text text-lg font-medium mb-2">Hover Expand Card</h3>
              <p class="text-p text-sm mb-3">Card that expands on hover to show additional content.</p>
              <RouterLink to="/components/cards/interactive" class="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View Component →
              </RouterLink>
            </div>
            
            <div class="active-component rounded-lg p-4">
              <h3 class="main-text text-lg font-medium mb-2">Image Switch Card</h3>
              <p class="text-p text-sm mb-3">Card that switches images on hover interaction.</p>
              <RouterLink to="/components/cards/interactive" class="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View Component →
              </RouterLink>
            </div>
            
            <div class="active-component rounded-lg p-4">
              <h3 class="main-text text-lg font-medium mb-2">Flip Card</h3>
              <p class="text-p text-sm mb-3">Card that flips to reveal additional details.</p>
              <RouterLink to="/components/cards/interactive" class="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View Component →
              </RouterLink>
            </div>
            
            <div class="active-component rounded-lg p-4">
              <h3 class="main-text text-lg font-medium mb-2">Click Transform Card</h3>
              <p class="text-p text-sm mb-3">Card that transforms on click to show animated stats.</p>
              <RouterLink to="/components/cards/interactive" class="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View Component →
              </RouterLink>
            </div>
            
            <div class="active-component rounded-lg p-4">
              <h3 class="main-text text-lg font-medium mb-2">Notification Card</h3>
              <p class="text-p text-sm mb-3">Card that manages and displays notifications.</p>
              <RouterLink to="/components/cards/interactive" class="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View Component →
              </RouterLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Form Components -->
      <div id="form-components">
        <div class="main-div rounded-lg shadow-xl p-6">
          <h2 class="main-text text-2xl font-medium mb-4">
            Form Components
          </h2>
          <p class="text-p mb-6">
            Form elements with modern styling and interactive features.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="active-component rounded-lg p-4">
              <h3 class="main-text text-lg font-medium mb-2">Textarea</h3>
              <p class="text-p text-sm mb-3">Multi-line text input with animated border.</p>
              <RouterLink to="/components/form/textarea" class="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View Component →
              </RouterLink>
            </div>
            
            <div class="active-component rounded-lg p-4">
              <h3 class="main-text text-lg font-medium mb-2">Auto Resize Textarea</h3>
              <p class="text-p text-sm mb-3">Textarea that automatically adjusts height.</p>
              <RouterLink to="/components/form/textarea" class="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View Component →
              </RouterLink>
            </div>
            
            <div class="active-component rounded-lg p-4">
              <h3 class="main-text text-lg font-medium mb-2">Character Count Textarea</h3>
              <p class="text-p text-sm mb-3">Textarea with character counter and limit.</p>
              <RouterLink to="/components/form/textarea" class="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View Component →
              </RouterLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Animation Components -->
      <div id="animation-components">
        <div class="main-div rounded-lg shadow-xl p-6">
          <h2 class="main-text text-2xl font-medium mb-4">
            Animation Components
          </h2>
          <p class="text-p mb-6">
            Components focused on smooth animations and micro-interactions.
          </p>
          
          <div class="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 class="main-text text-lg font-medium">Modern Animations</h3>
                <p class="text-p text-sm">All components feature smooth CSS transitions and micro-interactions</p>
              </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div class="text-center">
                <div class="main-text font-medium mb-1">Hover Effects</div>
                <div class="text-p">Smooth transform animations</div>
              </div>
              <div class="text-center">
                <div class="main-text font-medium mb-1">State Transitions</div>
                <div class="text-p">Animated state changes</div>
              </div>
              <div class="text-center">
                <div class="main-text font-medium mb-1">Loading States</div>
                <div class="text-p">Spinner and progress animations</div>
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