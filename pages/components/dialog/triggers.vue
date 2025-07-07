<script lang="ts" setup>
import type { Card } from '~/types'
import IconTrigger from '~/components/dialog/triggers/IconTrigger.vue'
import AutoOpenTrigger from '~/components/dialog/triggers/AutoOpenTrigger.vue'
import {
  autoOpenTriggerCodes,
  hoverTriggerCodes,
  iconTriggerCodes,
  keyPressTriggerCodes,
} from '~/assets/code-examples/dialog/triggers-codes'
import KeyboardTrigger from '~/components/dialog/triggers/KeyboardTrigger.vue'
import HoverTrigger from '~/components/dialog/triggers/HoverTrigger.vue'

definePageMeta({
  layout: 'sidebar',
})

useState('right-sidebar-text').value = 'On This Page'

useState('right-sidebar-items').value = [
  {
    items: [
      { name: 'Icon Trigger', path: '#icon-trigger' },
      { name: 'Auto Open Trigger', path: '#auto-open-trigger' },
      { name: 'Key Press Trigger', path: '#key-press-trigger' },
      { name: 'Hover Trigger', path: '#hover-trigger' },
    ],
  },
]

const IconTriggerCard: Card = {
  title: 'Icon Trigger',
  text: 'An icon that triggers a modal dialog.',
  codeTitle: 'IconTrigger.vue',
  code: iconTriggerCodes,
  content: { type: 'text', props: { class: '' }, children: '' },
}

const AutoOpenTriggerCard: Card = {
  title: 'Auto Open Trigger',
  text: 'A modal that opens automatically after a delay.',
  codeTitle: 'AutoOpenTrigger.vue',
  code: autoOpenTriggerCodes,
  content: { type: 'text', props: { class: '' }, children: '' },
}

const KeyPressTriggerCard: Card = {
  title: 'Key Press Trigger',
  text: 'A modal that opens on Ctrl + M key press.',
  codeTitle: 'KeyPressTrigger.vue',
  code: keyPressTriggerCodes,
  content: { type: 'text', props: { class: '' }, children: '' },
}

const HoverTriggerCard: Card = {
  title: 'Hover Trigger',
  text: 'A modal that opens after a 1.5-second hover.',
  codeTitle: 'HoverTrigger.vue',
  code: hoverTriggerCodes,
  content: { type: 'text', props: { class: '' }, children: '' },
}
</script>

<template>
  <div class="relative w-full h-full">
    <div class="flex flex-col gap-20">
      <!-- Icon Trigger -->
      <div id="icon-trigger">
        <CodeCard
          :card="IconTriggerCard"
          :component="IconTrigger"
          :is-code-preview="true"
        >
        </CodeCard>
      </div>

      <!-- Auto Open Trigger -->
      <div id="auto-open-trigger">
        <CodeCard
          :card="AutoOpenTriggerCard"
          :component="AutoOpenTrigger"
          :is-code-preview="true"
          :is-reload="true"
        >
        </CodeCard>
      </div>
      <div id="key-press-trigger">
        <CodeCard
          :card="KeyPressTriggerCard"
          :component="KeyboardTrigger"
          :is-code-preview="true"
        />
      </div>
      <div id="hover-trigger">
        <CodeCard
          :card="HoverTriggerCard"
          :component="HoverTrigger"
          :is-code-preview="true"
        />
      </div>
    </div>
  </div>
</template>
