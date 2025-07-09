export const textareaCode = `<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  placeholder?: string
  rows?: number
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'focus'): void
  (e: 'blur'): void
}>()

const value = ref('')
const isFocused = ref(false)

const updateValue = (event: Event) => {
  const textarea = event.target as HTMLTextAreaElement
  value.value = textarea.value
  emits('update:modelValue', value.value)
}
</script>

<template>
  <div class="relative w-64">
    <textarea
      :value="value"
      :placeholder="props.placeholder ?? 'Enter the text...'"
      class="w-full px-4 py-2 text-[#fff] bg-[#232323] border-2 rounded-md focus:outline-none transition-all duration-300 resize-y"
      :class="{
        'border-[#8181f9]': isFocused || value,
        'border-[#313131]': !isFocused && !value,
      }"
      :rows="props.rows ?? 4"
      @input="updateValue"
      @focus="isFocused = true; emits('focus')"
      @blur="isFocused = false; emits('blur')"
      aria-label="Textarea input"
    ></textarea>
  </div>
</template>`

export const autoResizeTextareaCode = `<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps<{
  placeholder?: string
  initialRows?: number
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'focus'): void
  (e: 'blur'): void
}>()

const value = ref('')
const isFocused = ref(false)
const textareaHeight = ref((props.initialRows ?? 4) * 20) // Initial height (rows * 20px line-height)
const textareaRef = ref<HTMLTextAreaElement | null>(null)

const adjustHeight = () => {
  if (textareaRef.value) {
    textareaRef.value.style.height = 'auto' // Reset height to calculate scrollHeight
    textareaHeight.value = textareaRef.value.scrollHeight
    emits('update:modelValue', value.value)
  }
}

const updateValue = (event: Event) => {
  const textarea = event.target as HTMLTextAreaElement
  value.value = textarea.value
  emits('update:modelValue', value.value)
  adjustHeight()
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
      :value="value"
      :placeholder="props.placeholder ?? 'Enter the text...'"
      class="w-full px-4 py-2 text-[#fff] bg-[#232323] border-2 rounded-md focus:outline-none transition-all duration-300 resize-none"
      :class="{
        'border-[#8181f9]': isFocused || value,
        'border-[#313131]': !isFocused && !value,
      }"
      :style="{ height: textareaHeight + 'px' }"
      @input="updateValue"
      @focus="isFocused = true; emits('focus')"
      @blur="isFocused = false; emits('blur')"
      aria-label="Auto-resize textarea"
    ></textarea>
  </div>
</template>

<style scoped>
textarea {
  transition: height 0.3s ease;
}
</style>`

export const countTextareaCode = `<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  placeholder?: string
  maxLength?: number
  rows?: number
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'focus'): void
  (e: 'blur'): void
}>()

const value = ref('')
const isFocused = ref(false)
const maxLength = ref(props.maxLength ?? 280)

const updateValue = (event: Event) => {
  const textarea = event.target as HTMLTextAreaElement
  value.value = textarea.value
  emits('update:modelValue', value.value)
}
</script>

<template>
  <div class="relative w-64">
    <textarea
      :value="value"
      :placeholder="props.placeholder ?? 'Enter the text...'"
      class="w-full px-4 py-2 text-[#fff] bg-[#232323] border-2 rounded-md focus:outline-none transition-all duration-300 resize-y"
      :class="{
        'border-[#8181f9]': (isFocused || value) && value.length <= maxLength,
        'border-[#313131]': !isFocused && !value,
        'border-[#f30035]': value.length > maxLength,
      }"
      :rows="props.rows ?? 4"
      :maxlength="maxLength"
      @input="updateValue"
      @focus="isFocused = true; emits('focus')"
      @blur="isFocused = false; emits('blur')"
      aria-label="Textarea with character count"
    ></textarea>
    <div
      class="absolute bottom-2 right-2 text-sm"
      :class="{
        'text-[#797979]': value.length <= maxLength,
        'text-[#f30035]': value.length > maxLength,
      }"
    >
      {{ value.length }} / {{ maxLength }}
    </div>
  </div>
</template>`