<script lang="ts" setup>
const text = ref('Docs')
const items = ref([
  { text: 'About', path: '/components/text' },
  { text: 'How it works', path: '/buttons' },
  { text: 'Examples', path: '/cards' },
  
])
</script>

<template>
  <div>
    <Sidebar :items="items" :text="text" />
  </div>
</template>
