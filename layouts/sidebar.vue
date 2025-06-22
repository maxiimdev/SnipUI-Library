<!-- layouts/sidebar.vue -->
<script lang="ts" setup>
const sidebarText = useState<string>('sidebar-text', () => 'Components');
const sidebarItems = useState<{ text: string; path: string }[]>(
  'sidebar-items',
  () => [],
);
</script>

<template>
  <NuxtLayout name="default">
    <div class="flex">
      <Sidebar :items="sidebarItems" :text="sidebarText" />
      <div class="ml-[18rem] p-8">
        <slot />
      </div>
    </div>
  </NuxtLayout>
</template>