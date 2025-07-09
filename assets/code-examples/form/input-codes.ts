export const standartInputCode = `<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  placeholder?: string
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'focus'): void
  (e: 'blur'): void
}>()

const value = ref('')
const isFocused = ref(false)

const updateValue = (event: Event) => {
  const input = event.target as HTMLInputElement
  value.value = input.value
  emits('update:modelValue', value.value)
}
</script>

<template>
  <div class="relative w-64">
    <input
      type="text"
      :value="value"
      :placeholder="props.placeholder ?? 'Enter the text'"
      class="w-full px-4 py-2 text-[#fff] bg-[#232323] border-2 rounded-md focus:outline-none transition-all duration-300"
      :class="{
        'border-[#8181f9]': isFocused || value,
        'border-[#313131]': !isFocused && !value,
      }"
      @input="updateValue"
      @focus="isFocused = true; emits('focus')"
      @blur="isFocused = false; emits('blur')"
      aria-label="Standard text input"
    />
  </div>
</template>`

export const iconInputCode = `<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  placeholder?: string
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'focus'): void
  (e: 'blur'): void
}>()

const value = ref('')
const isFocused = ref(false)

const updateValue = (event: Event) => {
  const input = event.target as HTMLInputElement
  value.value = input.value
  emits('update:modelValue', value.value)
}
</script>

<template>
  <div
    class="relative w-64 transition-all duration-300"
    :class="{ 'w-72': isFocused }"
  >
    <div class="absolute inset-y-0 left-0 flex items-center pl-3">
      <svg
        class="w-5 h-5 transition-all duration-300"
        :class="{
          'text-[#8181f9]': isFocused || value,
          'text-[#797979]': !isFocused && !value,
        }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
    <input
      type="text"
      :value="value"
      :placeholder="props.placeholder ?? 'Search...'"
      class="w-full pl-10 pr-4 py-2 text-[#fff] bg-[#232323] border-2 rounded-md focus:outline-none transition-all duration-300"
      :class="{
        'border-[#8181f9]': isFocused || value,
        'border-[#313131]': !isFocused && !value,
      }"
      @input="updateValue"
      @focus="isFocused = true; emits('focus')"
      @blur="isFocused = false; emits('blur')"
      aria-label="Search input with icon"
    />
  </div>
</template>`

export const passwordInputCode = `<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  placeholder?: string
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'focus'): void
  (e: 'blur'): void
  (e: 'toggle-visibility'): void
}>()

const password = ref('')
const isFocused = ref(false)
const showPassword = ref(false)

const updatePassword = (event: Event) => {
  const input = event.target as HTMLInputElement
  password.value = input.value
  emits('update:modelValue', password.value)
}

const togglePassword = () => {
  showPassword.value = !showPassword.value
  emits('toggle-visibility')
}
</script>

<template>
  <div class="relative w-64">
    <input
      :type="showPassword ? 'text' : 'password'"
      :value="password"
      :placeholder="props.placeholder ?? 'Enter the password'"
      class="w-full pr-10 pl-4 py-2 text-[#fff] bg-[#232323] border-2 rounded-md focus:outline-none transition-all duration-300"
      :class="{
        'border-[#8181f9]': isFocused || password,
        'border-[#313131]': !isFocused && !password,
      }"
      @input="updatePassword"
      @focus="isFocused = true; emits('focus')"
      @blur="isFocused = false; emits('blur')"
      aria-label="Password input"
    />
    <button
      type="button"
      class="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none"
      @click="togglePassword"
      @mousedown.prevent
      aria-label="Toggle password visibility"
    >
      <svg
        class="w-5 h-5 transition-all duration-300"
        :class="{
          'text-[#8181f9]': isFocused || password,
          'text-[#797979]': !isFocused && !password,
        }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          v-if="showPassword"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          v-if="showPassword"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
        <path
          v-else
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
        />
      </svg>
    </button>
  </div>
</template>`

