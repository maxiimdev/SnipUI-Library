<script lang="ts" setup>
import { ref } from 'vue'

const isOpen = ref(false)
const text = ref('Menu')
const options = ['Option 1', 'Option 2', 'Option 3']

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectOption = (option: string) => {
  console.log(`Option: ${option}`)
  isOpen.value = false
}
</script>

<template>
  <ClientOnly>
    <div class="relative">
      <button
        class="px-4 py-2 rounded active-component transition-colors duration-200"
        @click="toggleDropdown"
      >
        {{ text }}
      </button>
      <div
        v-if="isOpen"
        class="absolute right-0 mt-2 w-42 md:w-48 border-1 main-border rounded-md shadow-lg z-10"
      >
        <ul>
          <li
            v-for="(option, index) in options"
            :key="index"
            class="md:px-4 md:py-2 p-1 main-text active-component-hover cursor-pointer border-b-1 main-border last-of-type:border-0"
            @click="selectOption(option)"
          >
            {{ option }}
          </li>
        </ul>
      </div>
    </div>
  </ClientOnly>
</template>
