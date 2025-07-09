export const quickStartCode = `<script lang="ts" setup>
import { ref, reactive } from 'vue'

interface Product {
  name: string
  price: number
  originalPrice: number
  discount: number
  description: string
  image: string
  rating: number
}

const isHovered = ref<boolean>(false)

const product = reactive<Product>({
  name: 'iPhone 15 Pro',
  price: 999,
  originalPrice: 1199,
  discount: 17,
  description: 'Latest flagship smartphone with cutting-edge features.',
  image: 'https://picsum.photos/400/200?random=3',
  rating: 4.8
})

const addToCart = (): void => {
  alert(\`\${product.name} added to cart!\`)
}
</script>

<template>
  <div>
    <div 
      class="main-div rounded-lg shadow-xl w-full max-w-md transition-all duration-300 hover:shadow-2xl hover:scale-105"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <div class="relative overflow-hidden">
        <img 
          :src="product.image" 
          :alt="product.name"
          class="w-full h-48 object-cover rounded-t-lg transition-transform duration-300"
          :class="{ 'scale-110': isHovered }"
        />
        <div 
          class="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium transition-all duration-300"
          :class="{ 'scale-110': isHovered }"
        >
          -\${product.discount}%
        </div>
      </div>
      <div class="p-6">
        <h3 class="text-xl font-semibold main-text mb-2">\${product.name}</h3>
        <p class="text-p mb-4">\${product.description}</p>
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-2">
            <span class="text-xl font-bold main-text">$\${product.price}</span>
            <span class="text-sm text-p line-through">$\${product.originalPrice}</span>
          </div>
          <div class="flex items-center gap-1">
            <span class="text-yellow-400">★</span>
            <span class="text-sm text-p">\${product.rating}</span>
          </div>
        </div>
        <button 
          class="w-full px-4 py-2 main-text active-component rounded-md transition-all duration-300"
          :class="{ 'bg-indigo-700': isHovered }"
          @click="addToCart"
        >
          \${isHovered ? 'Add to Cart' : 'Buy Now'}
        </button>
      </div>
    </div>
  </div>
</template>`

export const inputWithButtonCode = `<script lang="ts" setup>
import { ref } from 'vue'

const inputValue = ref<string>('')

const handleSubmit = (): void => {
  alert(\`Submitted: \${inputValue.value || 'Nothing entered'}\`)
}
</script>

<template>
  <div>
    <div class="main-div rounded-lg shadow-xl w-full max-w-md p-6">
      <div class="flex items-center gap-3">
        <input
          v-model="inputValue"
          type="text"
          placeholder="Enter text..."
          class="flex-1 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-p"
        />
        <button
          class="px-4 py-2 main-text active-component rounded-md bg-indigo-700 text-white"
          @click="handleSubmit"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>`

export const createCode = `<script lang="ts" setup>
interface Props {
  text: string
  speed?: number
}

const props = withDefaults(defineProps<Props>(), {
  speed: 100
})

const displayText = ref('')
const currentIndex = ref(0)

const typeWriter = () => {
  if (currentIndex.value < props.text.length) {
    displayText.value += props.text.charAt(currentIndex.value)
    currentIndex.value++
    setTimeout(typeWriter, props.speed)
  }
}

onMounted(() => {
  typeWriter()
})
</script>

<template>
  <span>{{ displayText }}</span>
</template>`

export const typicalCode = `<script lang="ts" setup>
import { ref, onMounted } from 'vue'

// Props interface
interface Props {
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

// Define props with defaults
const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  disabled: false,
})

// Reactive state
const isLoading = ref(false)
const isActive = ref(false)

// Methods
const handleClick = () => {
  isActive.value = !isActive.value
}

// Lifecycle
onMounted(() => {
  // Component initialization
})
</script>

<template>
  <button
    :class="[
      'px-4 py-2 rounded-lg transition-all duration-300',
      variant === 'primary' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800',
      { 'opacity-50 cursor-not-allowed': disabled }
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>`

export const exampleBtnCode = `<script lang="ts" setup>
const props = defineProps({
  label: String,
})
</script>

<template>
  <button
    class="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
  >
    {{ label }}
  </button>
</template>`
