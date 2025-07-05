export const checkboxCode = `<script lang="ts" setup>
import { ref } from 'vue'

const isChecked = ref(false)
</script>

<template>
  <label class="flex items-center gap-2 cursor-pointer">
    <input
      type="checkbox"
      v-model="isChecked"
      class="sr-only"
      aria-label="Toggle checkbox"
    />
    <div
      class="w-5 h-5 border-2 border-indigo-600 rounded flex items-center justify-center transition-all duration-300"
      :class="{ 'bg-indigo-600': isChecked, 'bg-transparent': !isChecked }"
    >
      <svg
        class="w-4 h-4 text-white"
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
    <span class="mani-text">Agree</span>
  </label>
</template>
`

export const radioCode = `<script lang="ts" setup>
import { ref } from 'vue'

const selectedOption = ref('option1')
</script>

<template>
  <div class="flex flex-col gap-2">
    <label class="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        v-model="selectedOption"
        value="option1"
        class="sr-only"
        aria-label="Select option 1"
      />
      <div
        class="w-5 h-5 border-2 border-indigo-600 rounded-full flex items-center justify-center transition-all duration-300"
        :class="{
          'bg-indigo-600': selectedOption === 'option1',
          'bg-transparent': selectedOption !== 'option1',
        }"
      >
        <div
          class="w-2.5 h-2.5 bg-white rounded-full"
          :class="{
            'opacity-100': selectedOption === 'option1',
            'opacity-0': selectedOption !== 'option1',
          }"
        ></div>
      </div>
      <span class="main-text">Option 1</span>
    </label>
    <label class="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        v-model="selectedOption"
        value="option2"
        class="sr-only"
        aria-label="Select option 2"
      />
      <div
        class="w-5 h-5 border-2 border-indigo-600 rounded-full flex items-center justify-center transition-all duration-300"
        :class="{
          'bg-indigo-600': selectedOption === 'option2',
          'bg-transparent': selectedOption !== 'option2',
        }"
      >
        <div
          class="w-2.5 h-2.5 bg-white rounded-full"
          :class="{
            'opacity-100': selectedOption === 'option2',
            'opacity-0': selectedOption !== 'option2',
          }"
        ></div>
      </div>
      <span class="main-text">Option 2</span>
    </label>
  </div>
</template>
`
export const switchCode = `<script lang="ts" setup>
import { ref } from 'vue'

const isOpen = ref(false)
const selectedOption = ref('Опция 1')
const isSwitched = ref(false)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectOption = (option: string) => {
  selectedOption.value = option
  isOpen.value = false
}
</script>

<template>
  <label class="flex items-center gap-2 cursor-pointer">
    <input
      type="checkbox"
      v-model="isSwitched"
      class="sr-only"
      aria-label="Toggle switch"
    />
    <div
      class="w-10 h-5 bg-gray-300 rounded-full relative transition-all duration-300"
      :class="{ 'bg-indigo-600': isSwitched }"
    >
      <div
        class="w-4 h-4 bg-white rounded-full absolute top-0.5 transition-all duration-300"
        :class="{ 'left-0.5': !isSwitched, 'left-5': isSwitched }"
      ></div>
    </div>
    <span class="text-gray-700">{{ isSwitched ? 'Active' : 'Disabled' }}</span>
  </label>
</template>
`

export const selectCode = `<script lang="ts" setup>
import { ref } from 'vue'

const isOpen = ref(false)
const selectedOption = ref('Option 1')
const options = ['Option 1', 'Option 2', 'Option 3']

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectOption = (option: string) => {
  selectedOption.value = option
  isOpen.value = false
}
</script>

<template>
  <div class="relative">
    <button
      class="w-48 px-4 py-2 main-div border-2 main-border rounded flex items-center justify-between main-text"
      @click="toggleDropdown"
      aria-label="Toggle select dropdown"
    >
      <span>{{ selectedOption }}</span>
      <svg
        class="w-5 h-5 main-border transition-transform duration-300"
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
      class="absolute w-48 mt-1 main-div border-2 main-border rounded shadow-lg z-10 transition-all duration-300"
      :class="{
        'opacity-100 scale-y-100': isOpen,
        'opacity-0 scale-y-0': !isOpen,
      }"
    >
      <ul>
        <li
          v-for="option in options"
          :key="option"
          class="px-4 py-2 main-text cursor-pointer border-b-1 main-border last-of-type:border-0 active-component-hover"
          @click="selectOption(option)"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>
`