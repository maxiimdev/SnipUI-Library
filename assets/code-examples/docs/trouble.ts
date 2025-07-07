export const commonCode = `// Make sure to import the component correctly
import MyComponent from '~/components/MyComponent.vue'

// And register it in your template
<template>
  <MyComponent />
</template>`

export const stylesCode = `// Check your tailwind.config.js
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`

export const animationCode= `// Make sure transitions are defined
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}`

export const tsCode = `// Define proper interfaces
interface Props {
  title: string
  description?: string
  isActive?: boolean
}

// Use defineProps with TypeScript
const props = defineProps<Props>()`

export const findModuleCode = `// Check your tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": ["./*"],
      "@/*": ["./*"]
    }
  }
}`

export const templateCode = `// Ensure variables are reactive
const isVisible = ref(false)
const items = ref([])

// Use computed for derived values
const filteredItems = computed(() => {
  return items.value.filter(item => item.isActive)
})`

export const tailwindCode = `<!-- Use standard Tailwind classes -->
<div class="bg-blue-500 text-white p-4 rounded-lg">
  Content
</div>

<!-- For custom values, use arbitrary syntax -->
<div class="bg-[#1e40af] text-[16px] p-[20px]">
  Custom styling
</div>`

export const cssCode = `<!-- Use scoped styles -->
<template>
  <div class="custom-component">
    Content
  </div>
</template>

<style scoped>
.custom-component {
  /* Your custom styles here */
  /* These won't conflict with global styles */
}
</style>`

export const responsCode = `<!-- Correct responsive classes -->
<div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
  Responsive content
</div>

<!-- Make sure viewport meta is set -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">`

export const eventCode = `// Correct event binding
<button @click="handleClick">Click me</button>

// With parameters
<button @click="handleClick($event, 'param')">Click me</button>

// Make sure the handler is defined
const handleClick = (event: Event, param?: string) => {
  console.log('Button clicked', event, param)
}`

export const reactiveCode = `// Use ref for primitive values
const count = ref(0)

// Use reactive for objects
const state = reactive({
  user: null,
  isLoading: false
})

// Access ref values correctly
const increment = () => {
  count.value++ // Don't forget .value
}`

export const propsCode = `// Parent component
<template>
  <ChildComponent :title="dynamicTitle" :count="counter" />
</template>

// Child component
<script setup>
interface Props {
  title: string
  count: number
}

const props = defineProps<Props>()

// Props are automatically reactive
watchEffect(() => {
  console.log('Title changed:', props.title)
})
</script>`