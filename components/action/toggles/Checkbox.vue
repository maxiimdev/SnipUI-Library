<script lang="ts" setup>
import { ref } from 'vue'

const isChecked = ref(false)
</script>

<template>
  <label class="flex items-center gap-2 cursor-pointer">
    <input
      type="checkbox"
      v-model="isChecked"
      class="sr-only"
      aria-label="Toggle checkbox"
    />
    <div
      class="w-5 h-5 border-2 border-indigo-600 rounded flex items-center justify-center transition-all duration-300"
      :class="{ 'bg-indigo-600': isChecked, 'bg-transparent': !isChecked }"
    >
      <svg
        class="w-4 h-4 text-white"
        :class="{ 'opacity-100': isChecked, 'opacity-0': !isChecked }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>
    <span class="mani-text">Agree</span>
  </label>
</template>
