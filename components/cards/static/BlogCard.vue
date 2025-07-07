<script lang="ts" setup>
// No script needed for fully static card
</script>

<template>
  <ClientOnly>
    <div class="relative w-[40rem] h-[31rem] flex justify-center items-center">
      <div class="main-div rounded-lg shadow-xl w-full max-w-sm">
        <div class="relative overflow-hidden">
          <img
            src="https://picsum.photos/400/200?random=2"
            alt="Blog Post"
            class="w-full h-48 object-cover rounded-t-lg"
          />
        </div>
        <div class="p-4">
          <h3 class="text-lg font-semibold main-text mb-2">Blog Post Title</h3>
          <p class="text-p mb-4 text-sm">
            A deep dive into modern web development trends and best practices.
          </p>
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-2">
              <span class="text-sm text-p">By John Doe</span>
              <span class="text-sm text-p">•</span>
              <span class="text-sm text-p">Jul 7, 2025</span>
            </div>
          </div>
          <button
            class="w-full px-3 py-1 main-text active-component rounded-md text-sm main-text active-component"
          >
            Read More
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
