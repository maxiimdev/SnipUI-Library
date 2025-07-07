<template>
  <div class="relative w-64">
    <div class="relative">
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
        @blur="handleBlur"
        @input="filterSuggestions"
        aria-label="Autocomplete input"
      />
    </div>
    <div
      v-if="isFocused && filteredSuggestions.length"
      class="absolute z-10 w-full mt-1 main-div border main-border rounded-md shadow-lg max-h-52 overflow-auto transition-all duration-300"
    >
      <ul class="py-1">
        <li
          v-for="(suggestion, index) in filteredSuggestions"
          :key="index"
          class="px-4 py-2 main-text active-component-hover cursor-pointer transition-all duration-300"
          @click="selectSuggestion(suggestion)"
        >
          {{ suggestion }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

const value = ref('')
const isFocused = ref(false)
const suggestions = ref([
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
])

const filteredSuggestions = computed(() => {
  const query = value.value.toLowerCase()
  return suggestions.value.filter(suggestion =>
    suggestion.toLowerCase().includes(query)
  )
})

const filterSuggestions = () => {
  // Filtering is handled by computed property
}

const selectSuggestion = (suggestion: string) => {
  value.value = suggestion
  isFocused.value = false
}

const handleBlur = () => {
  setTimeout(() => {
    isFocused.value = false
  }, 100) // Delay to allow click on suggestion
}
</script>
