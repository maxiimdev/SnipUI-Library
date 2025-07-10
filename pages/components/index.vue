<script lang="ts" setup>
definePageMeta({
  layout: 'sidebar',
})
</script>

<template>
  <div class="w-3/4 lg:pl-20 2xl:pl-0">
    <h1 class="main-text text-4xl mb-4 font-light tracking-tight">
      Components
    </h1>
    <p class="text-p mb-12 text-lg leading-relaxed opacity-80">
      Here you can find all the components available in the library. We are
      working on adding more components.
    </p>

    <div class="space-y-12">
      <div
        v-for="(item, index) in useState('sidebar-items').value"
        :key="index"
        class="group"
        :id="index"
      >
        <!-- Заголовок секции -->
        <div class="mb-6">
          <div
            class="flex items-center gap-4 mb-4 active-component p-2 rounded-xl"
          >
            <div
              class="w-8 h-px bg-gray-300 transition-all duration-500 group-hover:bg-gray-500"
            ></div>
            <h2 class="main-text text-xl font-medium tracking-wide">
              {{ item.text }}
            </h2>
          </div>
        </div>

        <!-- Список компонентов -->
        <div class="space-y-3">
          <div
            v-for="(component, compIndex) in item.items"
            :key="compIndex"
            class="transition-all duration-300 ease-out"
          >
            <RouterLink
              :to="component.path"
              class="flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-300 active-component-hover group/link border border-transparent hover:border-gray-200"
            >
              <div
                class="w-1 h-1 rounded-full bg-gray-400 transition-all duration-300 group-hover/link:w-6 group-hover/link:h-px"
              ></div>
              <span class="main-text text-sm font-medium tracking-wide">{{
                component.name
              }}</span>
              <div
                class="ml-auto opacity-0 transition-all duration-300 group-hover/link:opacity-100 group-hover/link:translate-x-1"
              >
                <svg
                  class="w-4 h-4"
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
          </div>
        </div>

        <!-- Разделительная линия между группами (кроме последней) -->
        <div
          v-if="index < useState('sidebar-items').value.length - 1"
          class="mt-8 h-px bg-gray-200"
        ></div>
      </div>
    </div>
  </div>
</template>
