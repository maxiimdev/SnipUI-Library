<script lang="ts" setup>
import { ref, onUnmounted } from 'vue'

const showAnnotation = ref(false)
let autoCloseTimer: NodeJS.Timeout | null = null

const toggleAnnotation = () => {
  showAnnotation.value = !showAnnotation.value
  if (showAnnotation.value) {
    clearTimeout(autoCloseTimer!)
  }
}

const startAutoClose = () => {
  if (showAnnotation.value) {
    autoCloseTimer = setTimeout(() => {
      showAnnotation.value = false
    }, 2500)
  }
}

onUnmounted(() => {
  if (autoCloseTimer) {
    clearTimeout(autoCloseTimer)
  }
})
</script>

<template>
  <ClientOnly>
  <div
    class="relative max-w-2xl mx-auto my-6 p-4 active-component rounded-lg shadow-sm border main-border hover:shadow-md transition-all duration-300"
  >
    <span class="text-lg main-text">Annotated Text</span>
    <p class="text-p text-base">
      The
      <span
        class="relative underline main-text cursor-pointer"
        @click="toggleAnnotation"
      >
        paradigm
        <span
          v-if="showAnnotation"
          class="absolute left-0 mt-6 min-w-[20rem] main-bg main-text text-sm p-2 rounded shadow-lg z-10 animate-fade-in"
          @animationend="startAutoClose"
        >
          Paradigm: A typical example or pattern of something.
          <button
            class="absolute top-1 right-1 main-text focus:outline-none"
            @click.stop="showAnnotation = false"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
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
        </span>
      </span>
      shift in technology is remarkable. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Excepturi ipsam ullam dolor dolores porro saepe eum
      laborum tenetur mollitia, blanditiis earum ad. Obcaecati nihil delectus
      nesciunt. Amet a officiis aliquam?
    </p>
  </div>
  </ClientOnly>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fade-out {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-5px);
  }
}
.animate-fade-in {
  animation: fade-in 0.3s ease-in forwards;
}
.animate-fade-out {
  animation: fade-out 0.3s ease-out forwards;
}
</style>
```
