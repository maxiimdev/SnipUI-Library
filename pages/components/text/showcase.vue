```vue
<script lang="ts" setup>
import type { Card } from '~/types'
import {
  fillAnimationTextCode,
  parallaxBackgroundTextCode,
  staticBgTextCode,
  threeDRotateTextCode,
} from '~/assets/css/code-examples/background-text-codes'
import ParallaxBackgroundText from '~/components/text/background/ParallaxBackgroundText.vue'
import StaticBgText from '~/components/text/background/StaticBgText.vue'
import ThreeDRotateText from '~/components/text/background/ThreeDRotateText.vue'
import FillAnimationText from '~/components/text/background/FillAnimationText.vue'

// Новые импорты для компонентов


// Код для новых компонентов

definePageMeta({
  layout: 'sidebar',
})

useState('right-sidebar-text').value = 'On This Page'
useState('right-sidebar-items').value = [
  {
    items: [
      { name: 'Static Background Text', path: '#static-background-text' },
      { name: 'Parallax Background Text', path: '#parallax-background-text' },
      { name: '3D Rotate Text', path: '#three-d-rotate-text' },
      { name: 'Fill Animation Text', path: '#fill-animation-text' },
    ],
  },
]

const staticBackgroundText: Card = {
  title: 'Static Background Text',
  text: 'Text with a static image clipped to the text shape for a bold visual effect.',
  codeTitle: 'StaticBackgroundText.vue',
  code: staticBgTextCode,
  content: {
    type: 'text',
    children: 'Background Text',
    props: {
      class: 'text-3xl font-bold main-text',
    },
  },
}

const parallaxBackgroundText: Card = {
  title: 'Parallax Background Text',
  text: 'Text with an image background that shifts slightly with mouse movement.',
  codeTitle: 'ParallaxBackgroundText.vue',
  code: parallaxBackgroundTextCode,
  content: {
    type: 'text',
    children: 'Parallax Text',
    props: {
      class: 'text-3xl font-bold main-text',
    },
  },
}

const threeDRotateText: Card = {
  title: '3D Rotate Text',
  text: 'Text that rotates in 3D based on mouse movement for an immersive effect.',
  codeTitle: 'ThreeDRotateText.vue',
  code: threeDRotateTextCode,
  content: {
    type: 'text',
    children: '3D Text',
    props: {
      class: 'text-3xl font-bold rotate-text',
    },
  },
}

const fillAnimationText: Card = {
  title: 'Fill Animation Text',
  text: 'Text that fills with color or texture on hover.',
  codeTitle: 'FillAnimationText.vue',
  code: fillAnimationTextCode,
  content: {
    type: 'text',
    children: 'Fill Text',
    props: {
      class: 'text-3xl font-bold fill-text',
    },
  },
}
</script>

<template>
  <div class="flex flex-col gap-20">
    <div id="static-background-text">
      <CodeCard
        :card="staticBackgroundText"
        :is-code-preview="true"
        :component="StaticBgText"
      />
    </div>

    <div id="parallax-background-text">
      <CodeCard
        :card="parallaxBackgroundText"
        :is-code-preview="true"
        :component="ParallaxBackgroundText"
      />
    </div>

    <div id="three-d-rotate-text">
      <CodeCard
        :card="threeDRotateText"
        :is-code-preview="true"
        :component="ThreeDRotateText"
      />
    </div>

    <div id="fill-animation-text">
      <CodeCard
        :card="fillAnimationText"
        :is-code-preview="true"
        :component="FillAnimationText"
      />
    </div>
  </div>
</template>
```
