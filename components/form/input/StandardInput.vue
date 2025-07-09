<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const isFocused = ref(false)
</script>

<template>
  <ClientOnly>
  <div class="relative w-64">
    <input
      type="text"
      v-model="value"
      placeholder="Enter the text"
      class="w-full px-4 py-2 main-text main-div border-2 rounded-md focus:outline-none transition-all duration-300"
      :class="{
        'border-component': isFocused || value,
        'main-border': !isFocused && !value,
      }"
      @focus="isFocused = true"
      @blur="isFocused = false"
      aria-label="Standard text input"
    />
  </div>
  </ClientOnly>
</template>
