<script lang="ts" setup>
import {
  autoCompleteInputCode,
  fileInputCode,
  floatingLabelInputCode,
  iconInputCode,
  numberInputCode,
  passwordInputCode,
  standartInputCode,
} from '~/assets/code-examples/form/input-codes'
import AutoCompleteInput from '~/components/form/input/AutoCompleteInput.vue'
import FileInput from '~/components/form/input/FileInput.vue'

import FloatingLabelInput from '~/components/form/input/FloatingLabelInput.vue'
import IconInput from '~/components/form/input/IconInput.vue'
import NumberInput from '~/components/form/input/NumberInput.vue'
import PasswordInput from '~/components/form/input/PasswordInput.vue'
import StandardInput from '~/components/form/input/StandardInput.vue'
import type { Card } from '~/types'

definePageMeta({
  layout: 'sidebar',
})

useState('right-sidebar-text').value = 'On This Page'

useState('right-sidebar-items').value = [
  {
    items: [
      { name: 'Standard Input', path: '#standard-input' },
      { name: 'Icon Input', path: '#icon-input' },
      { name: 'Password Input', path: '#password-input' },
      { name: 'Floating Label Input', path: '#floating-label-input' },
      { name: 'Autocomplete Input', path: '#autocomplete-input' },
      { name: 'File Input', path: '#file-input' },
      { name: 'Number Input', path: '#number-input' },
    ],
  },
]

const StandardInputCard: Card = {
  title: 'Standard Input',
  text: 'A classic text input with animated border and placeholder.',
  codeTitle: 'StandardInput.vue',
  code: standartInputCode,
  content: {
    type: 'text',
    props: {
      class: '',
    },
    children: '',
  },
}

const IconInputCard: Card = {
  title: 'Icon Input',
  text: 'A text input with a search icon and animated expansion.',
  codeTitle: 'IconInput.vue',
  code: iconInputCode,
  content: {
    type: 'text',
    props: {
      class: '',
    },
    children: '',
  },
}

const PasswordInputCard: Card = {
  title: 'Password Input',
  text: 'A password input with a toggle to show/hide the password.',
  codeTitle: 'PasswordInput.vue',
  code: passwordInputCode,
  content: {
    type: 'text',
    props: {
      class: '',
    },
    children: '',
  },
}

const NumberInputCard: Card = {
  title: 'Number Input',
  text: 'A number input with buttons to increase or decrease the value.',
  codeTitle: 'NumberInput.vue',
  code: numberInputCode,
  content: {
    type: 'text',
    props: {
      class: '',
    },
    children: '',
  },
}

const FloatingLabelInputCard: Card = {
  title: 'Floating Label Input',
  text: 'A text input with a floating label that animates on focus or input.',
  codeTitle: 'FloatingLabelInput.vue',
  code: floatingLabelInputCode,
  content: {
    type: 'text',
    props: {
      class: '',
    },
    children: '',
  },
}

const AutoCompleteInputCard: Card = {
  title: 'Autocomplete Input',
  text: 'A text input with a dropdown of suggestions based on input.',
  codeTitle: 'AutoCompleteInput.vue',
  code: autoCompleteInputCode,
  content: {
    type: 'text',
    props: { class: '' },
    children: '',
  },
}

const FileInputCard: Card = {
  title: 'File Input',
  text: 'A file input with a custom button and file name display.',
  codeTitle: 'FileInput.vue',
  code: fileInputCode,
  content: { type: 'text', props: { class: '' }, children: '' },
}
</script>

<template>
  <div class="flex flex-col gap-20">
    <div id="standard-input">
      <CodeCard
        :card="StandardInputCard"
        :component="StandardInput"
        :is-code-preview="true"
      />
    </div>
    <div id="icon-input">
      <CodeCard
        :card="IconInputCard"
        :component="IconInput"
        :is-code-preview="true"
      />
    </div>
    <div id="password-input">
      <CodeCard
        :card="PasswordInputCard"
        :component="PasswordInput"
        :is-code-preview="true"
      />
    </div>

    <div id="floating-label-input">
      <CodeCard
        :card="FloatingLabelInputCard"
        :component="FloatingLabelInput"
        :is-code-preview="true"
      />
    </div>
    <div id="autocomplete-input">
      <CodeCard
        :card="AutoCompleteInputCard"
        :component="AutoCompleteInput"
        :is-code-preview="true"
      />
    </div>
     <div id="file-input">
      <CodeCard
        :card="FileInputCard"
        :component="FileInput"
        :is-code-preview="true"
      />
    </div>
    <div id="number-input">
      <CodeCard
        :card="NumberInputCard"
        :component="NumberInput"
        :is-code-preview="true"
      />
    </div>
  </div>
</template>
