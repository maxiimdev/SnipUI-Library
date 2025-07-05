<!-- components/Sidebar.vue -->
<script lang="ts" setup>
import type { Item } from '~/types'

const props = defineProps<{
  items: Item[]
  text: string
}>()

const route = useRoute()

// Храним состояние открытости для каждого элемента по индексу
const openStates = ref<Record<number, boolean>>({})

// Автоматически открываем секцию, если активная ссылка находится в ней
const initializeOpenStates = () => {
  props.items.forEach((item, index) => {
    if (item.items?.some(subItem => subItem.path === route.path)) {
      openStates.value[index] = true
    }
  })
}

// Инициализируем состояние при монтировании и при изменении маршрута
onMounted(() => {
  initializeOpenStates()
})

watch(
  () => route.path,
  () => {
    initializeOpenStates()
  }
)

const toggleDropdown = (index: number) => {
  openStates.value[index] = !openStates.value[index]
}

// Проверяем, активна ли ссылка
const isActiveLink = (path: string) => {
  return route.path === path
}
</script>

<template>
  <aside
    class="flex sticky top-0 z-100 flex-col gap-3 px-8 pt-5 pb-5 h-screen overflow-y-auto text-[14px] main-bg"
  >
    <p class="text-p border main-border rounded-xl p-3 text-center mb-2">
      {{ props.text }}
    </p>

    <div class="flex flex-col gap-5">
      <div
        v-for="(item, index) in props.items"
        :key="index"
        class="main-div p-3 rounded-xl text-p cursor-pointer transition-transform duration-200 select-none"
        @click="toggleDropdown(index)"
      >
        <span class="flex items-center justify-between">
          {{ item.text }}
          <!-- Иконка для указания наличия подменю -->
          <Icon
            v-if="item.items?.length"
            :name="openStates[index] ? 'mdi:chevron-up' : 'mdi:chevron-down'"
            size="16"
            class="ml-2"
          />
        </span>

        <!-- Выпадающее меню -->
        
          <ul v-if="item.items?.length && openStates[index]" class="mt-2">
            <RouterLink
              :to="subItem.path"
              v-for="(subItem, subIndex) in item.items"
              :key="subIndex"
              class="px-4 py-3 my-1 text-p rounded flex"
              :class="{
                'active-component': isActiveLink(subItem.path),
                'active-component-hover': !isActiveLink(subItem.path),
              }"
              @click.stop
            >
              {{ subItem.name }}
            </RouterLink>
          </ul>
       
      </div>
    </div>
  </aside>
</template>

<style scoped>
/* Плавная анимация для выпадающего меню */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.1s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Плавное смещение элементов */
.main-div {
  transition: margin-bottom 0.3s ease;
}
</style>