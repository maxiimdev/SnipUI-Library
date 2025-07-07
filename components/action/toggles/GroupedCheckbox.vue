<script lang="ts" setup>
import { ref, computed, watch } from 'vue'

const items = ref([
  { id: 1, name: 'Element 1', checked: false },
  { id: 2, name: 'Element 2', checked: false },
  { id: 3, name: 'Element 3', checked: false },
])

const parentChecked = ref(false)
const parentCheckbox = ref<HTMLInputElement | null>(null)

const isIndeterminate = computed(() => {
  const checkedCount = items.value.filter(item => item.checked).length
  return checkedCount > 0 && checkedCount < items.value.length
})

watch(isIndeterminate, newVal => {
  if (parentCheckbox.value) {
    parentCheckbox.value.indeterminate = newVal
  }
})

watch(
  () => items.value.map(item => item.checked),
  () => {
    updateParent()
  },
  { deep: true }
)

const updateChildren = () => {
  items.value.forEach(item => (item.checked = parentChecked.value))
}

const updateParent = () => {
  const checkedCount = items.value.filter(item => item.checked).length
  parentChecked.value = checkedCount === items.value.length
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <label class="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        ref="parentCheckbox"
        v-model="parentChecked"
        @change="updateChildren"
        class="sr-only"
        aria-label="Toggle all items"
      />
      <div
        class="w-5 h-5 border-2 main-border rounded flex items-center justify-center transition-all duration-300"
        :class="{
          'active-component': parentChecked || isIndeterminate,
          'bg-transparent': !parentChecked && !isIndeterminate,
        }"
      >
        <svg
          v-if="parentChecked"
          class="w-4 h-4 main-text"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <svg
          v-if="isIndeterminate && !parentChecked"
          class="w-4 h-4 main-text"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 12h16"
          />
        </svg>
      </div>
      <span class="main-text">Selected All</span>
    </label>
    <div class="ml-6 flex flex-col gap-2">
      <label
        v-for="item in items"
        :key="item.id"
        class="flex items-center gap-2 cursor-pointer"
      >
        <input
          type="checkbox"
          v-model="item.checked"
          @change="updateParent"
          class="sr-only"
          :aria-label="`Toggle item ${item.name}`"
        />
        <div
          class="w-5 h-5 border-2 main-border rounded flex items-center justify-center transition-all duration-300"
          :class="{
            'active-component': item.checked,
            'bg-transparent': !item.checked,
          }"
        >
          <svg
            v-if="item.checked"
            class="w-4 h-4 main-text"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <span class="main-text">{{ item.name }}</span>
      </label>
    </div>
  </div>
</template>
