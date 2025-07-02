```vue
<template>
  <div class="flex flex-wrap gap-4">
    <!-- Основная кнопка -->
    <button
      class="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      :disabled="isLoading"
      @click="triggerPrimary"
    >
      Основная
    </button>

    <!-- Кнопка с лоадером -->
    <button
      class="px-4 py-2 bg-indigo-600 text-white rounded flex items-center gap-2 transition-colors duration-200"
      :class="{ 'opacity-50 pointer-events-none': isLoading }"
      @click="triggerLoader"
    >
      <svg
        v-if="isLoading"
        class="w-5 h-5 animate-spin"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
      </svg>
      {{ isLoading ? 'Загрузка...' : 'С лоадером' }}
    </button>

    <!-- Асинхронная кнопка -->
    <button
      class="px-4 py-2 bg-indigo-600 text-white rounded flex items-center gap-2 transition-colors duration-200"
      :class="{ 'bg-green-600 hover:bg-green-700': asyncStatus === 'success', 'bg-red-600 hover:bg-red-700': asyncStatus === 'error' }"
      @click="triggerAsync"
    >
      <svg
        v-if="asyncStatus"
        class="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          v-if="asyncStatus === 'success'"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 13l4 4L19 7"
        />
        <path
          v-if="asyncStatus === 'error'"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      {{ asyncStatus ? (asyncStatus === 'success' ? 'Успех' : 'Ошибка') : 'Асинхронная' }}
    </button>

    <!-- Вторичная кнопка -->
    <button
      class="px-4 py-2 bg-transparent border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50 transition-colors duration-200"
    >
      Вторичная
    </button>

    <!-- Кнопка-иконка -->
    <button
      class="p-2 rounded-full hover:bg-indigo-100 transition-colors duration-200"
      @click="toggleIcon"
    >
      <svg
        class="w-5 h-5"
        :class="{ 'text-yellow-500': iconActive, 'text-indigo-600': !iconActive }"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
definePageMeta({
  layout: 'sidebar'
})

const isLoading = ref(false)
const asyncStatus = ref<'success' | 'error' | null>(null)
const iconActive = ref(false)

const triggerPrimary = () => {
  alert('Основная кнопка нажата!')
}

const triggerLoader = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 2000) // Имитация загрузки
}

const triggerAsync = async () => {
  asyncStatus.value = null
  isLoading.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  isLoading.value = false
  asyncStatus.value = Math.random() > 0.5 ? 'success' : 'error'
  setTimeout(() => {
    asyncStatus.value = null
  }, 3000) // Сброс статуса через 3 секунды
}

const toggleIcon = () => {
  iconActive.value = !iconActive.value
}
</script>
```