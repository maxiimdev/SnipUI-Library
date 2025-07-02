<script lang="ts" setup>
definePageMeta({
  layout: 'sidebar'
})

useState('right-sidebar-text').value = 'On This Page'

useState('right-sidebar-items').value = [
  {
    items: [
      { name: 'Static Quote', path: '#styled-quote' },
      { name: 'Hover Collapsible', path: '#collapsible-article' },
      { name: 'Click Collapsible', path: '#interactive-collapsible' },
      { name: 'Highlighted Text', path: '#highlighted-text' },
      { name: 'Read Aloud', path: '#read-aloud' },
      { name: 'Annotated Text', path: '#annotated-text' },
    ],
  },
]
</script>

<template>
  <div>123</div>
</template>