export const numberInputCode = `<script lang="ts" setup>
import { ref, watch } from 'vue'

const props = defineProps<{
  min?: number
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: number): void
  (e: 'focus'): void
  (e: 'blur'): void
  (e: 'increment'): void
  (e: 'decrement'): void
}>()

const value = ref(0)
const isFocused = ref(false)

const updateValue = (event: Event) => {
  const input = event.target as HTMLInputElement
  value.value = Number(input.value)
  emits('update:modelValue', value.value)
}

const increment = () => {
  value.value++
  emits('increment')
  emits('update:modelValue', value.value)
}

const decrement = () => {
  if (value.value > (props.min ?? 0)) {
    value.value--
    emits('decrement')
    emits('update:modelValue', value.value)
  }
}

watch(value, newValue => {
  if (newValue < (props.min ?? 0)) {
    value.value = props.min ?? 0
    emits('update:modelValue', value.value)
  }
})
</script>

<template>
  <div class="relative w-64 flex items-center">
    <input
      type="number"
      :value="value"
      placeholder="0"
      class="w-full pr-20 pl-4 py-2 text-[#fff] bg-[#232323] border-2 rounded-md focus:outline-none transition-all duration-300 appearance-none"
      :class="{
        'border-[#8181f9]': isFocused || value,
        'border-[#313131]': !isFocused && !value,
      }"
      @input="updateValue"
      @focus="isFocused = true; emits('focus')"
      @blur="isFocused = false; emits('blur')"
      :min="props.min ?? 0"
      step="1"
      aria-label="Number input"
    />
    <div class="absolute inset-y-0 right-0 flex items-center pr-2 space-x-1">
      <button
        type="button"
        class="w-6 h-6 flex items-center justify-center bg-[#313131] rounded transition-all duration-300"
        @click="increment"
        aria-label="Increase value"
      >
        <svg
          class="w-4 h-4 text-[#8181f9]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
      <button
        type="button"
        class="w-6 h-6 flex items-center justify-center bg-[#313131] rounded transition-all duration-300"
        @click="decrement"
        :disabled="value <= (props.min ?? 0)"
        aria-label="Decrease value"
      >
        <svg
          class="w-4 h-4"
          :class="{ 'text-[#8181f9]': value > (props.min ?? 0), 'text-[#797979]': value <= (props.min ?? 0) }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20 12H4"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type='number'] {
  -moz-appearance: textfield;
}
</style>`

export const floatingLabelInputCode = `<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  placeholder?: string
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'focus'): void
  (e: 'blur'): void
}>()

const value = ref('')
const isFocused = ref(false)

const updateValue = (event: Event) => {
  const input = event.target as HTMLInputElement
  value.value = input.value
  emits('update:modelValue', value.value)
}
</script>

<template>
  <div class="relative w-64">
    <input
      id="text-input"
      type="text"
      :value="value"
      class="w-full px-4 py-3 text-[#fff] bg-[#232323] border-2 rounded-md focus:outline-none transition-all duration-300 peer"
      :class="{
        'border-[#8181f9]': isFocused || value,
        'border-[#313131]': !isFocused && !value,
      }"
      @input="updateValue"
      @focus="isFocused = true; emits('focus')"
      @blur="isFocused = false; emits('blur')"
      aria-label="Text input with floating label"
    />
    <label
      for="text-input"
      class="absolute left-4 top-1/2 -translate-y-1/2 text-[#797979] transition-all duration-300 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#8181f9]"
      :class="{
        '-top-2 text-sm text-[#8181f9]': isFocused || value,
        'top-1/2 text-base text-[#797979]': !isFocused && !value,
      }"
    >
      {{ props.placeholder ?? 'Enter the text' }}
    </label>
  </div>
</template>`

export const autoCompleteInputCode = `<script lang="ts" setup>
import { ref, computed } from 'vue'

const props = defineProps<{
  placeholder?: string
  suggestions?: string[]
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'focus'): void
  (e: 'blur'): void
  (e: 'select-suggestion', suggestion: string): void
}>()

const value = ref('')
const isFocused = ref(false)

const defaultSuggestions = ref([
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
])

const filteredSuggestions = computed(() => {
  const query = value.value.toLowerCase()
  const suggestionsList = props.suggestions ?? defaultSuggestions.value
  return suggestionsList.filter(suggestion =>
    suggestion.toLowerCase().includes(query)
  )
})

const updateValue = (event: Event) => {
  const input = event.target as HTMLInputElement
  value.value = input.value
  emits('update:modelValue', value.value)
}

const selectSuggestion = (suggestion: string) => {
  value.value = suggestion
  emits('update:modelValue', value.value)
  emits('select-suggestion', suggestion)
  isFocused.value = false
}

const handleBlur = () => {
  setTimeout(() => {
    isFocused.value = false
    emits('blur')
  }, 100)
}
</script>

<template>
  <div class="relative w-64">
    <div class="relative">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3">
        <svg
          class="w-5 h-5 transition-all duration-300"
          :class="{
            'text-[#8181f9]': isFocused || value,
            'text-[#797979]': !isFocused && !value,
          }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        type="text"
        :value="value"
        :placeholder="props.placeholder ?? 'Search...'"
        class="w-full pl-10 pr-4 py-2 text-[#fff] bg-[#232323] border-2 rounded-md focus:outline-none transition-all duration-300"
        :class="{
          'border-[#8181f9]': isFocused || value,
          'border-[#313131]': !isFocused && !value,
        }"
        @input="updateValue"
        @focus="isFocused = true; emits('focus')"
        @blur="handleBlur"
        aria-label="Autocomplete input"
      />
    </div>
    <div
      v-if="isFocused && filteredSuggestions.length"
      class="absolute z-10 w-full mt-1 bg-[#232323] border border-[#313131] rounded-md shadow-lg max-h-60 overflow-auto transition-all duration-300"
    >
      <ul class="py-1">
        <li
          v-for="(suggestion, index) in filteredSuggestions"
          :key="index"
          class="px-4 py-2 text-[#fff] hover:bg-[#313131] hover:text-[#8181f9] cursor-pointer transition-all duration-300"
          @click="selectSuggestion(suggestion)"
        >
          {{ suggestion }}
        </li>
      </ul>
    </div>
  </div>
</template>`

