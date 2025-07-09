<script lang="ts" setup>
import { ref } from 'vue'

defineProps<{
  text: string
}>()

const isReading = ref(false)
const textContent = ref<HTMLElement | null>(null)

const toggleReadAloud = () => {
  if (isReading.value) {
    window.speechSynthesis.cancel()
    isReading.value = false
  } else {
    const utterance = new SpeechSynthesisUtterance(
      textContent.value?.innerText || ''
    )
    utterance.lang = 'ru-RU'
    window.speechSynthesis.speak(utterance)
    isReading.value = true
    utterance.onend = () => {
      isReading.value = false
    }
  }
}
</script>

<template>
  <ClientOnly>
  <div
    class="relative max-w-2xl mx-auto my-6 p-4 active-component rounded-lg shadow-sm border main-border hover:shadow-md transition-all duration-300"
  >
    <span class="text-lg main-text">Read Aloud</span>
    <p class="text-p text-base" ref="textContent">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, itaque
      ipsa facilis ducimus a enim?
    </p>
    <button class="mt-4 main-text focus:outline-none" @click="toggleReadAloud">
      <svg
        v-if="!isReading"
        class="w-5 h-5 inline-block mr-1"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M12 4v12a1 1 0 01-2 0V4a1 1 0 012 0zm-5 3v6a1 1 0 01-2 0V7a1 1 0 012 0zm10 0v6a1 1 0 01-2 0V7a1 1 0 012 0z"
        />
      </svg>
      <svg
        v-else
        class="w-5 h-5 inline-block mr-1"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M6 4h8v12H6V4z" />
      </svg>
      {{ isReading ? 'Stop' : 'Voice' }}
    </button>
  </div>
  </ClientOnly>
</template>
