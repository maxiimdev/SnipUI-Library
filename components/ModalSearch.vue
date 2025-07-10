<script lang="ts" setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { sidebarConfig } from '~/plugins/sidebar.client'
import { Icon } from '@iconify/vue'

const emit = defineEmits<{
  (e: 'close'): void
}>()

const searchInput = ref<HTMLInputElement | null>(null)
const searchQuery = ref('')

// Плоский список всех элементов для поиска
const searchItems = computed(() => {
  const items: {
    name: string
    path: string
    category: string
    section: string
  }[] = []

  // Обработка раздела Documentation
  const docsSection = sidebarConfig['/docs']
  if (docsSection) {
    docsSection.items.forEach(group => {
      group.items.forEach(item => {
        items.push({
          name: item.name,
          path: item.path,
          category: group.text,
          section: 'Documentation',
        })
      })
    })
  }

  // Обработка раздела Components
  const componentsSection = sidebarConfig['/components']
  if (componentsSection) {
    componentsSection.items.forEach(group => {
      group.items.forEach(item => {
        items.push({
          name: item.name,
          path: item.path,
          category: group.text,
          section: 'Components',
        })
      })
    })
  }

  return items
})

// Группировка элементов по секциям и категориям
const groupedItems = computed(() => {
  const groups: {
    Documentation: {
      [category: string]: {
        name: string
        path: string
        category: string
        section: string
      }[]
    }
    Components: {
      [category: string]: {
        name: string
        path: string
        category: string
        section: string
      }[]
    }
  } = { Documentation: {}, Components: {} }

  searchItems.value.forEach(item => {
    const section = item.section as 'Documentation' | 'Components'
    if (!groups[section][item.category]) {
      groups[section][item.category] = []
    }
    groups[section][item.category].push(item)
  })

  return groups
})

// Фильтрация элементов по поисковому запросу
const filteredItems = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  const result: {
    Documentation: {
      [category: string]: {
        name: string
        path: string
        category: string
        section: string
      }[]
    }
    Components: {
      [category: string]: {
        name: string
        path: string
        category: string
        section: string
      }[]
    }
  } = { Documentation: {}, Components: {} }

  Object.entries(groupedItems.value).forEach(([section, categories]) => {
    Object.entries(categories).forEach(([category, items]) => {
      const filtered = query
        ? items.filter(item => item.name.toLowerCase().includes(query))
        : items
      if (filtered.length > 0) {
        result[section as 'Documentation' | 'Components'][category] = filtered
      }
    })
  })

  return result
})

// Закрытие модалки по клавише Esc
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    emit('close')
  }
}

onMounted(() => {
  document.body.classList.add('no-scroll')
  if (searchInput.value) {
    searchInput.value.focus()
  }
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.body.classList.remove('no-scroll')
  window.removeEventListener('keydown', handleKeydown)
})

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
      <div class="main-bg p-6 rounded-xl w-[31rem] h-[29rem]" @click.stop>
        <div
          class="relative flex items-center border main-border gap-2 w-full p-2 rounded-xl main-text main-div"
        >
          <svg
            class="main-text"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M15.553 15.553a7.06 7.06 0 1 0-9.985-9.985a7.06 7.06 0 0 0 9.985 9.985m0 0L20 20"
            />
          </svg>

          <input
            ref="searchInput"
            v-model="searchQuery"
            type="text"
            class="w-full bg-transparent text-sm outline-none main-text"
            placeholder="Search documentation..."
          />
        </div>
        <div class="mt-4 overflow-y-auto max-h-[24rem]">
          <div
            v-if="
              Object.keys(filteredItems.Documentation).length === 0 &&
              Object.keys(filteredItems.Components).length === 0 &&
              searchQuery
            "
            class="text-sm text-p m-3"
          >
            No results found
          </div>
          <div
            v-else-if="
              Object.keys(filteredItems.Documentation).length === 0 &&
              Object.keys(filteredItems.Components).length === 0
            "
            class="text-sm text-p m-3"
          >
            Start typing to search...
          </div>
          <div v-else>
            <!-- Documentation Section -->
            <div
              v-if="Object.keys(filteredItems.Documentation).length"
              class="mb-6"
            >
              <div class="flex items-center gap-4 mb-4">
                <div
                  class="w-8 h-px component-bg transition-all duration-500"
                ></div>
                <p class="main-text text-lg font-medium">Documentation</p>
              </div>
              <div
                v-for="(items, category) in filteredItems.Documentation"
                :key="category"
                class="mb-4"
              >
                <p class="text-sm text-p m-3 font-medium">{{ category }}</p>
                <ul>
                  <li v-for="item in items" :key="item.path" class="mb-2">
                    <RouterLink
                      :to="item.path"
                      class="group/link flex items-center gap-3 py-2 px-3 rounded-lg transition-all duration-300 active-component-hover main-text text-sm"
                      @click="closeModal"
                    >
                      <div
                        class="w-1 h-1 rounded-full bg-gray-400 transition-all duration-300 group-hover/link:w-6 group-hover/link:h-px"
                      ></div>
                      <span class="font-medium">{{ item.name }}</span>

                      <div
                        class="ml-auto opacity-0 transition-all duration-300 group-hover/link:opacity-100 group-hover/link:translate-x-1"
                      >
                        <svg
                          class="w-4 h-4 main-text"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="1.5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                          />
                        </svg>
                      </div>
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Divider -->
            <div
              v-if="
                Object.keys(filteredItems.Documentation).length &&
                Object.keys(filteredItems.Components).length
              "
              class="h-px active-component my-4 w-[95%] mx-auto"
            ></div>

            <!-- Components Section -->
            <div v-if="Object.keys(filteredItems.Components).length">
              <div class="flex items-center gap-4 mb-4">
                <div
                  class="w-8 h-px component-bg transition-all duration-500"
                ></div>
                <p class="main-text text-lg font-medium">Components</p>
              </div>
              <div
                v-for="(items, category) in filteredItems.Components"
                :key="category"
                class="mb-4"
              >
                <p class="text-sm text-p m-3 font-medium">{{ category }}</p>
                <ul>
                  <li v-for="item in items" :key="item.path" class="mb-2">
                    <RouterLink
                      :to="item.path"
                      class="group/link flex items-center gap-3 py-2 px-3 rounded-lg transition-all duration-300 active-component-hover main-text text-sm"
                      @click="closeModal"
                    >
                      <div
                        class="w-1 h-1 rounded-full bg-gray-400 transition-all duration-300 group-hover/link:w-6 group-hover/link:h-px"
                      ></div>
                      <span class="font-medium">{{ item.name }}</span>

                      <div
                        class="ml-auto opacity-0 transition-all duration-300 group-hover/link:opacity-100 group-hover/link:translate-x-1"
                      >
                        <svg
                          class="w-4 h-4 main-text"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="1.5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                          />
                        </svg>
                      </div>
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
<style>
body.no-scroll {
  overflow: hidden;
}
</style>
