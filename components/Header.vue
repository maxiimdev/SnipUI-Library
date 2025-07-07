<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ModalSearch from './ModalSearch.vue' // Импортируем компонент модалки

// Состояние для модалки поиска
const isSearchModalOpen = ref(false)

// Состояние для определения ОС
const isMac = ref(false)

// Проверка ОС при загрузке компонента
const checkOS = () => {
  isMac.value = /Mac|iPod|iPhone|iPad/.test(navigator.platform)
}

// Обработчик нажатия клавиш
const handleKeydown = (event: KeyboardEvent) => {
  const isMacOS = isMac.value
  const isCommandOrCtrl = isMacOS ? event.metaKey : event.ctrlKey
  const isK = event.key === 'k' || event.key === 'K'

  if (isCommandOrCtrl && isK) {
    event.preventDefault() // Предотвращаем стандартное поведение браузера
    isSearchModalOpen.value = true // Открываем модалку
  }
}

// Добавляем и удаляем слушатель событий
onMounted(() => {
  checkOS()
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})

// Функция для закрытия модалки
const closeModal = () => {
  isSearchModalOpen.value = false
}
</script>

<template>
  <header class="sticky z-100 top-0 main-bg">
    <div
      class="flex items-center justify-between gap-10 h-20 p-2 w-2/3 mx-auto"
    >
      <ul class="flex items-center">
        <RouterLink to="/">
          <Icon name="arcticons:nequi-colombia" size="50" class="mr-3" />
        </RouterLink>
        <RouterLink
          to="/docs"
          class="py-2 px-3 cursor-pointer rounded-xl active-component-hover"
        >
          Docs
        </RouterLink>
        <RouterLink
          to="/components"
          class="py-2 px-3 cursor-pointer rounded-xl active-component-hover"
        >
          Components
        </RouterLink>
      </ul>
      <div class="flex items-center gap-5">
        <div
          class="main-div rounded-xl w-[16rem] h-10 px-3 py-1 flex items-center justify-between cursor-pointer select-none"
          @click="isSearchModalOpen = true"
        >
          <span class="text-[14px] text-[#929292]"
            >Search documentation...</span
          >
          <div class="flex gap-1 items-center">
            <div class="text-[14px] text-[#888888] main-bg px-[4px] rounded-md">
              {{ isMac ? '⌘' : 'Ctrl' }}
            </div>
            <div class="text-[14px] text-[#888888] main-bg px-[4px] rounded-md">
              K
            </div>
          </div>
        </div>
        <div
          class="main-div rounded-xl w-10 h-10 flex items-center justify-center pt-2"
        >
          <ThemeToggle />
        </div>
      </div>
    </div>
    <ModalSearch v-if="isSearchModalOpen" @close="closeModal" />
  </header>
</template>
