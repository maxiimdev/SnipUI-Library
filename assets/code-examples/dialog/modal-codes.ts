export const basicModalCodes = `<script lang="ts" setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <div>
    <button
      type="button"
      class="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-all duration-300"
      @click="isOpen = true"
      aria-label="Open modal"
    >
      Open Modal
    </button>
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-all duration-300"
      @click.self="isOpen = false"
    >
      <div
        class="bg-white rounded-lg shadow-xl w-full max-w-md transform transition-all duration-300"
        :class="{ 'scale-100 opacity-100': isOpen, 'scale-95 opacity-0': !isOpen }"
      >
        <div class="p-6">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-semibold text-gray-900">Modal Title</h2>
            <button
              type="button"
              class="text-gray-500 hover:text-gray-700 transition-all duration-300"
              @click="isOpen = false"
              aria-label="Close modal"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p class="text-gray-700 mb-6">This is an example of modal content.</p>
          <div class="flex justify-end gap-4">
            <button
              type="button"
              class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-all duration-300"
              @click="isOpen = false"
            >
              Cancel
            </button>
            <button
              type="button"
              class="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-all duration-300"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>`

export const slideInModalCodes = `<script lang="ts" setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <div>
    <button
      type="button"
      class="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-all duration-300"
      @click="isOpen = true"
      aria-label="Open slide-in modal"
    >
      Open Sidebar
    </button>
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/50 z-50 transition-all duration-300"
      @click.self="isOpen = false"
    >
      <div
        class="fixed right-0 top-0 h-full w-80 bg-white shadow-xl transform transition-all duration-300"
        :class="{ 'translate-x-0': isOpen, 'translate-x-full': !isOpen }"
      >
        <div class="p-6">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-semibold text-gray-900">Sidebar Modal</h2>
            <button
              type="button"
              class="text-gray-500 hover:text-gray-700 transition-all duration-300"
              @click="isOpen = false"
              aria-label="Close modal"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p class="text-gray-700 mb-6">Slide-in modal for settings or menus.</p>
          <div class="flex justify-end gap-4">
            <button
              type="button"
              class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-all duration-300"
              @click="isOpen = false"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>`

export const fullScreenModalCodes = `<script lang="ts" setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <div>
    <button
      type="button"
      class="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-all duration-300"
      @click="isOpen = true"
      aria-label="Open full-screen modal"
    >
      Open Full-Screen Modal
    </button>
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-white z-50 transition-all duration-300"
      :class="{ 'opacity-100': isOpen, 'opacity-0': !isOpen }"
    >
      <div class="flex flex-col h-full">
        <div class="p-6 flex justify-between items-center">
          <h2 class="text-xl font-semibold text-gray-900">Full-Screen Modal</h2>
          <button
            type="button"
            class="text-gray-500 hover:text-gray-700 transition-all duration-300"
            @click="isOpen = false"
            aria-label="Close modal"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex-1 p-6 overflow-auto">
          <p class="text-gray-700">Full-screen modal for forms or content.</p>
        </div>
        <div class="p-6 flex justify-end gap-4">
          <button
            type="button"
            class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-all duration-300"
            @click="isOpen = false"
          >
            Close
          </button>
          <button
            type="button"
            class="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-all duration-300"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>`