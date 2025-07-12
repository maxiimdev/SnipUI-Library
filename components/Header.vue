<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ModalSearch from './ModalSearch.vue' // Импортируем компонент модалки
import MobileMenu from './MobileMenu.vue' // Импортируем компонент мобильного меню

// Состояние для модалки поиска
const isSearchModalOpen = ref(false)
// Состояние для мобильного меню
const isMobileMenuOpen = ref(false)
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

// Функция для закрытия модалки поиска
const closeSearchModal = () => {
  isSearchModalOpen.value = false
}

// Функция для открытия мобильного меню
const openMobileMenu = () => {
  isMobileMenuOpen.value = true
}

// Функция для закрытия мобильного меню
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <header class="sticky z-100 top-0 main-bg px-5">
    <div
      class="flex items-center justify-between gap-10 h-20 p-2 lg:w-2/3 mx-auto"
    >
      <!-- Desktop menu -->
      <div class="items-center hidden lg:flex">
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
      </div>

      <!-- Mobile menu -->
      <div class="flex items-center gap-3 lg:hidden">
        <button @click="openMobileMenu">
          <ActionButtonsBurgerBtn :val="isMobileMenuOpen"/>
        </button>
        <h3 class="text-2xl font-light tracking-tight">Menu</h3>
      </div>

      <div class="flex items-center gap-3 lg:gap-5">
        <div
          class="main-div hidden md:flex rounded-xl w-[12rem] lg:w-[16rem] h-10 px-3 py-1 items-center justify-between cursor-pointer select-none"
          @click="isSearchModalOpen = true"
        >
          <span class="text-[14px] text-[#929292] hidden lg:block"
            >Search documentation...</span
          >
          <span class="text-[14px] text-[#929292] lg:hidden">Search...</span>
          <div class="flex gap-1 items-center">
            <div class="text-[14px] text-[#888888] main-bg px-[4px] rounded-md">
              {{ isMac ? '⌘' : 'Ctrl' }}
            </div>
            <div class="text-[14px] text-[#888888] main-bg px-[4px] rounded-md">
              K
            </div>
          </div>
        </div>
        <div class="w-px active-component h-6 hidden md:block"></div>
        <div class="rounded-xl flex items-center justify-center pt-2">
          <a href="">
            <Icon name="mdi:github" class="text-2xl lg:text-3xl" />
          </a>
        </div>
        <div class="w-px active-component h-6"></div>
        <div
          class="rounded-xl w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center pt-2 main-div"
        >
          <ThemeToggle />
        </div>
      </div>
    </div>

    <!-- Модалка поиска -->
    <ModalSearch v-if="isSearchModalOpen" @close="closeSearchModal" />
    
    <!-- Мобильное меню -->
    <MobileMenu v-if="isMobileMenuOpen" @close="closeMobileMenu" />
  </header>
</template>