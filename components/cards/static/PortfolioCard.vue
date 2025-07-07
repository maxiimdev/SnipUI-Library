<script lang="ts" setup>
// No script needed for fully static card
</script>

<template>
  <ClientOnly>
    <div class="relative w-[40rem] h-[31rem] flex justify-center items-center">
      <div class="main-div rounded-lg shadow-xl w-full max-w-sm">
        <div class="relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400"
            alt="Portfolio Project"
            class="w-full h-48 object-cover rounded-t-lg"
          />
        </div>
        <div class="p-4">
          <h3 class="text-lg font-semibold main-text mb-2">Portfolio Project</h3>
          <p class="text-p mb-4 text-sm">A modern web application with sleek design and robust functionality.</p>
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-1">
              <span class="text-yellow-400">★★★★★</span>
              <span class="text-sm text-p">4.9</span>
            </div>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tag in ['Vue', 'TypeScript', 'UI/UX']"
                :key="tag"
                class="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs main-text"
              >
                {{ tag }}
              </span>
            </div>
          </div>
          <button 
            class="w-full px-3 py-1 main-text active-component rounded-md text-sm main-text active-component"
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