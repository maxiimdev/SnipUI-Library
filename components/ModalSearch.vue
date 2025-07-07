<script lang="ts" setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { sidebarConfig } from '~/plugins/sidebar'

// Определяем emit для закрытия модалки
const emit = defineEmits<{
  (e: 'close'): void
}>()

// Реф для инпута
const searchInput = ref<HTMLInputElement | null>(null)
const searchQuery = ref('')

// Плоский список элементов для поиска, разделенный по категориям
const searchItems = computed(() => {
  const gettingStartedItems: {
    name: string
    path: string
    category: string
  }[] = []
  const componentItems: { name: string; path: string; category: string }[] = []

  // Обработка раздела Documentation > Getting Started
  const docsSection = sidebarConfig['/docs']
  const gettingStartedGroup = docsSection.items.find(
    group => group.text === 'Get Started'
  )
  if (gettingStartedGroup) {
    gettingStartedGroup.items.forEach(item => {
      gettingStartedItems.push({
        name: item.name,
        path: item.path,
        category: 'Get Started',
      })
    })
  }

  // Обработка раздела Components
  const componentsSection = sidebarConfig['/components']
  componentsSection.items.forEach(group => {
    group.items.forEach(item => {
      componentItems.push({
        name: item.name,
        path: item.path,
        category: group.text,
      })
    })
  })

  return { gettingStartedItems, componentItems }
})

// Фильтрация элементов по поисковому запросу
const filteredItems = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  const result = {
    gettingStarted: query
      ? searchItems.value.gettingStartedItems.filter(item =>
          item.name.toLowerCase().includes(query)
        )
      : searchItems.value.gettingStartedItems,
    components: query
      ? searchItems.value.componentItems.filter(item =>
          item.name.toLowerCase().includes(query)
        )
      : searchItems.value.componentItems,
  }
  return result
})

// Устанавливаем фокус и запрещаем скролл
onMounted(() => {
  document.body.classList.add('no-scroll')
  if (searchInput.value) {
    searchInput.value.focus()
  }
})

// Удаляем класс при размонтировании
onUnmounted(() => {
  document.body.classList.remove('no-scroll')
})

// Функция для закрытия модалки
const closeModal = () => {
  emit('close')
}
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 bg-black/40 flex items-center justify-center z-200"
      @click="closeModal"
    >
      <div class="main-bg p-5 rounded-xl w-[31rem] h-[29rem]" @click.stop>
        <div
          class="relative flex items-center border main-border gap-2 w-full p-2 rounded-xl main-text main-div"
        >
          <Icon
            name="bitcoin-icons:search-outline"
            class="text-2xl main-text"
          />
          <input
            ref="searchInput"
            v-model="searchQuery"
            type="text"
            class="w-full bg-transparent text-[14px] outline-none main-text"
            placeholder="Search documentation..."
          />
        </div>
        <div class="mt-3 overflow-y-auto max-h-[24rem]">
          <div
            v-if="
              filteredItems.gettingStarted.length === 0 &&
              filteredItems.components.length === 0 &&
              searchQuery
            "
            class="text-sm text-p m-3"
          >
            No results found
          </div>
          <div
            v-else-if="
              filteredItems.gettingStarted.length === 0 &&
              filteredItems.components.length === 0
            "
            class="text-sm text-p m-3"
          >
            Start typing to search...
          </div>
          <div v-else>
            <!-- Getting Started Section -->
            <div v-if="filteredItems.gettingStarted.length">
              <p class="text-sm text-p m-3">Get Started</p>
              <ul>
                <li
                  v-for="item in filteredItems.gettingStarted"
                  :key="item.path"
                  class="mb-2"
                >
                  <RouterLink
                    :to="item.path"
                    class="block p-2 rounded-lg main-text active-component-hover text-[14px]"
                    @click="closeModal"
                  >
                    <span class="font-medium">{{ item.name }}</span>
                    <span class="text-sm text-p ml-2"
                      >({{ item.category }})</span
                    >
                  </RouterLink>
                </li>
              </ul>
            </div>
            <!-- Components Section -->
            <div v-if="filteredItems.components.length">
              <p class="text-sm text-p m-3">Components</p>
              <ul>
                <li
                  v-for="item in filteredItems.components"
                  :key="item.path"
                  class="mb-2"
                >
                  <RouterLink
                    :to="item.path"
                    class="block p-2 rounded-lg main-text active-component-hover text-[14px]"
                    @click="closeModal"
                  >
                    <span class="font-medium">{{ item.name }}</span>
                    <span class="text-sm text-p ml-2"
                      >({{ item.category }})</span
                    >
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style>
/* Глобальный стиль для запрета скролла */
body.no-scroll {
  overflow: hidden;
}
</style>
