<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const isFocused = ref(false)
</script>

<template>
  <ClientOnly>
  <div
    class="relative w-64 transition-all duration-300"
    :class="{ 'w-72': isFocused }"
  >
    <div class="absolute inset-y-0 left-0 flex items-center pl-3">
      <svg
        class="w-5 h-5 transition-all duration-300 main-text"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
    <input
      type="text"
      v-model="value"
      placeholder="Search..."
      class="w-full pl-10 pr-4 py-2 main-text main-div border-2 rounded-md focus:outline-none transition-all duration-300"
      :class="{
        'border-component': isFocused || value,
        'main-border': !isFocused && !value,
      }"
      @focus="isFocused = true"
      @blur="isFocused = false"
      aria-label="Search input with icon"
    />
  </div>
  </ClientOnly>
</template>
