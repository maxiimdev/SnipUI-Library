<script lang="ts" setup>
import { ref, reactive } from 'vue'

interface Product {
  name: string
  price: number
  originalPrice: number
  description: string
  image: string
  rating: number
}

const isHovered = ref<boolean>(false)

const product = reactive<Product>({
  name: 'iPhone 15 Pro',
  price: 999,
  originalPrice: 1199,
  description: 'Latest flagship smartphone with cutting-edge features.',
  image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
  rating: 4.8,
})

const addToCart = (): void => {
  alert(`${product.name} added to cart!`)
}
</script>

<template>
  <ClientOnly>
    <div
      class="relative w-full max-w-[40rem] h-auto sm:h-[31rem] flex justify-center items-center px-2 sm:px-0"
    >
      <div
        class="main-div rounded-lg shadow-xl w-full max-w-sm transition-all duration-300 active-component-hover"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
      >
        <div class="relative overflow-hidden">
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full h-32 sm:h-48 object-cover rounded-t-lg transition-transform duration-300"
            :class="{ 'scale-110': isHovered }"
          />
        </div>
        <div class="p-3 sm:p-4">
          <h3 class="text-base sm:text-lg font-semibold main-text mb-1 sm:mb-2">
            {{ product.name }}
          </h3>
          <p class="text-p mb-3 sm:mb-4 text-xs sm:text-sm">
            {{ product.description }}
          </p>
          <div class="flex items-center justify-between mb-3 sm:mb-4">
            <div class="flex items-center gap-1 sm:gap-2">
              <span class="text-base sm:text-lg font-bold main-text"
                >${{ product.price }}</span
              >
              <span class="text-xs sm:text-sm text-p line-through"
                >${{ product.originalPrice }}</span
              >
            </div>
            <div class="flex items-center gap-1 sm:gap-1">
              <span class="text-yellow-400 text-sm sm:text-base">★</span>
              <span class="text-xs sm:text-sm text-p">{{
                product.rating
              }}</span>
            </div>
          </div>
          <button
            class="w-full px-2 sm:px-3 py-1 sm:py-1 main-text active-component rounded-md transition-all duration-300 text-xs sm:text-sm"
            :class="{ 'bg-indigo-700': isHovered }"
            @click="addToCart"
          >
            {{ isHovered ? 'Add to Cart' : 'Buy Now' }}
          </button>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped>
/* Isolate styles for CodeCard preview */
.absolute {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
