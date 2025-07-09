<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const isFocused = ref(false)
</script>

<template>
  <ClientOnly>
  <div class="relative w-64">
    <textarea
      v-model="value"
      placeholder="Enter the text..."
      class="w-full px-4 py-2 main-div main-text border-2 rounded-md focus:outline-none transition-all duration-300 resize-y"
      :class="{
        'border-component': isFocused || value,
        'main-border': !isFocused && !value,
      }"
      rows="4"
      @focus="isFocused = true"
      @blur="isFocused = false"
      aria-label="Textarea input"
    ></textarea>
  </div>
  </ClientOnly>
</template>
