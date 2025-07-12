<script lang="ts" setup>
// No script needed for fully static card
</script>

<template>
  <ClientOnly>
    <div class="relative w-full max-w-[40rem] h-auto sm:h-[31rem] flex justify-center items-center px-2 sm:px-0">
      <div class="main-div rounded-lg shadow-xl w-full max-w-sm">
        <div class="relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400"
            alt="Portfolio Project"
            class="w-full h-32 sm:h-48 object-cover rounded-t-lg"
          />
        </div>
        <div class="p-3 sm:p-4">
          <h3 class="text-base sm:text-lg font-semibold main-text mb-1 sm:mb-2">Portfolio Project</h3>
          <p class="text-p mb-3 sm:mb-4 text-xs sm:text-sm">A modern web application with sleek design and robust functionality.</p>
          <div class="flex items-center justify-between mb-3 sm:mb-4">
            <div class="flex items-center gap-1 sm:gap-2">
              <span class="text-yellow-400 text-sm sm:text-base">★★★★★</span>
              <span class="text-xs sm:text-sm text-p">4.9</span>
            </div>
            <div class="flex flex-wrap gap-1 sm:gap-2">
              <span 
                v-for="tag in ['Vue', 'TypeScript', 'UI/UX']"
                :key="tag"
                class="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs sm:text-xs main-text"
              >
                {{ tag }}
              </span>
            </div>
          </div>
          <button 
            class="w-full px-2 sm:px-3 py-1 sm:py-1 main-text active-component rounded-md text-xs sm:text-sm main-text active-component"
          >
            View Project
          </button>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped>
/* Isolate styles for CodeCard preview */
.absolute {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>