<script lang="ts" setup>
import { ref } from 'vue'

const isToggled = ref(false)

const toggle = () => {
  isToggled.value = !isToggled.value
}
</script>

<template>
  <ClientOnly>
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
  </ClientOnly>
</template>
