<script lang="ts" setup>
import { ref, onMounted } from 'vue'

// State for displayed text and current index
const displayedText = ref('')
const currentIndex = ref(0)

// Text to be typed
const text = 'Hello, this is a typewriter effect!'
// Typing speed in milliseconds
const speed = 100

onMounted(() => {
  const interval = setInterval(() => {
    if (currentIndex.value < text.length) {
      displayedText.value += text[currentIndex.value]
      currentIndex.value++
    } else {
      clearInterval(interval)
    }
  }, speed)
})
</script>

<template>
  <ClientOnly>
  <span class="text-3xl font-mono main-text w-96">{{
    displayedText
  }}</span>
  </ClientOnly>
</template>
