<script lang="ts" setup>
import type { Card } from '~/types'
import {
  blinkingCursorTypingCode,
  cyclingTypingCode,
  simpleTypingCode,
} from '~/assets/code-examples/text/typing-codes'
import Typewriter from '~/components/text/typing/Typewriter.vue'
import BlinkingCursorTypewriter from '~/components/text/typing/BlinkingCursorTypewriter.vue'
import CycleTypewriter from '~/components/text/typing/CycleTypewriter.vue'

definePageMeta({
  layout: 'sidebar',
})

useState('right-sidebar-text').value = 'On This Page'

useState('right-sidebar-items').value = [
  {
    items: [
      { name: 'Simple Typing', path: '#simple-typing' },
      { name: 'Blinking Cursor Typing', path: '#blinking-cursor-typing' },
      { name: 'Cycle Typing', path: '#cycle-typing' },
    ],
  },
]

const simpleTyping: Card = {
  title: 'Simple Typing',
  text: 'Text appears character by character with a typewriter effect.',
  codeTitle: 'Typewriter.vue',
  code: simpleTypingCode,
  content: {
    type: 'text',
    props: {
      class: 'text-3xl font-mono main-text w-96',
    },
    children: 'Hi, this is a print animation on Vue 3!',
  },
}

const blinkingCursorTyping: Card = {
  title: 'Blinking Cursor Typing',
  text: 'Text types out with a blinking cursor at the end.',
  codeTitle: 'BlinkingCursorTypewriter.vue',
  code: blinkingCursorTypingCode,
  content: {
    type: 'text',
    props: {
      class: 'text-3xl font-mono main-text',
    },
    children: 'Создаем UI с анимацией!',
  },
}

const cycleTyping: Card = {
  title: 'Cycle Typing',
  text: 'Text types out and deletes character by character in a loop.',
  codeTitle: 'CycleTypewriter.vue',
  code: cyclingTypingCode,
  content: {
    type: 'text',
    props: {
      class: 'text-3xl font-mono main-text',
    },
    children: 'Циклическая печать текста',
  },
}
</script>

<template>
  <div class="flex flex-col gap-20">
    <div id="simple-typing">
      <CodeCard
        :card="simpleTyping"
        :is-code-preview="true"
        :component="Typewriter"
        :is-reload="true"
      />
    </div>
    <div id="blinking-cursor-typing">
      <CodeCard
        :card="blinkingCursorTyping"
        :is-code-preview="true"
        :component="BlinkingCursorTypewriter"
        :is-reload="true"
      />
    </div>
    <div id="cycle-typing">
      <CodeCard
        :card="cycleTyping"
        :is-code-preview="true"
        :component="CycleTypewriter"
        :is-reload="true"
      />
    </div>
  </div>
</template>
