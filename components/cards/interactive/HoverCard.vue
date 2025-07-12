<script lang="ts" setup>
import { ref, reactive } from 'vue'

interface Service {
  title: string
  shortDescription: string
  features: string[]
}

const isExpanded = ref<boolean>(false)

const service = reactive<Service>({
  title: 'Web Development',
  shortDescription:
    'Building modern web applications with cutting-edge technologies.',
  features: [
    'Vue.js & React development',
    'TypeScript integration',
    'Responsive design',
    'API integration',
    'Performance optimization',
  ],
})

const startService = (): void => {
  alert('Starting the project!')
}
</script>

<template>
  <ClientOnly>
    <div class="relative w-full max-w-[40rem] h-auto sm:h-[31rem] flex justify-center items-center px-2 sm:px-0">
      <div
        class="main-div rounded-lg shadow-xl w-full max-w-sm transition-all duration-500 cursor-pointer"
        :class="{ 'h-64 sm:h-80': !isExpanded, 'h-80 sm:h-96': isExpanded }"
        @mouseenter="isExpanded = true"
        @mouseleave="isExpanded = false"
      >
        <div class="p-3 sm:p-4 h-full flex flex-col">
          <div class="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div
              class="w-10 sm:w-12 h-10 sm:h-12 active-component rounded-full flex items-center justify-center"
            >
              <span class="text-xl sm:text-2xl">🚀</span>
            </div>
            <h3 class="text-base sm:text-lg font-semibold main-text">{{ service.title }}</h3>
          </div>
          <p class="text-p mb-3 sm:mb-4 text-xs sm:text-sm">{{ service.shortDescription }}</p>
          <div
            class="transition-all duration-500 overflow-hidden"
            :class="{
              'max-h-0 opacity-0': !isExpanded,
              'max-h-40 sm:max-h-40 opacity-100': isExpanded,
            }"
          >
            <div class="space-y-2 sm:space-y-3">
              <h4 class="font-semibold text-xs sm:text-sm main-text">Features:</h4>
              <ul class="space-y-1 sm:space-y-2">
                <li
                  v-for="feature in service.features"
                  :key="feature"
                  class="flex items-center gap-1 sm:gap-2"
                >
                  <span class="text-green-300 text-xs sm:text-sm">✓</span>
                  <span class="text-xs sm:text-sm text-p">{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="mt-auto">
            <button
              class="w-full px-2 sm:px-3 py-1 sm:py-1 main-text active-component rounded-md transition-all duration-300 text-xs sm:text-sm"
              @click="startService"
            >
              Start Now
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