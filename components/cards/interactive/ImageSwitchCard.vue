<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'

interface Portfolio {
  title: string
  description: string
  images: string[]
  technologies: string[]
}

const currentImageIndex = ref<number>(0)
const portfolio = reactive<Portfolio>({
  title: 'E-commerce Platform',
  description: 'A modern e-commerce platform with intuitive interface.',
  images: [
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
    'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400',
  ],
  technologies: ['Vue 3', 'TypeScript', 'Tailwind', 'Node.js'],
})

const currentImage = computed<string>(
  () => portfolio.images[currentImageIndex.value]
)

const switchImage = (): void => {
  currentImageIndex.value =
    (currentImageIndex.value + 1) % portfolio.images.length
}

const resetImage = (): void => {
  currentImageIndex.value = 0
}

const viewProject = (): void => {
  alert('Opening project...')
}

const viewCode = (): void => {
  alert('Opening code on GitHub...')
}
</script>

<template>
  <ClientOnly>
    <div class="relative w-full max-w-[40rem] h-auto sm:h-[31rem] flex justify-center items-center px-2 sm:px-0">
      <div
        class="main-div rounded-lg shadow-xl w-full max-w-sm"
        @mouseenter="switchImage"
        @mouseleave="resetImage"
      >
        <div class="relative overflow-hidden h-32 sm:h-48">
          <img
            :src="currentImage"
            :alt="portfolio.title"
            class="w-full h-full object-cover transition-all duration-500"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
          ></div>
          <div class="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white text-xs sm:text-sm">
            {{ currentImageIndex + 1 }} / {{ portfolio.images.length }}
          </div>
        </div>
        <div class="p-3 sm:p-4">
          <h3 class="text-base sm:text-lg font-semibold main-text mb-1 sm:mb-2">
            {{ portfolio.title }}
          </h3>
          <p class="text-p mb-3 sm:mb-4 text-xs sm:text-sm">{{ portfolio.description }}</p>
          <div class="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
            <span
              v-for="tech in portfolio.technologies"
              :key="tech"
              class="px-2 sm:px-3 py-0.5 sm:py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs sm:text-sm main-text"
            >
              {{ tech }}
            </span>
          </div>
          <div class="flex gap-2 sm:gap-3">
            <button
              class="flex-1 px-2 sm:px-3 py-1 sm:py-1 main-text active-component rounded-md transition-all duration-300 text-xs sm:text-sm"
              @click="viewProject"
            >
              View
            </button>
            <button
              class="flex-1 px-2 sm:px-3 py-1 sm:py-1 main-text active-component rounded-md transition-all duration-300 text-xs sm:text-sm"
              @click="viewCode"
            >
              Code
            </button>
          </div>
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