<script lang="ts" setup>
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
      class="w-full pr-10 pl-4 py-2 main-text main-div border-2 rounded-md focus:outline-none transition-all duration-300"
      :class="{
        'border-indigo-600': isFocused || password,
        'main-border': !isFocused && !password,
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
          'main-text': !isFocused && !password,
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
