<template>
  <div>
    <button @click="toggleTheme" class="">
      <Icon name="material-symbols-light:partly-cloudy-day-outline-rounded" class="text-2xl lg:text-3xl" />
    </button>
  </div>
</template>

<script setup>
const colorMode = useColorMode()

// Список доступных тем
const themes = ['light', 'dark']

// Функция для переключения темы
const toggleTheme = () => {
  const currentIndex = themes.indexOf(colorMode.preference)
  const nextIndex = (currentIndex + 1) % themes.length
  colorMode.preference = themes[nextIndex]
}
</script>
