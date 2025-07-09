export const loaderBtnCode = `<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  buttonText?: string
  loadingText?: string
  loadingDuration?: number
}>()

const isLoading = ref(false)

const triggerLoader = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, props.loadingDuration ?? 2000)
}
</script>

<template>
  <button
    class="px-4 py-2 bg-[#313131] text-[#fff] rounded flex justify-center items-center gap-2 transition-colors duration-200 w-30"
    :class="{ 'opacity-50 pointer-events-none': isLoading }"
    @click="triggerLoader"
  >
    <svg
      v-if="isLoading"
      class="w-5 h-5 animate-spin"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="#fff"
        stroke-width="4"
      />
      <path class="opacity-75" fill="#fff" d="M4 12a8 8 0 018-8v8z" />
    </svg>
    {{ isLoading ? (props.loadingText ?? 'Loading...') : (props.buttonText ?? 'Click') }}
  </button>
</template>`

export const asyncBtnCode = `<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  buttonText?: string
  loadingText?: string
  successText?: string
  errorText?: string
}>()

const emits = defineEmits<{
  (e: 'async-complete', status: 'success' | 'error'): void
}>()

const isLoading = ref(false)
const asyncStatus = ref<'success' | 'error' | null>(null)

const triggerAsync = async () => {
  asyncStatus.value = null
  isLoading.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  isLoading.value = false
  asyncStatus.value = Math.random() > 0.5 ? 'success' : 'error'
  emits('async-complete', asyncStatus.value)
  setTimeout(() => {
    asyncStatus.value = null
  }, 3000)
}
</script>

<template>
  <button
    class="px-4 py-2 bg-[#313131] text-[#fff] rounded flex items-center gap-2 transition-colors duration-200"
    :class="{
      'bg-[#189157]': asyncStatus === 'success',
      'bg-[#f30035]': asyncStatus === 'error',
      'opacity-50 pointer-events-none': isLoading,
    }"
    @click="triggerAsync"
  >
    <svg
      v-if="asyncStatus"
      class="w-5 h-5"
      fill="none"
      stroke="#fff"
      viewBox="0 0 24 24"
    >
      <path
        v-if="asyncStatus === 'success'"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 13l4 4L19 7"
      />
      <path
        v-if="asyncStatus === 'error'"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
    {{
      isLoading
        ? (props.loadingText ?? 'Loading...')
        : asyncStatus
          ? asyncStatus === 'success'
            ? (props.successText ?? 'Success')
            : (props.errorText ?? 'Error')
          : (props.buttonText ?? 'Click')
    }}
  </button>
</template>`

export const dropdownBtnCode = `<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  buttonText?: string
  options?: string[]
}>()

const emits = defineEmits<{
  (e: 'select-option', option: string): void
}>()

const isOpen = ref(false)
const text = ref(props.buttonText ?? 'Menu')

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectOption = (option: string) => {
  isOpen.value = false
  emits('select-option', option)
}
</script>

<template>
  <div class="relative inline-block">
    <button
      class="px-4 py-2 bg-[#313131] text-[#fff] rounded transition-colors duration-200"
      @click="toggleDropdown"
    >
      {{ text }}
    </button>
    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 w-48 border border-[#313131] rounded-md shadow-lg z-10 bg-[#232323]"
    >
      <ul>
        <li
          v-for="(option, index) in (props.options ?? ['Option 1', 'Option 2', 'Option 3'])"
          :key="index"
          class="px-4 py-2 text-[#fff] hover:bg-[#313131] cursor-pointer border-b border-[#313131] last:border-0"
          @click="selectOption(option)"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>`

