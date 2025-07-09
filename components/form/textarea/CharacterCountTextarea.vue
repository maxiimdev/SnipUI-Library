<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const isFocused = ref(false)
const maxLength = ref(280)
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
        'border-red-500': value.length > maxLength,
      }"
      rows="4"
      :maxlength="maxLength"
      @focus="isFocused = true"
      @blur="isFocused = false"
      aria-label="Textarea with character count"
    ></textarea>
    <div
      class="absolute bottom-2 right-2 text-sm"
      :class="{
        'text-gray-500': value.length <= maxLength,
        'text-red-500': value.length > maxLength,
      }"
    >
      {{ value.length }} / {{ maxLength }}
    </div>
  </div>
  </ClientOnly>
</template>
