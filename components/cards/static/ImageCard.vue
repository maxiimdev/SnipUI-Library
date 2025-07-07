<script lang="ts" setup>
// No script needed for static card
</script>

<template>
  <ClientOnly>
    <div class="relative w-[40rem] h-[31rem] flex justify-center items-center">
      <div class="main-div rounded-lg shadow-xl w-full max-w-sm">
        <img
          src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400"
          alt="Feature"
          class="w-full h-56 object-cover rounded-t-lg"
        >
        <div class="p-4">
          <h2 class="text-lg font-semibold main-text">Feature Title</h2>
          <p class="text-p mt-2 text-sm">Brief description of the feature or item.</p>
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