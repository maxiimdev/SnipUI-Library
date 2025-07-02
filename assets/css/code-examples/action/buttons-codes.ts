export const loaderBtnCode = `<script lang="ts" setup>
import { ref } from 'vue'

const isLoading = ref(false)

const triggerLoader = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
}
</script>

<template>
  <button
    class="px-4 py-2 active-component main-text rounded flex justify-center items-center gap-2 transition-colors duration-200 w-30"
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
        stroke="currentColor"
        stroke-width="4"
      />
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
    </svg>
    {{ isLoading ? 'Loader...' : 'Click' }}
  </button>
</template>
`

export const asyncBtnCode = `<script lang="ts" setup>
import { ref } from 'vue'

const isLoading = ref(false)
const asyncStatus = ref<'success' | 'error' | null>(null)

const triggerAsync = async () => {
  asyncStatus.value = null
  isLoading.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  isLoading.value = false
  asyncStatus.value = Math.random() > 0.5 ? 'success' : 'error'
  setTimeout(() => {
    asyncStatus.value = null
  }, 3000)
}
</script>

<template>
  <button
    class="px-4 py-2 active-component main-text rounded flex items-center gap-2 transition-colors duration-200"
    :class="{
      'bg-green-600 hover:bg-green-700': asyncStatus === 'success',
      'bg-red-600 hover:bg-red-700': asyncStatus === 'error',
      'opacity-50 pointer-events-none': isLoading,
    }"
    @click="triggerAsync"
  >
    <svg
      v-if="asyncStatus"
      class="w-5 h-5"
      fill="none"
      stroke="currentColor"
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
        ? 'Loader...'
        : asyncStatus
          ? asyncStatus === 'success'
            ? 'Success'
            : 'Error'
          : 'Click'
    }}
  </button>
</template>
`

export const dropdownBtnCode = `<script lang="ts" setup>
import { ref } from 'vue'

const isOpen = ref(false)
const text = ref('Menu')
const options = ['Option 1', 'Option 2', 'Option 3']

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectOption = (option: string) => {
  text.value = option
  isOpen.value = false
}
</script>

<template>
  <div class="relative">
    <button
      class="px-4 py-2 active-component main-text rounded transition-colors duration-200"
      @click="toggleDropdown"
    >
      {{ text }}
    </button>
    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10"
    >
      <ul class="py-1">
        <li
          v-for="(option, index) in options"
          :key="index"
          class="px-4 py-2 text-gray-700 hover:bg-indigo-100 cursor-pointer"
          @click="selectOption(option)"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>
`

export const iconBtnCode = `<script lang="ts" setup>
import { ref } from 'vue'

const isLiked = ref(false)
const isAdded = ref(false)
const isHidden = ref(false)

const toggleLike = () => {
  isLiked.value = !isLiked.value
}

const toggleAdd = () => {
  isAdded.value = !isAdded.value
}

const toggleHide = () => {
  isHidden.value = !isHidden.value
}
</script>

<template>
  <!-- Like button -->
  <button
    class="p-2 rounded-full transition-colors duration-200 mr-2"
    @click="toggleLike"
  >
    <svg
      class="w-5 h-5"
      :class="{
        'text-red-500 fill-current': isLiked,
        'text-gray-400 fill-none stroke-current stroke-2': !isLiked,
      }"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      />
    </svg>
  </button>

  <!-- Add/Remove button -->
  <button
    class="p-2 rounded-full transition-colors duration-200 mr-2"
    @click="toggleAdd"
  >
    <svg
      class="w-5 h-5"
      :class="{ 'text-green-500': isAdded, 'text-gray-600': !isAdded }"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path v-if="isAdded" d="M19 13H5v-2h14v2z" />
      <path v-else d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </svg>
  </button>

  <!-- Hide button -->
  <button
    class="p-2 rounded-full transition-colors duration-200"
    @click="toggleHide"
  >
    <svg
      class="w-5 h-5"
      :class="{ 'text-blue-500': isHidden, 'text-gray-600': !isHidden }"
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
</template>
`

export const toggleBtnCode = `<script lang="ts" setup>
import { ref } from 'vue'

const isToggled = ref(false)

const toggle = () => {
  isToggled.value = !isToggled.value
}
</script>

<template>
  <button
    class="px-4 py-2 rounded transition-colors duration-200 flex justify-between items-center gap-4"
    :class="
      isToggled
        ? 'bg-green-600 text-white'
        : 'active-component main-text cursor-not-allowed!'
    "
    @click="toggle"
  >
    {{ isToggled ? 'Active' : 'Disabled' }}
    <svg
      v-if="isToggled"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <path fill="currentColor" d="m0 11l2-2l5 5L18 3l2 2L7 18z" />
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M5 19h14V5H5v14Zm-2 2V3h18v18H3Zm5.4-4l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6L8.4 17ZM5 19V5v14Z"
      />
    </svg>
  </button>
</template>
`

export const tooltipsBtnCode = `<script setup>
import { ref } from 'vue'

const isLiked = ref(false)
const isReposted = ref(false)
const isAdded = ref(false)

const toggleLike = () => {
  isLiked.value = !isLiked.value
}

const toggleRepost = () => {
  isReposted.value = !isReposted.value
}

const toggleAdd = () => {
  isAdded.value = !isAdded.value
}
</script>

<template>
  <div class="flex items-center gap-3">
    <!-- Like Button -->
    <div class="relative group">
      <button
        @click="toggleLike"
        class="p-2 rounded-full transition-colors duration-200"
        aria-label="Like"
      >
        <svg
          class="w-5 h-5"
          :class="{
            'text-red-500 fill-current': isLiked,
            'text-gray-400 fill-none stroke-current stroke-2': !isLiked,
          }"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
      </button>
      <div
        class="absolute -top-8 left-1/2 transform -translate-x-1/2 py-1 px-2 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
      >
        {{ isLiked ? 'Unlike' : 'Like' }}
        <div
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-b-0 border-t-4 border-l-transparent border-r-transparent border-t-gray-800"
        ></div>
      </div>
    </div>

    <!-- Repost Button -->
    <div class="relative group">
      <button
        @click="toggleRepost"
        class="p-2 rounded-full transition-colors duration-200"
        aria-label="Repost"
      >
        <svg
          class="w-5 h-5"
          :class="{
            'text-green-500': isReposted,
            'text-gray-600': !isReposted,
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
        class="absolute -top-8 left-1/2 transform -translate-x-1/2 py-1 px-2 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
      >
        {{ isReposted ? 'Undo repost' : 'Repost' }}
        <div
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-b-0 border-t-4 border-l-transparent border-r-transparent border-t-gray-800"
        ></div>
      </div>
    </div>

    <!-- Add Button -->
    <div class="relative group">
      <button
        @click="toggleAdd"
        class="p-2 rounded-full transition-colors duration-200"
        aria-label="Add to collection"
      >
        <svg
          class="w-5 h-5"
          :class="{
            'text-blue-500': isAdded,
            'text-gray-600': !isAdded,
          }"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path v-if="isAdded" d="M19 13H5v-2h14v2z" />
          <path v-else d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      </button>
      <div
        class="absolute -top-8 left-1/2 transform -translate-x-1/2 py-1 px-2 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
      >
        {{ isAdded ? 'Remove' : 'Add' }}
        <div
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-b-0 border-t-4 border-l-transparent border-r-transparent border-t-gray-800"
        ></div>
      </div>
    </div>
  </div>
</template>
`
