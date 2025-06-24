<!-- pages/components/text/typography.vue -->
<script lang="ts" setup>
import type { Card } from '~/types'

const props = defineProps<{
  card: Card
}>()

const isPreview = ref(false)
const copied = ref(false)

const gradientCode = props.card.codeCopy

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(gradientCode)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy code: ', err)
  }
}
</script>

<template>
  <div class="mt-5 flex flex-col gap-6">
    <div class="px-5">
      <h1 class="text-4xl">{{ props.card.title }}</h1>
      <p class="text-p text-[14px]">{{ props.card.text }}</p>
    </div>

    <div class="flex flex-col gap-3">
      <!-- Кнопки переключения -->
      <div class="flex gap-2 px-5">
        <button
          class="main-div py-2 px-5 cursor-pointer rounded-xl transition-all duration-200"
          :class="{ 'active-link': isPreview }"
          @click="isPreview = true"
        >
          Preview
        </button>
        <button
          class="main-div py-2 px-5 cursor-pointer rounded-xl transition-all duration-200"
          :class="{ 'active-link': !isPreview }"
          @click="isPreview = false"
        >
          Code
        </button>
      </div>

      <!-- Preview окно -->
      <div
        v-if="isPreview"
        class="border-1 main-border rounded-xl w-3/4 h-[20rem] flex justify-center items-center"
      >
        <span :class="props.card.content.props?.class">
          {{ props.card.content.children }}
        </span>
      </div>

      <!-- Code окно -->
      <div
        v-else
        class="relative border-1 main-border rounded-xl w-3/4 h-[20rem] overflow-hidden"
      >
        <!-- Заголовок редактора -->
        <div
          class="flex items-center justify-between px-4 py-2 border-b main-border code-bg"
        >
          <div class="flex items-center gap-2">
            <span class="text-sm text-gray-400 ml-2">{{
              props.card.codeTitle
            }}</span>
          </div>

          <!-- Кнопка копирования -->
          <button
            @click="copyCode"
            class="flex items-center gap-2 py-1 code-text rounded-md transition-colors duration-200 text-sm"
          >
            <Icon :name="copied ? 'mdi:check' : 'mdi:content-copy'" size="16" />
          </button>
        </div>

        <!-- Код с номерами строк -->
        <div class="flex h-full overflow-auto code-bg text-sm font-mono">
          <!-- Номера строк -->
          <div
            class="flex flex-col main-dark text-gray-600 text-right pr-4 pl-4 py-4 border-r main-border select-none"
          >
            <div class="leading-7" v-for="(item, i) in props.card.num" :key="i">
              {{ item }}
            </div>
          </div>

          <!-- Код -->
          <div class="flex-1 p-4">
            <pre
              class="leading-7 m-0 p-0 whitespace-pre-wrap"
            ><code v-html="props.card.code.trim()"></code></pre>
            <component
              :is="props.card.content.type"
              v-bind="props.card.content.props"
              class="inline-block m-0"
            ></component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Стили для подсветки синтаксиса */
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
