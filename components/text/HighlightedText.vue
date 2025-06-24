<!-- components/HighlightedText.vue -->
<script lang="ts" setup>
defineProps<{
  highlight?: 'yellow' | 'blue' | 'underline';
}>();
</script>

<template>
  <span
    :class="[
      'transition-all duration-200',
      highlight === 'yellow' && 'bg-yellow-200 dark:bg-yellow-700/30',
      highlight === 'blue' && 'bg-blue-200 dark:bg-blue-700/30',
      highlight === 'underline' && 'underline decoration-2 decoration-blue-500',
      'hover:scale-105 inline-block',
    ]"
  >
    <slot />
  </span>
</template>