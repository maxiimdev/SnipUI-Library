<template>
  <div class="relative w-[40rem] h-[31rem] flex justify-center items-center">
    <button
      type="button"
      class="p-2 main-text active-component-hover rounded-full transition-all duration-300"
      @click="isOpen = true"
      aria-label="Open modal"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    </button>
    <div
      v-if="isOpen"
      class="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center z-10 transition-all duration-300"
      @click.self="isOpen = false"
    >
      <div
        class="main-div rounded-lg shadow-xl w-full max-w-sm transform transition-all duration-300"
        :class="{
          'scale-100 opacity-100': isOpen,
          'scale-95 opacity-0': !isOpen,
        }"
      >
        <div class="p-4">
          <div class="flex justify-between items-center mb-3">
            <h2 class="text-lg font-semibold main-text">Test Modal</h2>
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
          <p class="text-p mb-4 text-sm">Modal opened via icon trigger.</p>
          <div class="flex justify-end gap-3">
            <button
              type="button"
              class="px-3 py-1 main-text active-component rounded-md transition-all duration-300 text-sm"
              @click="isOpen = false"
            >
              Close
            </button>
          </div>
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
/* Isolate styles for CodeCard preview */
.absolute {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
