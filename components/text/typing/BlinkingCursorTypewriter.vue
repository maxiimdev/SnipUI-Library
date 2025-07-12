<script lang="ts" setup>
import { ref, onMounted } from 'vue'

// State for displayed text and current index
const displayedText = ref('')
const currentIndex = ref(0)

// Text to be typed
const text = 'Building UI with animation!'
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
  <span class="text-xl md:text-3xl font-mono main-text">
    {{ displayedText }}<span class="blinking-cursor">|</span>
  </span>
  </ClientOnly>
</template>

<style scoped>
.blinking-cursor {
  animation: blink 0.7s step-end infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
