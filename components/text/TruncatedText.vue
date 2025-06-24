<!-- components/TruncatedText.vue -->
<script lang="ts" setup>
import { ref } from 'vue';
const isExpanded = ref(false);
const props = defineProps<{
  maxLength?: number;
}>();
const maxLength = props.maxLength ?? 100; // Set your desired default value
</script>

<template>
  <div>
    <span v-if="!isExpanded && $slots.default && $slots.default().length > maxLength" class="truncate">
      {{ $slots.default && $slots.default().slice(0, maxLength) }}...
    </span>
    <span v-else>
      <slot />
    </span>
    <button
      v-if="$slots.default && $slots.default().length > maxLength"
      class="text-blue-500 hover:underline ml-1 text-sm"
      @click="isExpanded = !isExpanded"
    >
      {{ isExpanded ? 'Show less' : 'Show more' }}
    </button>
  </div>
</template>