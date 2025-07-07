<script lang="ts" setup>
import { ref } from 'vue'

const options = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'system', label: 'System' },
]

const selectedOption = ref('light')
</script>

<template>
  <div class="flex gap-4">
    <label v-for="option in options" :key="option.value" class="cursor-pointer">
      <input
        type="radio"
        v-model="selectedOption"
        :value="option.value"
        class="sr-only"
        :aria-label="`Select ${option.label} theme`"
      />
      <div
        class="w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all duration-300"
        :class="{
          'main-border active-component': selectedOption === option.value,
          'main-border main-bg': selectedOption !== option.value,
        }"
      >
        <svg
          class="w-6 h-6 main-text"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            v-if="option.value === 'light'"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
          <path
            v-if="option.value === 'dark'"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
          />
          <path
            v-if="option.value === 'system'"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm4 12h8"
          />
        </svg>
      </div>
    </label>
  </div>
</template>
