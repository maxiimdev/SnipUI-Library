<script lang="ts" setup>
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
  <ClientOnly>
  <div class="relative w-64 flex items-center">
    <input
      type="number"
      v-model="value"
      placeholder="0"
      class="w-full pr-20 pl-4 py-2 main-text main-div border-2 rounded-md focus:outline-none transition-all duration-300 appearance-none"
      :class="{
        'border-indigo-600': isFocused || value,
        'main-border': !isFocused && !value,
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
        class="w-6 h-6 flex items-center justify-center active-component rounded transition-all duration-300"
        @click="increment"
        aria-label="Increase value"
      >
        <svg
          class="w-4 h-4 main-text"
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
        class="w-6 h-6 flex items-center justify-center active-component rounded transition-all duration-300"
        @click="decrement"
        :disabled="value <= 0"
        aria-label="Decrease value"
      >
        <svg
          class="w-4 h-4"
          :class="{ 'main-text': value > 0, 'text-gray-400': value <= 0 }"
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
  </ClientOnly>
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
