<script lang="ts" setup>
import { FormInputFormWithValidation } from '#components'
import { dropdownBtnCode } from '~/assets/code-examples/action/buttons-codes'
import { hoverExpandCardCodes } from '~/assets/code-examples/cards/card-codes'
import { slideInModalCodes } from '~/assets/code-examples/dialog/modal-codes'
import { formWithValidationCodes } from '~/assets/code-examples/form/input-codes'
import { cyclingTypingCode } from '~/assets/code-examples/text/typing-codes'
import DropdownBtn from '~/components/action/buttons/DropdownBtn.vue'
import HoverCard from '~/components/cards/interactive/HoverCard.vue'
import SlideInModal from '~/components/dialog/modal/SlideInModal.vue'
import CycleTypewriter from '~/components/text/typing/CycleTypewriter.vue'


definePageMeta({
  layout: 'sidebar',
})

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
    title: 'Cycling Typing Component',
    codeTitle: 'components/text/typing/CycleTypewriter.vue',
    code: cyclingTypingCode,
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
    title: 'Input With Validation Component',
    codeTitle: 'components/form/input/InputWithValidation.vue',
    code: formWithValidationCodes,
  },
  {
    title: 'Slide-In Modal',
    text: 'A modal that slides in from the left, suitable for sidebars or settings.',
    codeTitle: 'SlideInModal.vue',
    code: slideInModalCodes,
    content: { type: 'text', props: { class: '' }, children: '' },
  },
]
</script>

<template>
  <ClientOnly>
    <div class="flex flex-col gap-16 py-6">
      <!-- Hero Section -->
      <div class="w-full">
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
        <div class="flex items-center gap-4 mb-6 w-1/2 justify-center">
          <div
            class="w-8 h-px bg-gray-300 transition-all duration-500 group-hover:bg-gray-500 hidden sm:block"
          ></div>
          <h2 class="main-text text-2xl font-medium tracking-wide">
            Text Components
          </h2>
        </div>

        <div>
          <CodeCard
            :card="codeCards[0]"
            :component="CycleTypewriter"
            :is-code-preview="true"
            :is-reload="true"
          />
        </div>
      </div>

      <!-- Button Components -->
      <div id="button-components" class="group">
        <div class="flex items-center gap-4 mb-6 w-1/2 justify-center">
          <div
            class="w-8 h-px bg-gray-300 transition-all duration-500 group-hover:bg-gray-500 hidden sm:block"
          ></div>
          <h2 class="main-text text-2xl font-medium tracking-wide ">
            Button Components
          </h2>
        </div>

        <div>
          <CodeCard
            :card="codeCards[1]"
            :component="DropdownBtn"
            :is-code-preview="true"
          />
        </div>
      </div>

      <!-- Card Components -->
      <div id="card-components" class="group">
        <div class="flex items-center gap-4 mb-6 w-1/2 justify-center">
          <div
            class="w-8 h-px bg-gray-300 transition-all duration-500 group-hover:bg-gray-500 hidden sm:block"
          ></div>
          <h2 class="main-text text-2xl font-medium tracking-wide">
            Card Components
          </h2>
        </div>

        <div>
          <CodeCard
            :card="codeCards[2]"
            :component="HoverCard"
            :is-code-preview="true"
          />
        </div>
      </div>

      <!-- Form Components -->
      <div id="form-components" class="group">
        <div class="flex items-center gap-4 mb-6 w-1/2 justify-center">
          <div
            class="w-8 h-px bg-gray-300 transition-all duration-500 group-hover:bg-gray-500 hidden sm:block"
          ></div>
          <h2 class="main-text text-2xl font-medium tracking-wide">
            Form Components
          </h2>
        </div>

        <div>
          <CodeCard
            :card="codeCards[3]"
            :component="FormInputFormWithValidation"
            :is-code-preview="true"
          />
        </div>
      </div>

      <!-- Modal Components -->
      <div id="modal-components" class="group">
        <div class="flex items-center gap-4 mb-6 w-1/2 justify-center">
          <div
            class="w-8 h-px bg-gray-300 transition-all duration-500 group-hover:bg-gray-500 hidden sm:block"
          ></div>
          <h2 class="main-text text-2xl font-medium tracking-wide">
            Modal Components
          </h2>
        </div>

        <div>
          <CodeCard
            :card="codeCards[4]"
            :component="SlideInModal"
            :is-code-preview="true"
          />
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
