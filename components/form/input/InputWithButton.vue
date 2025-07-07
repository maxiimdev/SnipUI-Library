<script lang="ts" setup>
import { ref } from 'vue'

const inputValue = ref<string>('')
const isFocused = ref(false)

const handleSubmit = (): void => {
  alert(`Submitted: ${inputValue.value || 'Nothing entered'}`)
}
</script>

<template>
  <ClientOnly>
    <div class="relative w-[40rem] h-[31rem] flex justify-center items-center">
      <div class="main-div rounded-lg shadow-xl w-full max-w-sm p-4">
        <div class="flex items-center gap-3">
          <input
            v-model="inputValue"
            type="text"
            placeholder="Enter text..."
            class="flex-1 px-3 py-2 rounded-md border focus:outline-none text-p"
            :class="{
              'border-component': isFocused || inputValue,
              'main-border': !isFocused && !inputValue,
            }"
            @focus="isFocused = true"
            @blur="isFocused = false"
          />
          <button
            class="px-4 py-2 main-text active-component rounded-md main-text main-div text-md"
            @click="handleSubmit"
          >
            <span class="text-[14px]">Submit</span>
          </button>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped>
/* Isolate styles for CodeCard preview */
.absolute {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
