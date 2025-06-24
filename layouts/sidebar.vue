<!-- layouts/sidebar.vue -->
<script lang="ts" setup>
import type { Item } from '~/types'

const sidebarText = useState<string>('sidebar-text', () => 'Components')
const sidebarItems = useState<Item[]>('sidebar-items', () => [])
</script>

<template>
  <NuxtLayout name="default">
    <div class="grid grid-cols-[15rem_1fr] h-full">
      <Sidebar :items="sidebarItems" :text="sidebarText" />
      <main class="flex  justify-center p-8">
        <div class="w-full max-w-4xl">
          <slot />
        </div>
      </main>
    </div>
  </NuxtLayout>
</template>