export const iconBtnCode = `<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  likeLabel?: string
  addLabel?: string
  hideLabel?: string
}>()

const emits = defineEmits<{
  (e: 'toggle-like', value: boolean): void
  (e: 'toggle-add', value: boolean): void
  (e: 'toggle-hide', value: boolean): void
}>()

const isLiked = ref(false)
const isAdded = ref(false)
const isHidden = ref(false)

const toggleLike = () => {
  isLiked.value = !isLiked.value
  emits('toggle-like', isLiked.value)
}

const toggleAdd = () => {
  isAdded.value = !isAdded.value
  emits('toggle-add', isAdded.value)
}

const toggleHide = () => {
  isHidden.value = !isHidden.value
  emits('toggle-hide', isHidden.value)
}
</script>

<template>
  <div class="flex items-center gap-3">
    <!-- Like Button -->
    <button
      class="p-2 rounded-full transition-colors duration-200"
      @click="toggleLike"
      :aria-label="props.likeLabel ?? 'Like'"
    >
      <svg
        class="w-5 h-5"
        :class="{
          'text-[#f30035] fill-current': isLiked,
          'text-[#797979] fill-none stroke-current stroke-2': !isLiked,
        }"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        />
      </svg>
    </button>

    <!-- Add/Remove Button -->
    <button
      class="p-2 rounded-full transition-colors duration-200"
      @click="toggleAdd"
      :aria-label="props.addLabel ?? 'Add'"
    >
      <svg
        class="w-5 h-5"
        :class="{ 'text-[#189157]': isAdded, 'text-[#797979]': !isAdded }"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path v-if="isAdded" d="M19 13H5v-2h14v2z" />
        <path v-else d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      </svg>
    </button>

    <!-- Hide Button -->
    <button
      class="p-2 rounded-full transition-colors duration-200"
      @click="toggleHide"
      :aria-label="props.hideLabel ?? 'Hide'"
    >
      <svg
        class="w-5 h-5"
        :class="{ 'text-[#8181f9]': isHidden, 'text-[#797979]': !isHidden }"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          v-if="isHidden"
          d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
        />
        <path
          v-else
          d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
        />
      </svg>
    </button>
  </div>
</template>`

export const toggleBtnCode = `<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  activeText?: string
  disabledText?: string
}>()

const emits = defineEmits<{
  (e: 'toggle', value: boolean): void
}>()

const isToggled = ref(false)

const toggle = () => {
  isToggled.value = !isToggled.value
  emits('toggle', isToggled.value)
}
</script>

<template>
  <button
    class="px-4 py-2 rounded transition-colors duration-200 flex justify-between items-center gap-4"
    :class="
      isToggled
        ? 'bg-[#189157] text-[#fff]'
        : 'bg-[#313131] text-[#fff]'
    "
    @click="toggle"
  >
    {{ isToggled ? (props.activeText ?? 'Active') : (props.disabledText ?? 'Disabled') }}
    <svg
      v-if="isToggled"
      class="w-5 h-5"
      fill="none"
      stroke="#fff"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 13l4 4L19 7"
      />
    </svg>
    <svg
      v-else
      class="w-5 h-5"
      fill="none"
      stroke="#fff"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
</template>`

