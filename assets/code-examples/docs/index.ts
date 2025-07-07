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