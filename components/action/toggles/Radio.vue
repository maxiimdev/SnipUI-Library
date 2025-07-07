<script lang="ts" setup>
import { ref } from 'vue'

const selectedOption = ref('option1')
</script>

<template>
  <div class="flex flex-col gap-2">
    <label class="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        v-model="selectedOption"
        value="option1"
        class="sr-only"
        aria-label="Select option 1"
      />
      <div
        class="w-5 h-5 border-2 main-border rounded-full flex items-center justify-center transition-all duration-300"
        :class="{
          'main-div': selectedOption === 'option1',
          'bg-transparent': selectedOption !== 'option1',
        }"
      >
        <div
          class="w-2.5 h-2.5 component-bg rounded-full"
          :class="{
            'opacity-100': selectedOption === 'option1',
            'opacity-0': selectedOption !== 'option1',
          }"
        ></div>
      </div>
      <span class="main-text">Option 1</span>
    </label>
    <label class="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        v-model="selectedOption"
        value="option2"
        class="sr-only"
        aria-label="Select option 2"
      />
      <div
        class="w-5 h-5 border-2 main-border rounded-full flex items-center justify-center transition-all duration-300"
        :class="{
          'main-div': selectedOption === 'option2',
          'bg-transparent': selectedOption !== 'option2',
        }"
      >
        <div
          class="w-2.5 h-2.5 component-bg rounded-full"
          :class="{
            'opacity-100': selectedOption === 'option2',
            'opacity-0': selectedOption !== 'option2',
          }"
        ></div>
      </div>
      <span class="main-text">Option 2</span>
    </label>
  </div>
</template>
