<!-- components/Text.vue -->
<script lang="ts" setup>
defineProps<{
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption' | 'quote';
  color?: 'primary' | 'secondary' | 'accent';
}>();
</script>

<template>
  <component
    :is="variant === 'h1' ? 'h1' : variant === 'h2' ? 'h2' : variant === 'h3' ? 'h3' : variant === 'quote' ? 'blockquote' : 'p'"
    :class="[
      variant === 'h1' && 'text-4xl font-bold tracking-tight',
      variant === 'h2' && 'text-3xl font-semibold tracking-tight',
      variant === 'h3' && 'text-2xl font-medium',
      variant === 'body' && 'text-base font-normal leading-relaxed',
      variant === 'caption' && 'text-sm font-light text-gray-500',
      variant === 'quote' && 'text-lg italic border-l-4 border-gray-300 pl-4',
      color === 'primary' && 'text-gray-900 dark:text-white',
      color === 'secondary' && 'text-gray-600 dark:text-gray-300',
      color === 'accent' && 'text-blue-600 dark:text-blue-400',
    ]"
  >
    <slot />
  </component>
</template>