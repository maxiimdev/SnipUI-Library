<script lang="ts" setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { sidebarConfig } from '~/plugins/sidebar.client'

const emit = defineEmits<{
  (e: 'close'): void
}>()

// Плоский список всех элементов
const menuItems = computed(() => {
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

  menuItems.value.forEach(item => {
    const section = item.section as 'Documentation' | 'Components'
    if (!groups[section][item.category]) {
      groups[section][item.category] = []
    }
    groups[section][item.category].push(item)
  })

  return groups
})

// Закрытие меню по клавише Esc
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    emit('close')
  }
}

onMounted(() => {
  document.body.classList.add('no-scroll')
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.body.classList.remove('no-scroll')
  window.removeEventListener('keydown', handleKeydown)
})

const closeMenu = () => {
  emit('close')
}
</script>

<template>
  <Teleport to="body">
    <!-- Overlay -->
    <div
      class="fixed inset-0 bg-black/40 z-200 lg:hidden transition-opacity duration-300"
      @click="closeMenu"
    ></div>

    <!-- Sidebar Menu -->
    <div
      class="fixed overflow-y-scroll top-0 left-0 h-full w-80 max-w-[85vw] main-bg z-201 lg:hidden transform translate-x-0 transition-transform duration-300 ease-in-out shadow-2xl mobile-menu-enter"
    >
      <!-- Header -->
      <div class="flex items-center justify-between p-6 border-b main-border">
        <div class="flex items-center gap-3">
          <Icon name="arcticons:nequi-colombia" size="32" class="main-text" />
          <h2 class="main-text text-xl font-medium">Menu</h2>
        </div>
        <button
          @click="closeMenu"
          class="p-2 rounded-lg active-component-hover transition-all duration-200"
        >
          <svg
            class="w-5 h-5 main-text"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Main Navigation Links -->
      <div class="p-6 border-b main-border">
        <nav class="space-y-2">
          <RouterLink
            to="/"
            class="flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-200 active-component-hover main-text font-medium"
            @click="closeMenu"
          >
            <Icon name="material-symbols:home-outline" size="20" />
            Home
          </RouterLink>
          <RouterLink
            to="/docs"
            class="flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-200 active-component-hover main-text font-medium"
            @click="closeMenu"
          >
            <Icon name="material-symbols:description-outline" size="20" />
            Documentation
          </RouterLink>
          <RouterLink
            to="/components"
            class="flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-200 active-component-hover main-text font-medium"
            @click="closeMenu"
          >
            <Icon name="material-symbols:widgets-outline" size="20" />
            Components
          </RouterLink>
        </nav>
      </div>

      <!-- Detailed Menu Content -->
      <div class="flex-1 overflow-y-auto p-6">
        <!-- Documentation Section -->
        <div v-if="Object.keys(groupedItems.Documentation).length" class="mb-8">
          <div class="flex items-center gap-4 mb-4">
            <div
              class="w-8 h-px component-bg transition-all duration-500"
            ></div>
            <p class="main-text text-lg font-medium">Documentation</p>
          </div>
          <div
            v-for="(items, category) in groupedItems.Documentation"
            :key="category"
            class="mb-6"
          >
            <p class="text-sm text-p mb-3 font-medium px-3">{{ category }}</p>
            <ul class="space-y-1">
              <li v-for="item in items" :key="item.path">
                <RouterLink
                  :to="item.path"
                  class="group/link flex items-center gap-3 py-2 px-3 rounded-lg transition-all duration-300 active-component-hover main-text text-sm"
                  @click="closeMenu"
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
            Object.keys(groupedItems.Documentation).length &&
            Object.keys(groupedItems.Components).length
          "
          class="h-px active-component my-6 w-[90%] mx-auto"
        ></div>

        <!-- Components Section -->
        <div v-if="Object.keys(groupedItems.Components).length" class="mb-8">
          <div class="flex items-center gap-4 mb-4">
            <div
              class="w-8 h-px component-bg transition-all duration-500"
            ></div>
            <p class="main-text text-lg font-medium">Components</p>
          </div>
          <div
            v-for="(items, category) in groupedItems.Components"
            :key="category"
            class="mb-6"
          >
            <p class="text-sm text-p mb-3 font-medium px-3">{{ category }}</p>
            <ul class="space-y-1">
              <li v-for="item in items" :key="item.path">
                <RouterLink
                  :to="item.path"
                  class="group/link flex items-center gap-3 py-2 px-3 rounded-lg transition-all duration-300 active-component-hover main-text text-sm"
                  @click="closeMenu"
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
  </Teleport>
</template>

<style>
body.no-scroll {
  overflow: hidden;
}

.mobile-menu-enter {
  animation: slideInLeft 0.3s ease-out;
}

@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
