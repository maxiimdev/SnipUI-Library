export const checkboxCode = `<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  label?: string
}>()

const emits = defineEmits<{
  (e: 'update:checked', value: boolean): void
}>()

const isChecked = ref(false)
</script>

<template>
  <label class="flex items-center gap-2 cursor-pointer">
    <input
      type="checkbox"
      v-model="isChecked"
      @change="emits('update:checked', isChecked)"
      class="sr-only"
      :aria-label="props.label ?? 'Toggle checkbox'"
    />
    <div
      class="w-5 h-5 border-2 border-[#313131] rounded flex items-center justify-center transition-all duration-300"
      :class="{ 'bg-[#313131]': isChecked, 'bg-transparent': !isChecked }"
    >
      <svg
        class="w-4 h-4 text-[#fff]"
        :class="{ 'opacity-100': isChecked, 'opacity-0': !isChecked }"
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
    <span class="text-[#fff]">{{ props.label ?? 'Agree' }}</span>
  </label>
</template>`

export const radioCode = `<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  options?: { value: string; label: string }[]
}>()

const emits = defineEmits<{
  (e: 'update:selected', value: string): void
}>()

const selectedOption = ref(props.options?.[0]?.value ?? 'option1')
</script>

<template>
  <div class="flex flex-col gap-2">
    <label
      v-for="option in (props.options ?? [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' }
      ])"
      :key="option.value"
      class="flex items-center gap-2 cursor-pointer"
    >
      <input
        type="radio"
        v-model="selectedOption"
        :value="option.value"
        @change="emits('update:selected', selectedOption)"
        class="sr-only"
        :aria-label="\`Select \${option.label}\`"
      />
      <div
        class="w-5 h-5 border-2 border-[#313131] rounded-full flex items-center justify-center transition-all duration-300"
        :class="{
          'bg-[#313131]': selectedOption === option.value,
          'bg-transparent': selectedOption !== option.value,
        }"
      >
        <div
          class="w-2.5 h-2.5 bg-[#fff] rounded-full"
          :class="{
            'opacity-100': selectedOption === option.value,
            'opacity-0': selectedOption !== option.value,
          }"
        ></div>
      </div>
      <span class="text-[#fff]">{{ option.label }}</span>
    </label>
  </div>
</template>`

export const switchCode = `<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  activeLabel?: string
  disabledLabel?: string
}>()

const emits = defineEmits<{
  (e: 'update:switched', value: boolean): void
}>()

const isSwitched = ref(false)
</script>

<template>
  <label class="flex items-center gap-2 cursor-pointer">
    <input
      type="checkbox"
      v-model="isSwitched"
      @change="emits('update:switched', isSwitched)"
      class="sr-only"
      aria-label="Toggle switch"
    />
    <div
      class="w-10 h-5 bg-[#797979] rounded-full relative transition-all duration-300"
      :class="{ 'bg-green-500': isSwitched }"
    >
      <div
        class="w-4 h-4 bg-[#fff] rounded-full absolute top-0.5 transition-all duration-300"
        :class="{ 'left-0.5': !isSwitched, 'left-5': isSwitched }"
      ></div>
    </div>
    <span class="text-[#fff]">{{ isSwitched ? (props.activeLabel ?? 'Active') : (props.disabledLabel ?? 'Disabled') }}</span>
  </label>
</template>`

export const selectCode = `<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  options?: string[]
  defaultOption?: string
}>()

const emits = defineEmits<{
  (e: 'update:selected', value: string): void
}>()

const isOpen = ref(false)
const selectedOption = ref(props.defaultOption ?? props.options?.[0] ?? 'Option 1')

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectOption = (option: string) => {
  selectedOption.value = option
  isOpen.value = false
  emits('update:selected', option)
}
</script>

<template>
  <div class="relative">
    <button
      class="w-48 px-4 py-2 bg-[#232323] border-2 border-[#313131] rounded flex items-center justify-between text-[#fff] hover:bg-[#313131]"
      @click="toggleDropdown"
      aria-label="Toggle select dropdown"
    >
      <span>{{ selectedOption }}</span>
      <svg
        class="w-5 h-5 text-[#fff] transition-transform duration-300"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
    <div
      v-if="isOpen"
      class="absolute w-48 mt-1 bg-[#232323] border-2 border-[#313131] rounded shadow-lg z-10 transition-all duration-300"
    >
      <ul>
        <li
          v-for="option in (props.options ?? ['Option 1', 'Option 2', 'Option 3'])"
          :key="option"
          class="px-4 py-2 text-[#fff] cursor-pointer border-b border-[#313131] last:border-0 hover:bg-[#313131]"
          @click="selectOption(option)"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>`

