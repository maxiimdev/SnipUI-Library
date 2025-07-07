export const textareaCode = `<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const isFocused = ref(false)
</script>

<template>
  <div class="relative w-64">
    <textarea
      v-model="value"
      placeholder="Enter the text..."
      class="w-full px-4 py-2 text-gray-700 bg-white border-2 rounded-md focus:outline-none transition-all duration-300 resize-y"
      :class="{
        'border-indigo-600': isFocused || value,
        'border-gray-300': !isFocused && !value,
      }"
      rows="4"
      @focus="isFocused = true"
      @blur="isFocused = false"
      aria-label="Textarea input"
    ></textarea>
  </div>
</template>
`
export const autoResizeTextareaCode = `<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'

const value = ref('')
const isFocused = ref(false)
const textareaHeight = ref(80) // Initial height (4 rows * 20px line-height)
const textareaRef = ref<HTMLTextAreaElement | null>(null)

const adjustHeight = () => {
  if (textareaRef.value) {
    textareaRef.value.style.height = 'auto' // Reset height to calculate scrollHeight
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
  <div class="relative w-64">
    <textarea
      ref="textareaRef"
      v-model="value"
      placeholder="Enter the text..."
      class="w-full px-4 py-2 text-gray-700 bg-white border-2 rounded-md focus:outline-none transition-all duration-300 resize-none"
      :class="{
        'border-indigo-600': isFocused || value,
        'border-gray-300': !isFocused && !value,
      }"
      :style="{ height: textareaHeight + 'px' }"
      @input="adjustHeight"
      @focus="isFocused = true"
      @blur="isFocused = false"
      aria-label="Auto-resize textarea"
    ></textarea>
  </div>
</template>

<style scoped>
textarea {
  transition: height 0.3s ease;
}
</style>
`

export const countTextareaCode = `<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const isFocused = ref(false)
const maxLength = ref(280)
</script>

<template>
  <div class="relative w-64">
    <textarea
      v-model="value"
      placeholder="Enter the text..."
      class="w-full px-4 py-2 text-gray-700 bg-white border-2 rounded-md focus:outline-none transition-all duration-300 resize-y"
      :class="{
        'border-indigo-600': isFocused || value,
        'border-gray-300': !isFocused && !value,
        'border-red-500': value.length > maxLength,
      }"
      rows="4"
      :maxlength="maxLength"
      @focus="isFocused = true"
      @blur="isFocused = false"
      aria-label="Textarea with character count"
    ></textarea>
    <div
      class="absolute bottom-2 right-2 text-sm"
      :class="{
        'text-gray-500': value.length <= maxLength,
        'text-red-500': value.length > maxLength,
      }"
    >
      {{ value.length }} / {{ maxLength }}
    </div>
  </div>
</template>
`
