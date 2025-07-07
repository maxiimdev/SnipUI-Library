<script lang="ts" setup>
import type { Card } from '~/types'
import BasicModal from '~/components/dialog/modal/BasicModal.vue'
import SlideInModal from '~/components/dialog/modal/SlideInModal.vue'
import FullScreenModal from '~/components/dialog/modal/FullScreenModal.vue'
import { basicModalCodes, fullScreenModalCodes, slideInModalCodes } from '~/assets/code-examples/dialog/modal-codes'

definePageMeta({
  layout: 'sidebar',
})

useState('right-sidebar-text').value = 'On This Page'

useState('right-sidebar-items').value = [
  {
    items: [
      { name: 'Basic Modal', path: '#basic-modal' },
      { name: 'Slide-In Modal', path: '#slide-in-modal' },
      { name: 'Full Screen Modal', path: '#full-screen-modal' },
    ],
  },
]

const BasicModalCard: Card = {
  title: 'Basic Modal',
  text: 'A simple modal dialog with a centered appearance and animated transitions.',
  codeTitle: 'BasicModal.vue',
  code: basicModalCodes,
  content: { type: 'text', props: { class: '' }, children: '' },
}

const SlideInModalCard: Card = {
  title: 'Slide-In Modal',
  text: 'A modal that slides in from the right, suitable for sidebars or settings.',
  codeTitle: 'SlideInModal.vue',
  code: slideInModalCodes,
  content: { type: 'text', props: { class: '' }, children: '' },
}

const FullScreenModalCard: Card = {
  title: 'Full Screen Modal',
  text: 'A full-screen modal for complex forms or content viewers.',
  codeTitle: 'FullScreenModal.vue',
  code: fullScreenModalCodes,
  content: { type: 'text', props: { class: '' }, children: '' },
}
</script>

<template>
  <div class="flex flex-col gap-20">
    <div id="basic-modal">
      <CodeCard
        :card="BasicModalCard"
        :component="BasicModal"
        :is-code-preview="true"
      />
    </div>
    <div id="slide-in-modal">
      <CodeCard
        :card="SlideInModalCard"
        :component="SlideInModal"
        :is-code-preview="true"
      />
    </div>
    <div id="full-screen-modal">
      <CodeCard
        :card="FullScreenModalCard"
        :component="FullScreenModal"
        :is-code-preview="true"
      />
    </div>
  </div>
</template>
