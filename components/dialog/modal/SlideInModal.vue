<template>
  <div class="relative w-[40rem] h-[31rem] flex justify-center items-center">
    <button
      type="button"
      class="px-4 py-2 rounded-md main-text active-component transition-all duration-300"
      @click="isOpen = true"
      aria-label="Open slide-in modal"
    >
      Open Sidebar
    </button>
    <div
      v-if="isOpen"
      class="absolute inset-0 bg-black/50 rounded-xl z-10 transition-all duration-300"
      @click.self="isOpen = false"
    >
      <div
        class="absolute left-0 top-0 h-full w-64 main-div rounded-xl shadow-xl transform transition-all duration-300"
        :class="{ 'translate-x-0': isOpen, 'translate-x-full': !isOpen }"
      >
        <div class="p-4">
          <div class="flex justify-between items-center mb-3">
            <h2 class="text-lg font-semibold main-text">Sidebar Modal</h2>
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
          <p class="text-p mb-4 text-sm">
            Slide-in modal for settings or menus.
          </p>
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