export const groupCheckboxCode = `<script lang="ts" setup>
import { ref, computed, watch } from 'vue'

const props = defineProps<{
  items?: { id: number; name: string; checked: boolean }[]
  parentLabel?: string
}>()

const emits = defineEmits<{
  (e: 'update:items', items: { id: number; name: string; checked: boolean }[]): void
  (e: 'update:parentChecked', value: boolean): void
}>()

const defaultItems = [
  { id: 1, name: 'Element 1', checked: false },
  { id: 2, name: 'Element 2', checked: false },
  { id: 3, name: 'Element 3', checked: false },
]

const items = ref(props.items ?? defaultItems)
const parentChecked = ref(false)
const parentCheckbox = ref<HTMLInputElement | null>(null)

const isIndeterminate = computed(() => {
  const checkedCount = items.value.filter(item => item.checked).length
  return checkedCount > 0 && checkedCount < items.value.length
})

watch(isIndeterminate, (newVal) => {
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
  emits('update:items', items.value)
}

const updateParent = () => {
  const checkedCount = items.value.filter(item => item.checked).length
  parentChecked.value = checkedCount === items.value.length
  emits('update:parentChecked', parentChecked.value)
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
        :aria-label="props.parentLabel ?? 'Toggle all items'"
      />
      <div
        class="w-5 h-5 border-2 border-[#313131] rounded flex items-center justify-center transition-all duration-300"
        :class="{
          'bg-[#313131]': parentChecked || isIndeterminate,
          'bg-transparent': !parentChecked && !isIndeterminate,
        }"
      >
        <svg
          v-if="parentChecked"
          class="w-4 h-4 text-[#fff]"
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
          class="w-4 h-4 text-[#fff]"
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
      <span class="text-[#fff]">{{ props.parentLabel ?? 'Select All' }}</span>
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
          :aria-label="\`Toggle item \${item.name}\`"
        />
        <div
          class="w-5 h-5 border-2 border-[#313131] rounded flex items-center justify-center transition-all duration-300"
          :class="{
            'bg-[#313131]': item.checked,
            'bg-transparent': !item.checked,
          }"
        >
          <svg
            v-if="item.checked"
            class="w-4 h-4 text-[#fff]"
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
        <span class="text-[#fff]">{{ item.name }}</span>
      </label>
    </div>
  </div>
</template>`

export const iconRadioCode = `<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  options?: { value: string; label: string }[]
}>()

const emits = defineEmits<{
  (e: 'update:selected', value: string): void
}>()

const defaultOptions = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'system', label: 'System' },
]

const selectedOption = ref(props.options?.[0]?.value ?? 'light')
</script>

<template>
  <div class="flex gap-4">
    <label
      v-for="option in (props.options ?? defaultOptions)"
      :key="option.value"
      class="cursor-pointer"
    >
      <input
        type="radio"
        v-model="selectedOption"
        :value="option.value"
        @change="emits('update:selected', selectedOption)"
        class="sr-only"
        :aria-label="\`Select \${option.label} theme\`"
      />
      <div
        class="w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all duration-300"
        :class="{
          'border-[#313131] bg-[#313131]': selectedOption === option.value,
          'border-[#313131] bg-[#232323]': selectedOption !== option.value,
        }"
      >
        <svg
          class="w-6 h-6 text-[#fff]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            v-if="option.value === 'light'"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
          <path
            v-if="option.value === 'dark'"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
          />
          <path
            v-if="option.value === 'system'"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm4 12h8"
          />
        </svg>
      </div>
    </label>
  </div>
</template>`