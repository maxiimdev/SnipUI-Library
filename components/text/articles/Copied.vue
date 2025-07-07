<script lang="ts" setup>
import { ref } from 'vue'

const selectedText = ref('')
const copied = ref(false)

const handleTextSelection = () => {
  const selection = window.getSelection()
  selectedText.value = selection?.toString().trim() || ''
  copied.value = false
}

const copySelectedText = () => {
  if (selectedText.value) {
    navigator.clipboard.writeText(selectedText.value)
    copied.value = true
    setTimeout(() => {
      copied.value = false
      selectedText.value = ''
    }, 1500)
  }
}
</script>

<template>
  <div
    @mouseup="handleTextSelection"
    class="relative max-w-2xl mx-auto my-6 p-4 active-component rounded-lg shadow-sm border main-border hover:shadow-md transition-shadow duration-200"
  >
    <span class="text-lg main-text">Key Insight</span>
    <div class="w-28 h-1 bg-[#191919] mt-1 mb-3 rounded-full"></div>

    <p class="text-p text-base leading-relaxed">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio animi
      cum nisi odit perspiciatis sit laboriosam voluptatibus illum corporis
      quidem. Iste natus error aliquam! Aliquam, autem. Assumenda culpa veniam
      alias.
    </p>

    <button
      v-if="selectedText"
      @click.stop="copySelectedText"
      class="mt-3 main-div flex items-center gap-2 px-3 py-1.5 main-text rounded-md transition-colors duration-200 text-sm font-medium"
    >
      <svg
        v-if="!copied"
        class="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
      <svg
        v-else
        class="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
      {{ copied ? 'Copied!' : 'Copy' }}
    </button>
  </div>
</template>

<style scoped>
::selection {
  background-color: rgb(79, 79, 79);
  color: rgb(222, 222, 222);
}
</style>
