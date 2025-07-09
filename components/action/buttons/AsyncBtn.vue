<script lang="ts" setup>
import { ClientOnly } from '#components'
import { ref } from 'vue'

const isLoading = ref(false)
const asyncStatus = ref<'success' | 'error' | null>(null)

const triggerAsync = async () => {
  asyncStatus.value = null
  isLoading.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  isLoading.value = false
  asyncStatus.value = Math.random() > 0.5 ? 'success' : 'error'
  setTimeout(() => {
    asyncStatus.value = null
  }, 3000)
}
</script>

<template>
  <ClientOnly>
  <button
    class="px-4 py-2 w-30 active-component main-text rounded flex items-center justify-center gap-2 transition-colors duration-200"
    :class="{
      'bg-green-600 hover:bg-green-700': asyncStatus === 'success',
      'bg-red-600 hover:bg-red-700': asyncStatus === 'error',
      'opacity-50 pointer-events-none': isLoading,
    }"
    @click="triggerAsync"
  >
    <svg
      v-if="asyncStatus"
      class="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        v-if="asyncStatus === 'success'"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 13l4 4L19 7"
      />
      <path
        v-if="asyncStatus === 'error'"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
    {{
      isLoading
        ? 'Loader...'
        : asyncStatus
          ? asyncStatus === 'success'
            ? 'Success'
            : 'Error'
          : 'Click'
    }}
  </button>
  </ClientOnly>
</template>

