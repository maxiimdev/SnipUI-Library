<script lang="ts" setup>
definePageMeta({
  layout: 'sidebar',
  
})

useState('sidebar-text').value = 'Components'

useState('sidebar-items').value = [
  { text: 'Text', path: '/pageComponents/text' },
  { text: 'Buttons', path: '/pageComponents/buttons' },
  { text: 'Cards', path: '/pageComponents/cards' },
  { text: 'Input', path: '/pageComponents/input' },
  { text: 'Checkbox', path: '/pageComponents/checkbox' },
]
</script>

<template>
 <div>
    <h2>Welcome to Components</h2>
    <p>Select a component from the sidebar.</p>
  </div>
</template>
