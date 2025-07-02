<script lang="ts" setup>
import type { Item } from '~/types'
import { useIntersectionObserver } from '@vueuse/core'

const props = defineProps<{
  items: Item[]
  text: string
}>()

const activeLink = ref<string>('')
const router = useRouter()

// Получаем все элементы для отслеживания
const getAllSectionElements = (): HTMLElement[] => {
  return Array.from(document.querySelectorAll('[id]')) as HTMLElement[]
}

// Устанавливаем активную ссылку при загрузке
const setInitialActiveLink = () => {
  if (
    props.text !== 'On This Page' ||
    !props.items.length ||
    !props.items[0].items.length
  ) {
    return
  }

  const currentHash = window.location.hash
  const firstItem = props.items[0].items[0]

  // Проверяем есть ли текущий хеш среди наших элементов
  const hasCurrentHash = props.items[0].items.some(
    item => item.path === currentHash
  )

  activeLink.value = hasCurrentHash ? currentHash : firstItem.path
}

// Настраиваем наблюдателей для всех секций
const setupIntersectionObservers = () => {
  const elements = getAllSectionElements()

  elements.forEach(element => {
    useIntersectionObserver(
      element,
      ([{ isIntersecting }]) => {
        if (isIntersecting && props.text === 'On This Page') {
          const newActiveLink = `#${element.id}`
          activeLink.value = newActiveLink
          window.history.replaceState(history.state, '', newActiveLink) // Сохраняем history.state
        }
      },
      {
        rootMargin: '-300px 0px -60% 0px',
        threshold: 0,
      }
    )
  })
}

// Инициализация
const initializeSidebar = async () => {
  await nextTick()
  setInitialActiveLink()
  setupIntersectionObservers()

  // Scroll to the active section
  const targetId = activeLink.value.replace('#', '')
  const element = document.getElementById(targetId)
  if (element) {
    const offsetTop = element.offsetTop - 120
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    })
    window.history.pushState(history.state, '', activeLink.value) // Сохраняем history.state
  }
}

// Обработка клика по ссылке
const handleLinkClick = (path: string) => {
  const targetId = path.replace('#', '')
  const element = document.getElementById(targetId)

  if (element) {
    const offsetTop = element.offsetTop - 120
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    })

    activeLink.value = path
    window.history.pushState(history.state, '', path) // Сохраняем history.state
  }
}

// Запускаем инициализацию
onMounted(initializeSidebar)
watch(() => router.currentRoute.value.fullPath, initializeSidebar)
</script>

<template>
  <aside
    class="flex sticky top-0 z-100 flex-col gap-3 px-8 pt-5 h-screen overflow-y-auto text-[14px] main-bg"
  >
    <p class="text-p border main-border rounded-xl p-3 text-center mb-2">
      {{ props.text }}
    </p>

    <div class="flex flex-col gap-5">
      <div
        v-for="(item, index) in props.items"
        :key="index"
        class="flex flex-col items-center rounded-xl text-p cursor-pointer transition-transform duration-200 select-none"
      >
        <ul class="mt-2 w-full">
          <li
            v-for="(subItem, subIndex) in item.items"
            :key="subIndex"
            class="px-4 py-3 my-1 text-p rounded flex transition-colors duration-200 cursor-pointer"
            :class="{ 'active-link-sidebar': activeLink === subItem.path }"
            @click="handleLinkClick(subItem.path)"
          >
            {{ subItem.name }}
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.active-link-sidebar {
  @apply text-[var(--text)];
}

.dark-mode .active-link-sidebar {
  @apply text-[var(--dark-text)];
}

:deep([id]) {
  scroll-margin-top: 120px;
}
</style>