export const tooltipsBtnCode = `<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  likeTooltip?: string
  repostTooltip?: string
  addTooltip?: string
}>()

const emits = defineEmits<{
  (e: 'toggle-like', value: boolean): void
  (e: 'toggle-repost', value: boolean): void
  (e: 'toggle-add', value: boolean): void
}>()

const isLiked = ref(false)
const isReposted = ref(false)
const isAdded = ref(false)

const toggleLike = () => {
  isLiked.value = !isLiked.value
  emits('toggle-like', isLiked.value)
}

const toggleRepost = () => {
  isReposted.value = !isReposted.value
  emits('toggle-repost', isReposted.value)
}

const toggleAdd = () => {
  isAdded.value = !isAdded.value
  emits('toggle-add', isAdded.value)
}
</script>

<template>
  <div class="flex items-center gap-3">
    <!-- Like Button -->
    <div class="relative group">
      <button
        class="p-2 rounded-full transition-colors duration-200"
        @click="toggleLike"
        :aria-label="props.likeTooltip ?? 'Like'"
      >
        <svg
          class="w-5 h-5"
          :class="{
            'text-[#f30035] fill-current': isLiked,
            'text-[#797979] fill-none stroke-current stroke-2': !isLiked,
          }"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
      </button>
      <div
        class="absolute -top-8 left-1/2 transform -translate-x-1/2 py-1 px-2 bg-[#232323] text-[#fff] text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
      >
        {{ isLiked ? (props.likeTooltip ?? 'Unlike') : (props.likeTooltip ?? 'Like') }}
        <div
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-b-0 border-t-4 border-l-transparent border-r-transparent border-t-[#232323]"
        ></div>
      </div>
    </div>

    <!-- Repost Button -->
    <div class="relative group">
      <button
        class="p-2 rounded-full transition-colors duration-200"
        @click="toggleRepost"
        :aria-label="props.repostTooltip ?? 'Repost'"
      >
        <svg
          class="w-5 h-5"
          :class="{
            'text-[#189157]': isReposted,
            'text-[#797979]': !isReposted,
          }"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"
          />
        </svg>
      </button>
      <div
        class="absolute -top-8 left-1/2 transform -translate-x-1/2 py-1 px-2 bg-[#232323] text-[#fff] text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
      >
        {{ isReposted ? (props.repostTooltip ?? 'Undo repost') : (props.repostTooltip ?? 'Repost') }}
        <div
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-b-0 border-t-4 border-l-transparent border-r-transparent border-t-[#232323]"
        ></div>
      </div>
    </div>

    <!-- Add Button -->
    <div class="relative group">
      <button
        class="p-2 rounded-full transition-colors duration-200"
        @click="toggleAdd"
        :aria-label="props.addTooltip ?? 'Add'"
      >
        <svg
          class="w-5 h-5"
          :class="{
            'text-[#8181f9]': isAdded,
            'text-[#797979]': !isAdded,
          }"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path v-if="isAdded" d="M19 13H5v-2h14v2z" />
          <path v-else d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      </button>
      <div
        class="absolute -top-8 left-1/2 transform -translate-x-1/2 py-1 px-2 bg-[#232323] text-[#fff] text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
      >
        {{ isAdded ? (props.addTooltip ?? 'Remove') : (props.addTooltip ?? 'Add') }}
        <div
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-b-0 border-t-4 border-l-transparent border-r-transparent border-t-[#232323]"
        ></div>
      </div>
    </div>
  </div>
</template>`

export const burgerBtnCode = `<script lang="ts" setup>
import { ref } from 'vue'

const emits = defineEmits<{
  (e: 'toggle-menu', value: boolean): void
}>()

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  emits('toggle-menu', isOpen.value)
}
</script>

<template>
  <button
    class="w-10 h-10 flex items-center justify-center"
    @click="toggleMenu"
    aria-label="Toggle menu"
  >
    <svg
      class="w-10 h-10 text-[#fff] absolute transition-all duration-200"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      :class="{ 'opacity-0': isOpen, 'opacity-100': !isOpen }"
    >
      <path
        d="M4 6h16M4 12h16M4 18h16"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
    <svg
      class="w-10 h-10 text-[#fff] absolute transition-all duration-200"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      :class="{ 'opacity-100': isOpen, 'opacity-0': !isOpen }"
    >
      <path d="M6 18L18 6M6 6l12 12" stroke-width="2" stroke-linecap="round" />
    </svg>
  </button>
</template>`

export const themeToggleCode = `<script lang="ts" setup>
import { ref } from 'vue'

const emits = defineEmits<{
  (e: 'toggle-theme', value: boolean): void
}>()

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  emits('toggle-theme', isDark.value)
}
</script>

<template>
  <button
    class="w-10 h-10 flex items-center justify-center"
    @click="toggleTheme"
    aria-label="Toggle theme"
  >
    <svg
      class="w-10 h-10 text-[#fff] absolute transition-all duration-200"
      :class="{ 'opacity-0': isDark, 'opacity-100': !isDark }"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
    <svg
      class="w-10 h-10 text-[#fff] absolute transition-all duration-300"
      :class="{ 'opacity-100': isDark, 'opacity-0': !isDark }"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
      />
    </svg>
  </button>
</template>`