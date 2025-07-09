<script lang="ts" setup>
import { ref } from 'vue'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
}
</script>

<template>
  <ClientOnly>
  <button
    class="w-10 h-10 flex items-center justify-center"
    @click="toggleTheme"
    aria-label="Toggle theme"
  >
    <svg
      class="w-10 h-10 main-text absolute transition-all duration-200"
      :class="{ 'opacity-0': isDark, 'opacity-100': !isDark }"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
    <svg
      class="w-10 h-10 main-text absolute transition-all duration-200"
      :class="{ 'opacity-100': isDark, 'opacity-0': !isDark }"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
      />
    </svg>
  </button>
  </ClientOnly>
</template>
