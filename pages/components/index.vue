<script lang="ts" setup>
definePageMeta({
  layout: 'sidebar',
})

useState('sidebar-text').value = 'Components'

useState('sidebar-items').value = [
  {
    text: 'Text Effects',
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
        name: 'Article Highlights',
        path: '/components/text/article',
      },
      {
        name: 'Effect Showcase',
        path: '/components/text/showcase',
      },
    ],
  },
  {
    text: 'Action Toggles',
    items: [
      {
        name: 'Buttons',
        path: '/components/action/buttons',
      },
      {
        name: 'Input Toggles',
        path: '/components/action/toggles',
      },
    ],
  },
  {
    text: 'Form Inputs',
    items: [
      {
        name: 'Input',
        path: '/components/form/input',
      },
      {
        name: 'Textarea',
        path: '/components/form/textarea',
      },
    ],
  },
  {
    text: 'Dialog Triggers',
    items: [
      {
        name: 'Modal',
        path: '/components/dialog/modal',
      },
      {
        name: 'Triggers',
        path: '/components/dialog/triggers',
      },
    ],
  },
  {
    text: 'Cards',
    items: [
      {
        name: 'Basic Cards',
        path: '/components/cards/basic',
      },
      {
        name: 'Another Cards',
        path: '/components/cards/another',
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
