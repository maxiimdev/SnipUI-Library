<script lang="ts" setup>
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
  <ClientOnly>
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
  </ClientOnly>
</template>
