<script lang="ts" setup>
import {
  asyncBtnCode,
  dropdownBtnCode,
} from '~/assets/code-examples/action/buttons-codes'
import { hoverExpandCardCodes } from '~/assets/code-examples/cards/card-codes'
import { slideInModalCodes } from '~/assets/code-examples/dialog/modal-codes'
import { autoResizeTextareaCode } from '~/assets/code-examples/form/textarea-codes'
import { simpleTypingCode } from '~/assets/code-examples/text/typing-codes'

definePageMeta({
  layout: 'sidebar',
})

useState('sidebar-text').value = 'Documentation'
useState('right-sidebar-text').value = 'On This Page'
useState('right-sidebar-items').value = [
  {
    items: [
      { name: 'Text Components', path: '#text-components' },
      { name: 'Button Components', path: '#button-components' },
      { name: 'Card Components', path: '#card-components' },
      { name: 'Form Components', path: '#form-components' },
      { name: 'Modal Components', path: '#modal-components' },
    ],
  },
]

const codeCards = [
  {
    title: 'Simple Typing Component',
    codeTitle: 'components/text/typing/Typewriter.vue',
    code: simpleTypingCode,
  },

  {
    title: 'Dropdown Button',
    text: 'A button that opens a dropdown menu with options.',
    codeTitle: 'DropdownBtn.vue',
    code: dropdownBtnCode,
  },

  {
    title: 'Hover Expand Card Component',
    codeTitle: 'components/cards/interactive/HoverExpandCard.vue',
    code: hoverExpandCardCodes,
  },
  {
    title: 'Auto Resize Textarea Component',
    codeTitle: 'components/form/textarea/AutoResizeTextarea.vue',
    code: autoResizeTextareaCode,
  },
  {
    title: 'Slide-In Modal',
    text: 'A modal that slides in from the right, suitable for sidebars or settings.',
    codeTitle: 'SlideInModal.vue',
    code: slideInModalCodes,
    content: { type: 'text', props: { class: '' }, children: '' },
  },
]
</script>

<template>
  <ClientOnly>
    <div
      class="w-full max-w-7xl mx-auto py- flex flex-col lg:flex-row gap-12"
    >
      <div>
        <!-- Hero Section -->
        <div class="mb-18">
          <h1 class="main-text text-4xl mb-4 font-light tracking-tight">
            Examples
          </h1>
          <p class="text-p text-lg leading-relaxed opacity-80">
            Explore real-world examples of My UI Library components with code
            snippets you can copy and use in your projects.
          </p>
        </div>

        <!-- Text Components -->
        <div id="text-components" class="group">
          <div class="main-div rounded-lg shadow-xl p-6">
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-8 h-px bg-gray-300 transition-all duration-500 group-hover:bg-gray-500"
              ></div>
              <h2 class="main-text text-2xl font-medium tracking-wide mb-6">
                Text Components
              </h2>
            </div>
            
            <CodeCard :card="codeCards[0]" isCompact />
          </div>
        </div>

        <!-- Button Components -->
        <div id="button-components" class="group mt-12">
          <div class="main-div rounded-lg shadow-xl p-6">
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-8 h-px bg-gray-300 transition-all duration-500 group-hover:bg-gray-500"
              ></div>
              <h2 class="main-text text-2xl font-medium tracking-wide mb-6">
                Button Components
              </h2>
            </div>
           
            <CodeCard :card="codeCards[1]" isCompact />
          </div>
        </div>

        <!-- Card Components -->
        <div id="card-components" class="group mt-12">
          <div class="main-div rounded-lg shadow-xl p-6">
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-8 h-px bg-gray-300 transition-all duration-500 group-hover:bg-gray-500"
              ></div>
              <h2 class="main-text text-2xl font-medium tracking-wide mb-6">
                Card Components
              </h2>
            </div>
          
            <CodeCard :card="codeCards[2]" isCompact />
          </div>
        </div>

        <!-- Form Components -->
        <div id="form-components" class="group mt-12">
          <div class="main-div rounded-lg shadow-xl p-6">
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-8 h-px bg-gray-300 transition-all duration-500 group-hover:bg-gray-500"
              ></div>
              <h2 class="main-text text-2xl font-medium tracking-wide mb-6">
                Form Components
              </h2>
            </div>
           
            <CodeCard :card="codeCards[3]" isCompact />
          </div>
        </div>

        <!-- Animation Components -->
        <div id="modal-components" class="group mt-12">
          <div class="main-div rounded-lg shadow-xl p-6">
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-8 h-px bg-gray-300 transition-all duration-500 group-hover:bg-gray-500"
              ></div>
              <h2 class="main-text text-2xl font-medium tracking-wide mb-6">
                Modal Components
              </h2>
            </div>
           
            <CodeCard :card="codeCards[4]" isCompact />
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
