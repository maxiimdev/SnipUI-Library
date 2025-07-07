<script lang="ts" setup>
import type { Card } from '~/types'
import HoverExpandCard from '~/components/cards/interactive/HoverCard.vue'
import ImageSwitchCard from '~/components/cards/interactive/ImageSwitchCard.vue'
import ClickTransformCard from '~/components/cards/interactive/ClickTransformCard.vue'
import NotificationCard from '~/components/cards/interactive/NotificationCard.vue'
import {
  hoverExpandCardCodes,
  imageSwitchCardCodes,
  flipCardCodes,
  clickTransformCardCodes,
  notificationCardCodes,
} from '~/assets/code-examples/cards/card-codes'
import FlipCard from '~/components/cards/interactive/FlipCard.vue'

definePageMeta({
  layout: 'sidebar',
})

useState('right-sidebar-text').value = 'On This Page'

useState('right-sidebar-items').value = [
  {
    items: [
      { name: 'Hover Expand Card', path: '#hover-expand-card' },
      { name: 'Image Switch Card', path: '#image-switch-card' },
      { name: 'Flip Card', path: '#flip-card' },
      { name: 'Click Transform Card', path: '#click-transform-card' },
      { name: 'Notification Card', path: '#notification-card' },
    ],
  },
]

const HoverExpandCardCard: Card = {
  title: 'Hover Expand Card',
  text: 'A card that expands on hover to show additional content.',
  codeTitle: 'HoverExpandCard.vue',
  code: hoverExpandCardCodes,
  content: { type: 'text', props: { class: '' }, children: '' },
}

const ImageSwitchCardCard: Card = {
  title: 'Image Switch Card',
  text: 'A card that switches images on hover.',
  codeTitle: 'ImageSwitchCard.vue',
  code: imageSwitchCardCodes,
  content: { type: 'text', props: { class: '' }, children: '' },
}

const FlipCardCard: Card = {
  title: 'Flip Card',
  text: 'A card that flips to reveal additional details.',
  codeTitle: 'FlipCard.vue',
  code: flipCardCodes,
  content: { type: 'text', props: { class: '' }, children: '' },
}

const ClickTransformCardCard: Card = {
  title: 'Click Transform Card',
  text: 'A card that transforms on click to show animated stats.',
  codeTitle: 'ClickTransformCard.vue',
  code: clickTransformCardCodes,
  content: { type: 'text', props: { class: '' }, children: '' },
}

const NotificationCardCard: Card = {
  title: 'Notification Card',
  text: 'A card that manages and displays notifications.',
  codeTitle: 'NotificationCard.vue',
  code: notificationCardCodes,
  content: { type: 'text', props: { class: '' }, children: '' },
}
</script>

<template>
  <div class="flex flex-col gap-20">
    <div id="hover-expand-card">
      <CodeCard
        :card="HoverExpandCardCard"
        :component="HoverExpandCard"
        :is-code-preview="true"
      />
    </div>
    <div id="image-switch-card">
      <CodeCard
        :card="ImageSwitchCardCard"
        :component="ImageSwitchCard"
        :is-code-preview="true"
      />
    </div>
    <div id="flip-card">
      <CodeCard
        :card="FlipCardCard"
        :component="FlipCard"
        :is-code-preview="true"
      />
    </div>
    <div id="click-transform-card">
      <CodeCard
        :card="ClickTransformCardCard"
        :component="ClickTransformCard"
        :is-code-preview="true"
      />
    </div>
    <div id="notification-card">
      <CodeCard
        :card="NotificationCardCard"
        :component="NotificationCard"
        :is-code-preview="true"
      />
    </div>
  </div>
</template>
