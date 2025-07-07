<script lang="ts" setup>
import { ref } from 'vue'

const fileName = ref('')
const isFocused = ref(false)

const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement
  fileName.value = input.files?.[0]?.name || ''
}
</script>

<template>
  <div class="relative w-64">
    <div
      class="flex items-center border-2 rounded-md transition-all duration-300"
      :class="{
        'border-component': isFocused || fileName,
        'main-border': !isFocused && !fileName,
      }"
    >
      <label
        class="flex-shrink-0 px-4 py-2 main-div main-text rounded-l-md active-component-hover cursor-pointer transition-all duration-300"
        :class="{ 'bg-indigo-200': isFocused }"
      >
        Select a file
        <input
          type="file"
          class="hidden"
          @change="handleFileChange"
          @focus="isFocused = true"
          @blur="isFocused = false"
          aria-label="File input"
        />
      </label>
      <span
        class="flex-1 px-4 py-2 text-gray-700 truncate"
        :class="{ 'text-p': !fileName }"
      >
        {{ fileName || 'Not selected' }}
      </span>
    </div>
  </div>
</template>
