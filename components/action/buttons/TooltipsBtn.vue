<script setup>
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
        class="absolute -top-8 left-1/2 transform -translate-x-1/2 py-1 px-2 active-component main-text text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
      >
        {{ isLiked ? 'Unlike' : 'Like' }}
        <div
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-b-0 border-t-4 border-l-transparent border-r-transparent border-t-gray-500"
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
        class="absolute -top-8 left-1/2 transform -translate-x-1/2 py-1 px-2 active-component main-text text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
      >
        {{ isReposted ? 'Undo repost' : 'Repost' }}
        <div
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-b-0 border-t-4 border-l-transparent border-r-transparent border-t-gray-500"
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
        class="absolute -top-8 left-1/2 transform -translate-x-1/2 py-1 px-2 active-component main-text text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
      >
        {{ isAdded ? 'Remove' : 'Add' }}
        <div
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-b-0 border-t-4 border-l-transparent border-r-transparent border-t-gray-500"
        ></div>
      </div>
    </div>
  </div>
</template>
