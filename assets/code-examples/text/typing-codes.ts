export const simpleTypingCode = `<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const props = defineProps<{
  text?: string
  speed?: number
}>()

const emits = defineEmits<{
  (e: 'typing-progress', index: number, text: string): void
  (e: 'typing-complete'): void
}>()

const displayedText = ref('')
const currentIndex = ref(0)
const defaultText = props.text ?? 'Hello, this is a typewriter effect!'
const defaultSpeed = props.speed ?? 100

onMounted(() => {
  const interval = setInterval(() => {
    if (currentIndex.value < defaultText.length) {
      displayedText.value += defaultText[currentIndex.value]
      currentIndex.value++
      emits('typing-progress', currentIndex.value, displayedText.value)
    } else {
      clearInterval(interval)
      emits('typing-complete')
    }
  }, defaultSpeed)
})
</script>

<template>
  <span class="text-3xl font-mono text-[#fff]">{{ displayedText }}</span>
</template>`

export const blinkingCursorTypingCode = `<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const props = defineProps<{
  text?: string
  speed?: number
}>()

const emits = defineEmits<{
  (e: 'typing-progress', index: number, text: string): void
  (e: 'typing-complete'): void
}>()

const displayedText = ref('')
const currentIndex = ref(0)
const defaultText = props.text ?? 'Building UI with animation!'
const defaultSpeed = props.speed ?? 100

onMounted(() => {
  const interval = setInterval(() => {
    if (currentIndex.value < defaultText.length) {
      displayedText.value += defaultText[currentIndex.value]
      currentIndex.value++
      emits('typing-progress', currentIndex.value, displayedText.value)
    } else {
      clearInterval(interval)
      emits('typing-complete')
    }
  }, defaultSpeed)
})
</script>

<template>
  <span class="text-3xl font-mono text-[#fff]">
    {{ displayedText }}<span class="blinking-cursor text-[#8181f9]">|</span>
  </span>
</template>

<style scoped>
.blinking-cursor {
  animation: blink 0.7s step-end infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}
</style>`

export const cyclingTypingCode = `<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const props = defineProps<{
  text?: string
  typeSpeed?: number
  deleteSpeed?: number
  pauseDuration?: number
}>()

const emits = defineEmits<{
  (e: 'typing-progress', index: number, text: string, isTyping: boolean): void
  (e: 'cycle-complete'): void
}>()

const displayedText = ref('')
const isTyping = ref(true)
const defaultText = props.text ?? 'Cycling text animation'
const defaultTypeSpeed = props.typeSpeed ?? 100
const defaultDeleteSpeed = props.deleteSpeed ?? 50
const defaultPauseDuration = props.pauseDuration ?? 1000

onMounted(() => {
  let index = 0
  const animate = () => {
    if (isTyping.value) {
      // Add character
      displayedText.value = defaultText.slice(0, index + 1)
      index++
      emits('typing-progress', index, displayedText.value, true)
      if (index >= defaultText.length) {
        isTyping.value = false
        setTimeout(animate, defaultPauseDuration)
      } else {
        setTimeout(animate, defaultTypeSpeed)
      }
    } else {
      // Remove character
      displayedText.value = defaultText.slice(0, index)
      index--
      emits('typing-progress', index, displayedText.value, false)
      if (index < 0) {
        isTyping.value = true
        emits('cycle-complete')
        setTimeout(animate, defaultPauseDuration / 2)
      } else {
        setTimeout(animate, defaultDeleteSpeed)
      }
    }
  }
  animate()
})
</script>

<template>
  <span class="text-3xl font-mono text-[#fff]">
    {{ displayedText }}<span class="blinking-cursor text-[#8181f9]">|</span>
  </span>
</template>

<style scoped>
.blinking-cursor {
  animation: blink 0.7s step-end infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}
</style>`