<script lang="ts" setup>
import OnThisPage from '~/components/OnThisPage.vue'
import type { Item } from '~/types'

const sidebarText = useState<string>('sidebar-text', () => 'Components')
const sidebarItems = useState<Item[]>('sidebar-items', () => [])
const rightSidebarText = useState<string>('right-sidebar-text', () => 'On This Page')
const rightSidebarItems = useState<Item[]>('right-sidebar-items', () => [])

const route = useRoute()

// Проверяем, нужно ли показывать правый сайдбар
const showRightSidebar = computed(() => {
  const pathSegments = route.path.split('/').filter(segment => segment.length > 0)
  
  // Показываем правый сайдбар для страниц с конкретными компонентами/документами
  // НЕ показываем на главных страницах разделов (/components, /docs)
  return (
    pathSegments.length >= 2 && 
    (pathSegments[0] === 'docs' || pathSegments[0] === 'components')
  )
})

// Определяем класс для основной сетки
const gridClass = computed(() => {
  return showRightSidebar.value 
    ? 'grid-cols-[15rem_1fr_15rem]' 
    : 'grid-cols-[15rem_1fr]'
})
</script>

<template>
  <NuxtLayout name="default">
    <div class="grid h-full" :class="gridClass">
      <!-- Левый сайдбар -->
      <Sidebar :items="sidebarItems" :text="sidebarText" />
      
      <!-- Основной контент -->
      <main class="flex justify-center p-8">
        <div class="w-full max-w-4xl">
          <slot />
        </div>
      </main>
      
      <!-- Правый сайдбар - показываем только когда нужно -->
      <div v-if="showRightSidebar" class="relative">
        <OnThisPage :items="rightSidebarItems" :text="rightSidebarText" />
      </div>
    </div>
  </NuxtLayout>
</template>