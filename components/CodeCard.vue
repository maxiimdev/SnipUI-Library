<script lang="ts" setup>
import type { Card } from '~/types'
import { ref, watch, type Component } from 'vue'
import { codeToHtml } from 'shiki'

const props = defineProps<{
  card: Card
  isCodePreview?: boolean
  component?: Component
  isReload?: boolean
}>()

const colorMode = useColorMode()
const isPreview = ref(true)
const copied = ref(false)
const highlightedCode = ref('')
const componentKey = ref(0)

// Функция для подсветки кода с учетом текущей темы
const highlightCode = async () => {
  try {
    highlightedCode.value = await codeToHtml(props.card.code, {
      lang: 'vue',
      theme: colorMode.value === 'dark' ? 'vitesse-dark' : 'vitesse-light',
    })
  } catch (error) {
    console.error('Failed to highlight code:', error)
    highlightedCode.value = `<pre><code>${props.card.code}</code></pre>`
  }
}

// Вызываем при монтировании и при изменении темы
highlightCode()
watch(() => colorMode.value, highlightCode, { immediate: true })

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(props.card.code)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy code: ', err)
  }
}

const restartAnimation = () => {
  componentKey.value++
}
</script>

<template>
  <div class="mt-3 flex flex-col w-full items-center gap-6">
    <div class="w-[40rem] px-5">
      <h1 class="text-4xl">{{ props.card.title }}</h1>
      <p class="text-p text-[14px]">{{ props.card.text }}</p>
    </div>

    <div class="flex flex-col gap-3">
      <div class="flex gap-2 px-3">
        <button
          class="active-component-hover py-2 px-3 cursor-pointer rounded-xl"
          @click="isPreview = true"
        >
          Preview
        </button>
        <button
          class="active-component-hover py-2 px-3 cursor-pointer rounded-xl"
          @click="isPreview = false"
        >
          Code
        </button>
      </div>

      <div
        v-if="isPreview"
        class="border-1 main-border relative rounded-xl w-[40rem] h-[31rem] max-h-full flex justify-center items-center"
      >
        <button
          v-if="isReload"
          @click="restartAnimation"
          class="py-2 px-3 absolute top-3 right-3 cursor-pointer hover:opacity-80 transition-opacity z-50"
          title="Restart animation"
        >
          <Icon name="mdi:refresh" size="20" />
        </button>
        <!-- Если это код-превью с компонентом -->
        <div
          v-if="props.isCodePreview && props.component"
          :class="props.card.content.props?.class"
          class="h-full flex items-center justify-center"
        >
          <component
            :is="props.component"
            :key="componentKey"
            :text="props.card.content.children"
            v-bind="props.card.content.props || {}"
          />
        </div>

        <!-- Обычный статичный текст -->
        <span
          v-else
          :class="props.card.content.props?.class"
          class="h-full flex items-center justify-center"
        >
          {{ props.card.content.children }}
        </span>
      </div>

      <div
        v-else
        class="relative rounded-xl w-[40rem] h-[31rem] overflow-hidden"
      >
        <div
          class="flex items-center justify-between px-4 py-2 border-b main-border code-bg"
        >
          <div class="flex items-center gap-2">
            <span class="text-sm text-gray-400 ml-2">{{
              props.card.codeTitle
            }}</span>
          </div>
          <button
            @click="copyCode"
            class="flex items-center gap-2 py-1 code-text rounded-md transition-colors duration-200 text-sm"
          >
            <Icon :name="copied ? 'mdi:check' : 'mdi:content-copy'" size="16" />
          </button>
        </div>

        <div class="flex h-full pl-3 overflow-auto code-bg text-sm">
          <div class="flex-1 p-3 mb-10 overflow-y-auto">
            <!-- Кнопка перезапуска анимации -->

            <div
              v-html="highlightedCode"
              class="shiki break-words whitespace-pre-wrap"
              :class="colorMode.value"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Основные стили для Shiki */
:deep(.shiki) {
  white-space: pre-wrap;
  overflow-wrap: break-word;
  word-break: normal;
  max-width: 100%;
  overflow-x: hidden;
}

:deep(.shiki) {
  background: transparent !important;
  margin: 0;
  padding: 0;
}

:deep(pre.shiki) {
  background: transparent !important;
  margin: 0;
  padding: 0;
  white-space: pre-wrap !important;
  overflow-wrap: break-word;
  line-height: 1.7;
  max-width: 100%;
  overflow-x: hidden;
}

:deep(code) {
  background: transparent !important;
  font-family: 'JetBrains Mono', 'Monaco', 'Consolas', monospace;
  white-space: pre-wrap !important;
  overflow-wrap: break-word;
  display: block;
  width: 100%;
}

:deep(.shiki span) {
  white-space: pre-wrap;
  overflow-wrap: break-word;
  word-break: normal;
}
</style>
