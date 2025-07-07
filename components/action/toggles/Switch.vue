<script lang="ts" setup>
import { ref } from 'vue'

const isOpen = ref(false)
const selectedOption = ref('Опция 1')
const isSwitched = ref(false)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectOption = (option: string) => {
  selectedOption.value = option
  isOpen.value = false
}
</script>

<template>
  <label class="flex items-center gap-2 cursor-pointer">
    <input
      type="checkbox"
      v-model="isSwitched"
      class="sr-only"
      aria-label="Toggle switch"
    />
    <div
      class="w-10 h-5 bg-gray-300 rounded-full relative transition-all duration-300"
      :class="{ 'bg-green-600': isSwitched }"
    >
      <div
        class="w-4 h-4 bg-white rounded-full absolute top-0.5 transition-all duration-300"
        :class="{ 'left-0.5': !isSwitched, 'left-5': isSwitched }"
      ></div>
    </div>
    <span class="main-text">{{ isSwitched ? 'Active' : 'Disabled' }}</span>
  </label>
</template>
