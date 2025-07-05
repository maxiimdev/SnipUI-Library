export const standartInputCode = `<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const isFocused = ref(false)
</script>

<template>
  <div class="relative w-64">
    <input
      type="text"
      v-model="value"
      placeholder="Enter the text"
      class="w-full px-4 py-2 text-gray-700 bg-white border-2 rounded-md focus:outline-none transition-all duration-300"
      :class="{
        'border-indigo-600': isFocused || value,
        'border-gray-300': !isFocused && !value,
      }"
      @focus="isFocused = true"
      @blur="isFocused = false"
      aria-label="Standard text input"
    />
  </div>
</template>
`

export const iconInputCode = `<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const isFocused = ref(false)
</script>

<template>
  <div
    class="relative w-64 transition-all duration-300"
    :class="{ 'w-72': isFocused }"
  >
    <div class="absolute inset-y-0 left-0 flex items-center pl-3">
      <svg
        class="w-5 h-5 transition-all duration-300"
        :class="{
          'text-indigo-600': isFocused || value,
          'text-gray-400': !isFocused && !value,
        }"
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
      class="w-full pl-10 pr-4 py-2 text-gray-700 bg-white border-2 rounded-md focus:outline-none transition-all duration-300"
      :class="{
        'border-indigo-600': isFocused || value,
        'border-gray-300': !isFocused && !value,
      }"
      @focus="isFocused = true"
      @blur="isFocused = false"
      aria-label="Search input with icon"
    />
  </div>
</template>
`

export const passwordInputCode = `<script lang="ts" setup>
import { ref } from 'vue'

const password = ref('')
const isFocused = ref(false)
const showPassword = ref(false)
</script>

<template>
  <div class="relative w-64">
    <input
      :type="showPassword ? 'text' : 'password'"
      v-model="password"
      placeholder="Enter the password"
      class="w-full pr-10 pl-4 py-2 text-gray-700 bg-white border-2 rounded-md focus:outline-none transition-all duration-300"
      :class="{
        'border-indigo-600': isFocused || password,
        'border-gray-300': !isFocused && !password,
      }"
      @focus="isFocused = true"
      @blur="isFocused = false"
      aria-label="Password input"
    />
    <button
      type="button"
      class="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none"
      @click="showPassword = !showPassword"
      @mousedown.prevent
      aria-label="Toggle password visibility"
    >
      <svg
        class="w-5 h-5 transition-all duration-300"
        :class="{
          'text-indigo-600': isFocused || password,
          'text-gray-400': !isFocused && !password,
        }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          v-if="showPassword"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          v-if="showPassword"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
        <path
          v-else
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
        />
      </svg>
    </button>
  </div>
</template>
`

export const numberInputCode = `<script lang="ts" setup>
import { ref, watch } from 'vue'

const value = ref(0)
const isFocused = ref(false)

const increment = () => {
  value.value++
}

const decrement = () => {
  if (value.value > 0) {
    value.value--
  }
}

// Ensure value is never negative
watch(value, newValue => {
  if (newValue < 0) {
    value.value = 0
  }
})
</script>

<template>
  <div class="relative w-64 flex items-center">
    <input
      type="number"
      v-model="value"
      placeholder="0"
      class="w-full pr-20 pl-4 py-2 text-gray-700 bg-white border-2 rounded-md focus:outline-none transition-all duration-300 appearance-none"
      :class="{
        'border-indigo-600': isFocused || value,
        'border-gray-300': !isFocused && !value,
      }"
      @focus="isFocused = true"
      @blur="isFocused = false"
      min="0"
      step="1"
      aria-label="Number input"
    />
    <div class="absolute inset-y-0 right-0 flex items-center pr-2 space-x-1">
      <button
        type="button"
        class="w-6 h-6 flex items-center justify-center bg-indigo-100 rounded hover:bg-indigo-200 transition-all duration-300"
        @click="increment"
        aria-label="Increase value"
      >
        <svg
          class="w-4 h-4 text-indigo-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
      <button
        type="button"
        class="w-6 h-6 flex items-center justify-center bg-indigo-100 rounded hover:bg-indigo-200 transition-all duration-300"
        @click="decrement"
        :disabled="value <= 0"
        aria-label="Decrease value"
      >
        <svg
          class="w-4 h-4"
          :class="{ 'text-indigo-600': value > 0, 'text-gray-400': value <= 0 }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20 12H4"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Hide default number input spinners */
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
`

export const floatingLabelInputCode = `<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const isFocused = ref(false)
</script>

<template>
  <div class="relative w-64">
    <input
      type="text"
      v-model="value"
      class="w-full px-4 py-3 text-gray-700 bg-white border-2 rounded-md focus:outline-none transition-all duration-300 peer"
      :class="{
        'border-indigo-600': isFocused || value,
        'border-gray-300': !isFocused && !value,
      }"
      @focus="isFocused = true"
      @blur="isFocused = false"
      aria-label="Text input with floating label"
    />
    <label
      class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-white"
      :class="{
        '-top-2 text-sm text-white': isFocused || value,
        'top-1/2 text-base text-gray-500': !isFocused && !value,
      }"
    >
      Enter the text
    </label>
  </div>
</template>
`

export const autoCompleteInputCode = `<script lang="ts" setup>
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

<template>
  <div class="relative w-64">
    <div class="relative">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3">
        <svg
          class="w-5 h-5 transition-all duration-300"
          :class="{
            'text-indigo-600': isFocused || value,
            'text-gray-400': !isFocused && !value,
          }"
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
        class="w-full pl-10 pr-4 py-2 text-gray-700 bg-white border-2 rounded-md focus:outline-none transition-all duration-300"
        :class="{
          'border-indigo-600': isFocused || value,
          'border-gray-300': !isFocused && !value,
        }"
        @focus="isFocused = true"
        @blur="handleBlur"
        @input="filterSuggestions"
        aria-label="Autocomplete input"
      />
    </div>
    <div
      v-if="isFocused && filteredSuggestions.length"
      class="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto transition-all duration-300"
    >
      <ul class="py-1">
        <li
          v-for="(suggestion, index) in filteredSuggestions"
          :key="index"
          class="px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer transition-all duration-300"
          @click="selectSuggestion(suggestion)"
        >
          {{ suggestion }}
        </li>
      </ul>
    </div>
  </div>
</template>
`
export const fileInputCode = `<script lang="ts" setup>
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
        'border-indigo-600': isFocused || fileName,
        'border-gray-300': !isFocused && !fileName,
      }"
    >
      <label
        class="flex-shrink-0 px-4 py-2 bg-indigo-100 text-indigo-600 rounded-l-md hover:bg-indigo-200 cursor-pointer transition-all duration-300"
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
        :class="{ 'text-gray-400': !fileName }"
      >
        {{ fileName || 'Not selected' }}
      </span>
    </div>
  </div>
</template>
`