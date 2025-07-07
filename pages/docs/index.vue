<script lang="ts" setup>
definePageMeta({
  layout: 'sidebar',
})

useState('sidebar-text').value = 'Documentation'
useState('sidebar-items').value = [
        {
          text: 'Get Started',
          items: [
            {
              name: 'Installation',
              path: '/docs/getting-started/installation',
            },
            {
              name: 'Quick Start',
              path: '/docs/getting-started/quick-start',
            },
            {
              name: 'Configuration',
              path: '/docs/getting-started/configuration',
            },
          ],
        },
        {
          text: 'API Reference',
          items: [
            {
              name: 'Props',
              path: '/docs/api/props',
            },
            {
              name: 'Methods',
              path: '/docs/api/methods',
            },
            {
              name: 'Events',
              path: '/docs/api/events',
            },
          ],
        },
      ]
</script>

<template>
  <div>
    <h2>Welcome to Docs</h2>
  </div>
</template>
