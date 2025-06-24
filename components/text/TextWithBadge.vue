<!-- components/text/TextWithBadge.vue -->
<script lang="ts" setup>
defineProps<{
  badge?: string;
  badgeColor?: 'green' | 'blue' | 'red';
}>();
</script>

<template>
  <div class="flex items-center gap-2">
    <span class="text-base"><slot /></span>
    <span
      v-if="badge"
      :class="[
        'text-xs font-semibold px-2 py-1 rounded-full',
        badgeColor === 'green' && 'bg-green-100 text-green-800',
        badgeColor === 'blue' && 'bg-blue-100 text-blue-800',
        badgeColor === 'red' && 'bg-red-100 text-red-800',
      ]"
    >
      {{ badge }}
    </span>
  </div>
</template>