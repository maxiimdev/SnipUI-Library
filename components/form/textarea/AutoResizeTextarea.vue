<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'

const value = ref('')
const isFocused = ref(false)
const textareaHeight = ref(80)
const textareaRef = ref<HTMLTextAreaElement | null>(null)

const adjustHeight = () => {
  if (textareaRef.value) {
    textareaRef.value.style.height = 'auto'
    textareaHeight.value = textareaRef.value.scrollHeight
  }
}

watch(value, () => {
  adjustHeight()
})

onMounted(() => {
  adjustHeight()
})
</script>

<template>
  <ClientOnly>
  <div class="relative w-64">
    <textarea
      ref="textareaRef"
      v-model="value"
      placeholder="Enter the text..."
      class="w-full px-4 py-2 main-div main-text border-2 rounded-md focus:outline-none transition-all duration-300 resize-none"
      :class="{
        'border-component': isFocused || value,
        'main-border': !isFocused && !value,
      }"
      :style="{ height: textareaHeight + 'px' }"
      @input="adjustHeight"
      @focus="isFocused = true"
      @blur="isFocused = false"
      aria-label="Auto-resize textarea"
    ></textarea>
  </div>
  </ClientOnly>
</template>

<style scoped>
textarea {
  transition: height 0.3s ease;
}
</style>
