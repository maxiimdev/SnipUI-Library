<script lang="ts" setup>
definePageMeta({
  layout: 'sidebar',
})

useState('sidebar-text').value = 'Components'

useState('sidebar-items').value = [
  {
    text: 'Text',
    items: [
      {
        name: 'Gradient',
        path: '/components/text/gradient',
      },
      {
        name: 'Typing',
        path: '/components/text/typing',
      },
      {
        name: 'Highlight',
        path: '/components/text/highlight',
      },
      {
        name: 'Truncate',
        path: '/components/text/truncate',
      },

      {
        name: 'Text With Badge',
        path: '/components/text/badge',
      },
      
    ],
  },
]
</script>

<template>
  <div>
    <h2>Welcome to Components</h2>
    <p>Select a component from the sidebar.</p>
  </div>
</template>
