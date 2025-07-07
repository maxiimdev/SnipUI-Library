
export const iconTriggerCodes = `<script lang="ts" setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <div>
    <button
      type="button"
      class="p-2 text-indigo-600 hover:bg-indigo-50 rounded-full transition-all duration-300"
      @click="isOpen = true"
      aria-label="Open modal"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
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
            <h2 class="text-xl font-semibold text-gray-900">Test Modal</h2>
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
          <p class="text-gray-700 mb-6">Modal opened via icon trigger.</p>
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

export const autoOpenTriggerCodes = `<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
let timeoutId: NodeJS.Timeout | null = null

onMounted(() => {
  timeoutId = setTimeout(() => {
    isOpen.value = true
  }, 3000)
})

onUnmounted(() => {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
})
</script>

<template>
  <div>
    <button
      type="button"
      class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-all duration-300"
      @click="isOpen = true"
      aria-label="Open modal manually"
    >
      Open Manually (auto in 3s)
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
            <h2 class="text-xl font-semibold text-gray-900">Test Modal</h2>
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
          <p class="text-gray-700 mb-6">Modal opened via auto trigger.</p>
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

export const keyPressTriggerCodes = `<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)

const handleKeyPress = (event: KeyboardEvent) => {
  if (event.ctrlKey && event.key === 'm') {
    isOpen.value = true
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyPress)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyPress)
})
</script>

<template>
  <div>
    <p class="text-p">Press Ctrl + M to open modal</p>
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-all duration-300"
      @click.self="isOpen = false"
    >
      <div
        class="main-div rounded-lg shadow-xl w-full max-w-md transform transition-all duration-300"
        :class="{ 'scale-100 opacity-100': isOpen, 'scale-95 opacity-0': !isOpen }"
      >
        <div class="p-6">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-semibold main-text">Test Modal</h2>
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
          <p class="text-p mb-6">Modal opened via key press (Ctrl + M).</p>
          <div class="flex justify-end gap-4">
            <button
              type="button"
              class="px-4 py-2 main-text active-component rounded-md transition-all duration-300"
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

export const hoverTriggerCodes = `<script lang="ts" setup>
import { ref } from 'vue'

const isOpen = ref(false)
let hoverTimeout: NodeJS.Timeout | null = null

const startHover = () => {
  hoverTimeout = setTimeout(() => {
    isOpen.value = true
  }, 1500)
}

const cancelHover = () => {
  if (hoverTimeout) {
    clearTimeout(hoverTimeout)
    hoverTimeout = null
  }
}
</script>

<template>
  <div>
    <button
      type="button"
      class="p-2 main-text active-component-hover rounded-full transition-all duration-300"
      @mouseenter="startHover"
      @mouseleave="cancelHover"
      aria-label="Open modal on hover"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    </button>
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-all duration-300"
      @click.self="isOpen = false"
    >
      <div
        class="main-div rounded-lg shadow-xl w-full max-w-md transform transition-all duration-300"
        :class="{ 'scale-100 opacity-100': isOpen, 'scale-95 opacity-0': !isOpen }"
      >
        <div class="p-6">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-semibold main-text">Test Modal</h2>
            <button
              type="button"
              class="text-gray-500 hover:text-gray-700 transition-all duration-300"
              @click="isOpen = false"
              aria-label="Close modal"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p class="text-p mb-6">Modal opened via hover trigger (1.5s).</p>
          <div class="flex justify-end gap-4">
            <button
              type="button"
              class="px-4 py-2 main-text active-component rounded-md transition-all duration-300"
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