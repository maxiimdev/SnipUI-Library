<script lang="ts" setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const props = defineProps<{
  val: boolean
}>()
</script>

<template>
  <ClientOnly>
  <button
    class="w-10 h-10 flex items-center justify-center"
    @click="toggleMenu"
    aria-label="Toggle menu"
  >
    <svg
      class="w-10 h-10 main-text absolute transition-all duration-200"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      :class="{ 'opacity-0': val, 'opacity-100': !val }"
    >
      <path
        d="M4 6h16M4 12h16M4 18h16"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
    <svg
      class="w-10 h-10 main-text absolute transition-all duration-200"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      :class="{ 'opacity-100': val, 'opacity-0': !val }"
    >
      <path d="M6 18L18 6M6 6l12 12" stroke-width="2" stroke-linecap="round" />
    </svg>
  </button>
  </ClientOnly>
</template>
