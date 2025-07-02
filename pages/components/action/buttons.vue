<script lang="ts" setup>
import type { Card } from '~/types'
import LoaderBtn from '~/components/action/buttons/LoaderBtn.vue'
import AsyncBtn from '~/components/action/buttons/AsyncBtn.vue'
import ToggleBtn from '~/components/action/buttons/ToggleBtn.vue'
import DropdownBtn from '~/components/action/buttons/DropdownBtn.vue'
import IconBtn from '~/components/action/buttons/IconBtn.vue'
import {
  asyncBtnCode,
  dropdownBtnCode,
  iconBtnCode,
  loaderBtnCode,
  toggleBtnCode,
  tooltipsBtnCode,
} from '~/assets/css/code-examples/action/buttons-codes'
import TooltipsBtn from '~/components/action/buttons/TooltipsBtn.vue'

definePageMeta({
  layout: 'sidebar',
})

useState('right-sidebar-text').value = 'On This Page'

useState('right-sidebar-items').value = [
  {
    items: [
      { name: 'Loader Button', path: '#loader-btn' },
      { name: 'Async Button', path: '#async-btn' },
      { name: 'Toggle Button', path: '#toggle-btn' },
      { name: 'Dropdown Button', path: '#dropdown-btn' },
      { name: 'Icon Button', path: '#icon-btn' },
      { name: 'Tooltips Button', path: '#tooltips-btn' },
    ],
  },
]

const Loader: Card = {
  title: 'Loader Button',
  text: 'A simple loader button',
  codeTitle: 'LoaderBtn.vue',
  code: loaderBtnCode,
  content: {
    type: 'text',
    props: {
      class: '',
    },
    children: 'Click Me',
  },
}

const Async: Card = {
  title: 'Async Button',
  text: 'A button that shows a loading spinner and then displays success or error status.',
  codeTitle: 'AsyncBtn.vue',
  code: asyncBtnCode,
  content: {
    type: 'text',
    props: {
      class: '',
    },
    children: 'Async Action',
  },
}

const Toggle: Card = {
  title: 'Toggle Button',
  text: 'A button that toggles between two states, such as on and off.',
  codeTitle: 'ToggleBtn.vue',
  code: toggleBtnCode,
  content: {
    type: 'text',
    props: {
      class: '',
    },
    children: 'Toggle Me',
  },
}

const Dropdown: Card = {
  title: 'Dropdown Button',
  text: 'A button that opens a dropdown menu with options.',
  codeTitle: 'DropdownBtn.vue',
  code: dropdownBtnCode,
  content: {
    type: 'text',
    props: {
      class: '',
    },
    children: 'Menu',
  },
}

const Icon: Card = {
  title: 'Icon Button',
  text: 'A compact button with an icon that toggles state, such as a favorite button.',
  codeTitle: 'IconBtn.vue',
  code: iconBtnCode,
  content: {
    type: 'text',
    props: {
      class: '',
    },
    children: '',
  },
}

const Tooltips: Card = {
  title: 'Tooltips Button',
  text: 'A set of toggleable icon buttons (like, repost, add) with dynamic tooltips that show on hover and change based on state.',
  codeTitle: 'TooltipsBtn.vue',
  code: tooltipsBtnCode,
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
    <div id="loader-btn">
      <CodeCard :card="Loader" :component="LoaderBtn" :is-code-preview="true" />
    </div>
    <div id="async-btn">
      <CodeCard :card="Async" :component="AsyncBtn" :is-code-preview="true" />
    </div>
    <div id="toggle-btn">
      <CodeCard :card="Toggle" :component="ToggleBtn" :is-code-preview="true" />
    </div>
    <div id="dropdown-btn">
      <CodeCard
        :card="Dropdown"
        :component="DropdownBtn"
        :is-code-preview="true"
      />
    </div>
    <div id="icon-btn">
      <CodeCard :card="Icon" :component="IconBtn" :is-code-preview="true" />
    </div>
    <div id="tooltips-btn">
      <CodeCard
        :card="Tooltips"
        :component="TooltipsBtn"
        :is-code-preview="true"
      />
    </div>
  </div>
</template>
