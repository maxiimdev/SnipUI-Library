<script lang="ts" setup>
import AutoResizeTextarea from '~/components/form/textarea/AutoResizeTextarea.vue'
import CharacterCountTextarea from '~/components/form/textarea/CharacterCountTextarea.vue'
import Textarea from '~/components/form/textarea/Textarea.vue'
import type { Card } from '~/types'
import {
  autoResizeTextareaCode,
  countTextareaCode,
  textareaCode,
} from '~/assets/code-examples/form/textarea-codes'

definePageMeta({
  layout: 'sidebar',
})

useState('right-sidebar-text').value = 'On this Page'

useState('right-sidebar-items').value = [
  {
    items: [
      { name: 'Textarea', path: '#textarea' },
      { name: 'Auto Resize Textarea', path: '#auto-resize-textarea' },
      { name: 'Character Count Textarea', path: '#character-count-textarea' },
    ],
  },
]

const TextareaCard: Card = {
  title: 'Textarea',
  text: 'A multi-line text input with animated border and placeholder.',
  codeTitle: 'Textarea.vue',
  code: textareaCode,
  content: { type: 'text', props: { class: '' }, children: '' },
}

const AutoResizeTextareaCard: Card = {
  title: 'Auto Resize Textarea',
  text: 'A textarea that automatically adjusts its height based on content.',
  codeTitle: 'AutoResizeTextarea.vue',
  code: autoResizeTextareaCode,
  content: { type: 'text', props: { class: '' }, children: '' },
}
const CharacterCountTextareaCard: Card = {
  title: 'Character Count Textarea',
  text: 'A textarea with a character counter and limit indicator.',
  codeTitle: 'CharacterCountTextarea.vue',
  code: countTextareaCode,
  content: { type: 'text', props: { class: '' }, children: '' },
}
</script>

<template>
  <div class="flex flex-col gap-20">
    <div id="textarea">
      <CodeCard
        :card="TextareaCard"
        :component="Textarea"
        :is-code-preview="true"
      />
    </div>
    <div id="auto-resize-textarea">
      <CodeCard
        :card="AutoResizeTextareaCard"
        :component="AutoResizeTextarea"
        :is-code-preview="true"
      />
    </div>
    <div id="character-count-textarea">
      <CodeCard
        :card="CharacterCountTextareaCard"
        :component="CharacterCountTextarea"
        :is-code-preview="true"
      />
    </div>
  </div>
</template>
