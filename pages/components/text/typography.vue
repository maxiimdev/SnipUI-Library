<!-- pages/components/text/typography.vue -->
<script lang="ts" setup>
import type { Card } from '~/types/index'

definePageMeta({
  layout: 'sidebar',
})

const gradient: Card = {
  title: 'Gradient',
  text: 'Normal static gradient',
  codeTitle: 'gradient.vue',
  codeCopy: `<span class="text-6xl bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 text-transparent bg-clip-text font-bold">
  Some text...
</span>`,
  code: `
  <span class="text-gray-500">&lt;</span><span class="tag">span</span> <span class="tag-class">class</span><span class="tag">=</span><span class="code-class-text">"text-6xl bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 text-transparent bg-clip-text font-bold"</span><span class="text-gray-500">&gt;</span>
  <span class="code-text">Some text...</span>
<span class="text-gray-500">&lt;/</span><span class="tag">span</span><span class="text-gray-500">&gt;</span>`,
  num: 4,
  content: {
    type: 'text',
    props: {
      class:
        'text-6xl bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 text-transparent bg-clip-text font-bold',
    },
    children: 'Some text...',
  },
}
</script>

<template>
  <div class="flex flex-col gap-20">
    <CodeCard :card="gradient" />
    <span
      class="text-6xl font-bold bg-gradient-to-l from-blue-400 via-indigo-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent animate-gradient"
    >
      Animated Gradient Text
    </span>
  </div>
</template>

<style>
@layer utilities {
  .animate-gradient {
    background-size: 200%;
    animation: gradientFlow 3s linear infinite;
  }

  @keyframes gradientFlow {
    0% {
      background-position: 200%;
    }
    100% {
      background-position: 0%;
    }
  }
}
</style>
