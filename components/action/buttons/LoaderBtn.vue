<script lang="ts" setup>
import { ref } from 'vue'
definePageMeta({
  layout: 'sidebar',
})

const isLoading = ref(false)

const triggerLoader = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
}
</script>

<template>
  <ClientOnly>
  <button
    class="px-4 py-2 active-component main-text rounded flex justify-center items-center gap-2 transition-colors duration-200 w-30"
    :class="{ 'opacity-50 pointer-events-none': isLoading }"
    @click="triggerLoader"
  >
    <svg
      v-if="isLoading"
      class="w-5 h-5 animate-spin"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
    </svg>
    {{ isLoading ? 'Loader...' : 'Click' }}
  </button>
  </ClientOnly>
</template>
