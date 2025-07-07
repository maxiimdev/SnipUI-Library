<script lang="ts" setup>
import { ref } from 'vue'

const isExpanded = ref(false)
</script>

<template>
  <div
    class="relative max-w-2xl mx-auto my-6 p-4 active-component rounded-lg shadow-sm border main-border hover:shadow-md transition-all duration-300 ease-in-out"
  >
    <span class="text-lg main-text">Inspiration</span>
    <div class="relative w-28 h-1 bg-[#191919] mt-1 mb-3 rounded-full"></div>
    <div
      class="transition-all duration-300 ease-in-out"
      :class="{ 'max-h-12 line-clamp-2': !isExpanded, 'max-h-96': isExpanded }"
    >
      <p
        class="text-p text-base cursor-pointer"
        @click="isExpanded = !isExpanded"
      >
        Success is not the absence of obstacles, but the courage to push through
        them. It's about finding the strength to keep moving forward, even when
        the path seems daunting. Every challenge is an opportunity to grow and
        learn.
      </p>
    </div>
  </div>
</template>
