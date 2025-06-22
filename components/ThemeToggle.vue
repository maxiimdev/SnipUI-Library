<template>
  <div>
    <button @click="toggleTheme" class="">
      <Icon name="line-md:light-dark-loop" size="23" />
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const colorMode = useColorMode()

// Список доступных тем
const themes = ['light', 'dark']

// Функция для переключения темы
const toggleTheme = () => {
  const currentIndex = themes.indexOf(colorMode.preference)
  const nextIndex = (currentIndex + 1) % themes.length
  colorMode.preference = themes[nextIndex]
}

const buttonText = computed(() => {
  switch (colorMode.value) {
    case 'light':
      return true
    case 'dark':
      return false
    default:
      return false
  }
})
</script>

<style scoped>
/* Пустой scoped стиль, чтобы избежать ошибки с обработкой стилей */
</style>
