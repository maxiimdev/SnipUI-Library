<script lang="ts" setup>
import {
  checkboxCode,
  radioCode,
  selectCode,
  switchCode,
} from '~/assets/code-examples/action/checkbox-codes'
import Checkbox from '~/components/action/toggles/Checkbox.vue'
import GroupedCheckbox from '~/components/action/toggles/GroupedCheckbox.vue'
import IconRadio from '~/components/action/toggles/IconRadio.vue'
import Radio from '~/components/action/toggles/Radio.vue'
import Select from '~/components/action/toggles/Select.vue'
import Switch from '~/components/action/toggles/Switch.vue'
import type { Card } from '~/types'

definePageMeta({
  layout: 'sidebar',
})

useState('right-sidebar-text').value = 'On This Page'

useState('right-sidebar-items').value = [
  {
    items: [
      { name: 'Checkbox', path: '#checkbox' },
      { name: 'Grouped Checkbox', path: '#grouped-checkbox' },
      { name: 'Radio', path: '#radio' },
      { name: 'Icon Radio', path: '#icon-radio' },
      { name: 'Select', path: '#select' },
      { name: 'Switch', path: '#switch' },
    ],
  },
]

const CheckboxCard: Card = {
  title: 'Checkbox',
  text: 'A custom checkbox with an animated checkmark.',
  codeTitle: 'Checkbox.vue',
  code: checkboxCode,
  content: {
    type: 'text',
    props: {
      class: '',
    },
    children: '',
  },
}

const RadioCard: Card = {
  title: 'Radio',
  text: 'A custom radio button group with animated selection.',
  codeTitle: 'Radio.vue',
  code: radioCode,
  content: {
    type: 'text',
    props: {
      class: '',
    },
    children: '',
  },
}

const SelectCard: Card = {
  title: 'Select',
  text: 'A custom dropdown select with animated opening and closing.',
  codeTitle: 'Select.vue',
  code: selectCode,
  content: {
    type: 'text',
    props: {
      class: '',
    },
    children: '',
  },
}

const SwitchCard: Card = {
  title: 'Switch',
  text: 'A custom toggle switch with animated slider.',
  codeTitle: 'Switch.vue',
  code: switchCode,
  content: {
    type: 'text',
    props: {
      class: '',
    },
    children: '',
  },
}

const GroupedCheckboxCard: Card = {
  title: 'Grouped Checkbox',
  text: 'A checkbox with parent-child selection and indeterminate state for group control.',
  codeTitle: 'GroupedCheckbox.vue',
  code: '',
  content: {
    type: 'text',
    props: {
      class: '',
    },
    children: '',
  },
}

const IconRadioCard: Card = {
  title: 'Icon Radio',
  text: 'A radio button group with icons for selecting themes or modes.',
  codeTitle: 'IconRadio.vue',
  code: '',
  content: {
    type: 'text',
    props: {
      class: '',
    },
    children: '',
  },
}
</script>

<template>
  <div class="flex flex-col gap-20">
    <div id="checkbox">
      <CodeCard
        :card="CheckboxCard"
        :component="Checkbox"
        :is-code-preview="true"
      />
    </div>
    <div id="grouped-checkbox">
      <CodeCard
        :card="GroupedCheckboxCard"
        :component="GroupedCheckbox"
        :is-code-preview="true"
      />
    </div>
    <div id="radio">
      <CodeCard :card="RadioCard" :component="Radio" :is-code-preview="true" />
    </div>
    <div id="icon-radio">
      <CodeCard
        :card="IconRadioCard"
        :component="IconRadio"
        :is-code-preview="true"
      />
    </div>
    <div id="select">
      <CodeCard
        :card="SelectCard"
        :component="Select"
        :is-code-preview="true"
      />
    </div>
    <div id="switch">
      <CodeCard
        :card="SwitchCard"
        :component="Switch"
        :is-code-preview="true"
      />
    </div>
  </div>
</template>
