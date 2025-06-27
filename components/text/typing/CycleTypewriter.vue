<script lang="ts" setup>
import { ref, onMounted } from 'vue'

// State for displayed text and typing direction
const displayedText = ref('')
const isTyping = ref(true)

// Text and animation settings
const text = 'Cycling text animation'
const typeSpeed = 100 // ms per character when typing
const deleteSpeed = 50 // ms per character when deleting
const pauseDuration = 1000 // ms pause at start/end

onMounted(() => {
  let index = 0
  const animate = () => {
    if (isTyping.value) {
      // Add character
      displayedText.value = text.slice(0, index + 1)
      index++
      if (index >= text.length) {
        isTyping.value = false
        setTimeout(animate, pauseDuration)
      } else {
        setTimeout(animate, typeSpeed)
      }
    } else {
      // Remove character
      displayedText.value = text.slice(0, index)
      index--
      if (index < 0) {
        isTyping.value = true
        setTimeout(animate, pauseDuration / 2)
      } else {
        setTimeout(animate, deleteSpeed)
      }
    }
  }
  animate()
})
</script>

<template>
  <span class="text-3xl font-mono main-text"
    >{{ displayedText }}<span class="blinking-cursor">|</span></span
  >
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
