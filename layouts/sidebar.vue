<script lang="ts" setup>
import OnThisPage from '~/components/OnThisPage.vue'
import type { Item } from '~/types'

const sidebarText = useState<string>('sidebar-text', () => '')
const sidebarItems = useState<Item[]>('sidebar-items', () => [])
const rightSidebarText = useState<string>('right-sidebar-text', () => 'On This Page')
const rightSidebarItems = useState<Item[]>('right-sidebar-items', () => [])

const route = useRoute()

const showLeftSidebar = computed(() => {
  return route.path.startsWith('/docs') || route.path.startsWith('/components')
})

const showRightSidebar = computed(() => {
  const pathSegments = route.path.split('/').filter(segment => segment.length > 0)
  return pathSegments.length >= 2 && (pathSegments[0] === 'docs' || pathSegments[0] === 'components')
})

const gridClass = computed(() => {
  if (!showLeftSidebar.value) {
    return 'grid-cols-[1fr]'
  }
  return showRightSidebar.value ? 'grid-cols-[15rem_1fr_15rem]' : 'grid-cols-[15rem_1fr]'
})
</script>

<template>
  <NuxtLayout name="default">
    <div class="grid h-full" :class="gridClass">
      <!-- Левый сайдбар -->
      <div v-if="showLeftSidebar">
        <Sidebar :items="sidebarItems" :text="sidebarText" />
      </div>

      <!-- Основной контент -->
      <main class="flex justify-center p-8">
        <div class="w-full max-w-7xl">
          <slot />
        </div>
      </main>

      <!-- Правый сайдбар -->
      <div v-if="showRightSidebar">
        <OnThisPage :items="rightSidebarItems" :text="rightSidebarText" />
      </div>
    </div>
  </NuxtLayout>
</template>