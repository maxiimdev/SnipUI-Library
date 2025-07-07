<template>
  <div class="relative w-[40rem] h-[31rem] flex justify-center items-center">
    <button
      type="button"
      class="px-4 py-2 main-text active-component rounded-md transition-all duration-300"
      @click="isOpen = true"
      aria-label="Open full-screen modal"
    >
      Open Full-Screen Modal
    </button>
    <div
      v-if="isOpen"
      class="absolute inset-0 main-div rounded-xl z-10 transition-all duration-300"
      :class="{ 'opacity-100': isOpen, 'opacity-0': !isOpen }"
    >
      <div class="flex flex-col h-full">
        <div class="p-4 flex justify-between items-center">
          <h2 class="text-lg font-semibold main-text">Full-Screen Modal</h2>
          <button
            type="button"
            class="text-gray-500 hover:text-gray-700 transition-all duration-300"
            @click="isOpen = false"
            aria-label="Close modal"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="flex-1 p-4 overflow-auto">
          <p class="text-p text-sm">Full-screen modal for forms or content.</p>
        </div>
        <div class="p-4 flex justify-end gap-3">
          <button
            type="button"
            class="px-3 py-1 main-text active-component rounded-md transition-all duration-300 text-sm"
            @click="isOpen = false"
          >
            Close
          </button>
          <button
            type="button"
            class="px-3 py-1 main-text active-component rounded-md transition-all duration-300 text-sm"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<style scoped>
.absolute {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