export const fileInputCode = `<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  buttonLabel?: string
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', file: File | null): void
  (e: 'focus'): void
  (e: 'blur'): void
}>()

const fileName = ref('')
const isFocused = ref(false)

const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0] || null
  fileName.value = file?.name || ''
  emits('update:modelValue', file)
}
</script>

<template>
  <div class="relative w-64">
    <div
      class="flex items-center border-2 rounded-md transition-all duration-300"
      :class="{
        'border-[#8181f9]': isFocused || fileName,
        'border-[#313131]': !isFocused && !fileName,
      }"
    >
      <label
        class="flex-shrink-0 px-4 py-2 bg-[#313131] text-[#8181f9] rounded-l-md cursor-pointer transition-all duration-300"
        :class="{ 'bg-[#f30035]': isFocused }"
      >
        {{ props.buttonLabel ?? 'Select a file' }}
        <input
          type="file"
          class="hidden"
          @change="handleFileChange"
          @focus="isFocused = true; emits('focus')"
          @blur="isFocused = false; emits('blur')"
          aria-label="File input"
        />
      </label>
      <span
        class="flex-1 px-4 py-2 text-[#fff] truncate"
        :class="{ 'text-[#797979]': !fileName }"
      >
        {{ fileName || 'Not selected' }}
      </span>
    </div>
  </div>
</template>`

export const inputWithButtonCodes = `<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  placeholder?: string
  buttonLabel?: string
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'submit', value: string): void
}>()

const inputValue = ref('')

const updateValue = (event: Event) => {
  const input = event.target as HTMLInputElement
  inputValue.value = input.value
  emits('update:modelValue', inputValue.value)
}

const handleSubmit = () => {
  emits('submit', inputValue.value)
}
</script>

<template>
  <div>
    <div class="bg-[#232323] rounded-lg shadow-xl w-full max-w-md p-6">
      <div class="flex items-center gap-3">
        <input
          :value="inputValue"
          type="text"
          :placeholder="props.placeholder ?? 'Enter text...'"
          class="flex-1 px-3 py-2 rounded-md bg-[#313131] border border-[#313131] focus:outline-none focus:ring-2 focus:ring-[#8181f9]"
          @input="updateValue"
        />
        <button
          class="px-4 py-2 text-[#fff] bg-[#313131] hover:bg-[#444444] rounded-md"
          @click="handleSubmit"
        >
          {{ props.buttonLabel ?? 'Submit' }}
        </button>
      </div>
    </div>
  </div>
</template>`

export const formWithValidationCodes = `<script lang="ts" setup>
import { ref, watch } from 'vue'

const props = defineProps<{
  minLength?: number
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'submit', value: string): void
  (e: 'error', error: string): void
}>()

const username = ref('')
const error = ref('')
const wasSubmitted = ref(false)

const validateUsername = () => {
  if (username.value.length < (props.minLength ?? 2)) {
    error.value = \`Username must be at least \${props.minLength ?? 2} characters\`
    emits('error', error.value)
    return false
  }
  error.value = ''
  emits('error', '')
  return true
}

const handleSubmit = () => {
  wasSubmitted.value = true
  if (validateUsername()) {
    emits('submit', username.value)
    username.value = ''
  }
}

const updateUsername = (event: Event) => {
  const input = event.target as HTMLInputElement
  username.value = input.value
  emits('update:modelValue', username.value)
  if (wasSubmitted.value) validateUsername()
}
</script>

<template>
  <div>
    <div class="bg-[#232323] rounded-lg shadow-xl w-full max-w-md p-6">
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="username" class="block text-sm font-semibold text-[#fff] mb-1">Username</label>
          <input
            id="username"
            :value="username"
            type="text"
            placeholder="Enter your username"
            class="w-full px-3 py-2 rounded-md border bg-[#313131] border-[#313131] focus:outline-none focus:ring-2 focus:ring-[#8181f9]"
            @input="updateUsername"
          />
          <p class="text-sm text-[#797979] mt-1">Your username should be unique and at least {{ props.minLength ?? 2 }} characters long.</p>
          <p v-if="error" class="text-sm text-[#f30035] mt-1">{{ error }}</p>
        </div>
        <button
          type="submit"
          class="w-full px-4 py-2 bg-[#313131] hover:bg-[#444444] rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>`
