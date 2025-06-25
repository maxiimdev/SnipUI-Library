<!-- pages/components/text/typography.vue -->
<script lang="ts" setup>
definePageMeta({
  layout: 'sidebar',
})
</script>

<template>
  <span class="text-6xl font-bold bg-gradient-to-r from-red-600 via-orange-500 via-amber-400 to-yellow-400 bg-clip-text text-transparent animate-fire-flicker [text-shadow:0_0_8px_rgba(234,88,12,0.4)]">
    FIRE POWER
  </span>
</template>

<style scoped>
.animate-fire-flicker {
  background-size: 300% 100%;
  animation: fireFlicker 2s ease-in-out infinite alternate;
}

@keyframes fireFlicker {
  0% {
    background-position: 0% 50%;
    filter: drop-shadow(0 0 8px rgba(234, 88, 12, 0.4)) brightness(1);
  }
  25% {
    background-position: 50% 50%;
    filter: drop-shadow(0 0 12px rgba(234, 88, 12, 0.6)) brightness(1.1);
  }
  50% {
    background-position: 100% 50%;
    filter: drop-shadow(0 0 8px rgba(234, 88, 12, 0.4)) brightness(0.9);
  }
  75% {
    background-position: 75% 50%;
    filter: drop-shadow(0 0 15px rgba(234, 88, 12, 0.7)) brightness(1.2);
  }
  100% {
    background-position: 0% 50%;
    filter: drop-shadow(0 0 10px rgba(234, 88, 12, 0.5)) brightness(1);
  }
}
</style>