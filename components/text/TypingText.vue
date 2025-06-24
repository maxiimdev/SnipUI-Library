<!-- components/text/TypingText.vue -->
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
const text = ref('');
const props = defineProps<{
  content: string;
  speed?: number;
}>();

onMounted(() => {
  let i = 0;
  const interval = setInterval(() => {
    if (i < props.content.length) {
      text.value += props.content[i];
      i++;
    } else {
      clearInterval(interval);
    }
  }, props.speed || 100);
});
</script>

<template>
  <span class="font-mono text-lg">{{ text }}</span>
</template>