<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const isFocused = ref(false)
</script>

<template>
  <div class="relative w-64">
    <input
      type="text"
      v-model="value"
      class="w-full px-4 py-3 main-text main-div border-2 rounded-md focus:outline-none transition-all duration-300 peer"
      :class="{
        'border-indigo-600': isFocused || value,
        'main-border': !isFocused && !value,
      }"
      @focus="isFocused = true"
      @blur="isFocused = false"
      aria-label="Text input with floating label"
    />
    <label
      class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300 peer-focus:-top-2 peer-focus:text-sm peer-focus:main-text"
      :class="{
        '-top-2 text-sm main-text': isFocused || value,
        'top-1/2 text-base text-gray-500': !isFocused && !value,
      }"
    >
      Enter the text
    </label>
  </div>
</template>
