<!-- pages/components/text/index.vue -->
<script lang="ts" setup>
definePageMeta({
  layout: 'sidebar',
});
</script>

<template>
  <div class="ml-[18rem] p-8">
    <h2>Text Components</h2>
    <ul>
      <li><NuxtLink to="/components/text/typography">Typography</NuxtLink></li>
      <li><NuxtLink to="/components/text/highlight">Highlight</NuxtLink></li>
      <li><NuxtLink to="/components/text/truncate">Truncate</NuxtLink></li>
      <li><NuxtLink to="/components/text/typing">Typing</NuxtLink></li>
      <li><NuxtLink to="/components/text/badge">Badge</NuxtLink></li>
    </ul>
  </div>
</template>