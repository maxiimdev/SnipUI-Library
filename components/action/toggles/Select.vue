<script lang="ts" setup>
import { ref } from 'vue'

const isOpen = ref(false)
const selectedOption = ref('Option 1')
const options = ['Option 1', 'Option 2', 'Option 3']

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectOption = (option: string) => {
  selectedOption.value = option
  isOpen.value = false
}
</script>

<template>
  <ClientOnly>
  <div class="relative">
    <button
      class="w-48 px-4 py-2 main-div border-2 main-border rounded flex items-center justify-between main-text"
      @click="toggleDropdown"
      aria-label="Toggle select dropdown"
    >
      <span>{{ selectedOption }}</span>
      <svg
        class="w-5 h-5 main-border transition-transform duration-300"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
    <div
      v-if="isOpen"
      class="absolute w-48 mt-1 main-div border-2 main-border rounded shadow-lg z-10 transition-all duration-300"
      :class="{
        'opacity-100 scale-y-100': isOpen,
        'opacity-0 scale-y-0': !isOpen,
      }"
    >
      <ul>
        <li
          v-for="option in options"
          :key="option"
          class="px-4 py-2 main-text cursor-pointer border-b-1 main-border last-of-type:border-0 active-component-hover"
          @click="selectOption(option)"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </div></ClientOnly>
</template>
