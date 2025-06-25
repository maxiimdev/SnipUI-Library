<!-- pages/components/text/typography.vue -->
<script lang="ts" setup>
import type { Card } from '~/types'
import Prism from 'prismjs'
import 'prismjs/components/prism-core' // Базовый модуль Prism
import 'prismjs/components/prism-markup' // Для HTML

const props = defineProps<{
  card: Card
}>()

const isPreview = ref(true)
const copied = ref(false)

const gradientCode = props.card.code

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

const highlightedCode = computed(() => {
  return Prism.highlight(props.card.code, Prism.languages.html, 'html')
})

onMounted(() => {
  Prism.highlightAll()
  // Постобработка для выделения специальных тегов
  nextTick(() => {
    const codeElements = document.querySelectorAll('.language-html')
    codeElements.forEach(element => {
      element.innerHTML = element.innerHTML.replace(
        /(<\/?)(template|script|style)([^&]*>)/gi,
        (match, p1, tag, p3) => {
          const className = `token-tag-${tag.toLowerCase()}`
          return `${p1}<span class="${className}">${tag}</span>${p3}`
        }
      )
    })
  })
})
</script>

<template>
  <div class="mt-3 flex flex-col gap-6">
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
        class="border-1 main-border rounded-xl w-3/4 h-[31rem] max-h-full flex justify-center items-center"
      >
        <span
          :class="props.card.content.props?.class"
          class="h-full flex items-center justify-center"
        >
          {{ props.card.content.children }}
        </span>
      </div>

      <!-- Code окно -->
      <div v-else class="relative rounded-xl w-3/4 h-[31rem] overflow-hidden ">
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

        <!-- Код -->
        <div class="flex h-full pl-3 overflow-auto code-bg text-sm font-mono">
          <div class="flex-1 p-3 mb-10 overflow-y-auto">
            <pre><code class="language-html" v-html="highlightedCode"></code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
pre,
code {
  margin: 0;
  padding: 0;
  background: none;
  white-space: pre-wrap; /* Разрешаем перенос строк */
  word-wrap: break-word; /* Естественный перенос длинных слов */
  overflow-wrap: break-word; /* Совместимость с разными браузерами */
  line-height: 1.7; /* Синхронизация с номерами строк */
  border: none !important; /* Убираем бордер */
  outline: none !important; /* Убираем возможный outline */
  box-shadow: none !important; /* Убираем тени */
  text-shadow: none !important; /* Убираем текстовые тени */
}

.language-html {
  color: var(--class); /* Светлая тема */
}

/* Базовый стиль для тегов с переключением темы */
:deep(.token.tag) {
  color: var(--tag); /* Светлая тема */
}

.dark-mode :deep(.token.tag) {
  color: var(--dark-tag); /* Темная тема */
}

:deep(.token.selector) {
  color: var(--tag); /* Светлая тема */
}

.dark-mode :deep(.token.selector) {
  color: var(--dark-tag); /* Темная тема */
}

:deep(.token.artule) {
  color: #ec0a7f; /* Розовый для <template>, фиксированный цвет */
}

.dark-mode :deep(.token.artule) {
  color: #f24ba1; /* Розовый для <template>, фиксированный цвет */
}

/* Специфичные стили для template, script, style с переключением темы */
:deep(.token-tag-template) {
  color: #f472b6; /* Розовый для <template>, фиксированный цвет */
}

.dark-mode :deep(.token-tag-template) {
  color: #f472b6; /* Розовый остается, можно изменить на темный вариант */
}

:deep(.token-tag-script) {
  color: #34d399; /* Зеленый для <script>, фиксированный цвет */
}

.dark-mode :deep(.token-tag-script) {
  color: #34d399; /* Зеленый остается, можно изменить */
}

:deep(.token-tag-style) {
  color: #60a5fa; /* Голубой для <style>, фиксированный цвет */
}

.dark-mode :deep(.token-tag-style) {
  color: #60a5fa; /* Голубой остается, можно изменить */
}

/* Остальные токены с переключением темы */
:deep(.token.attr-name) {
  color: #c26c02; /* Голубой остается, можно изменить */
}

.dark-mode :deep(.token.attr-name) {
  color: #c06900; /* Голубой остается, можно изменить */
}

:deep(.token.attr-value) {
  color: var(--class-text); /* Светлая тема */
}

.dark-mode :deep(.token.attr-value) {
  color: #60a5fa; /* Голубой остается, можно изменить */
}

:deep(.token.string) {
  color: var(--text); /* Светлая тема */
}

.dark-mode :deep(.token.string) {
  color: var(--dark-text); /* Темная тема */
}

:deep(.token.punctuation) {
  color: var(--class); /* Светлая тема */
}

.dark-mode :deep(.token.punctuation) {
  color: var(--dark-tag); /* Темная тема */
}

/* Убираем бордер и тени у контейнера */
:deep(.code-bg) {
  box-shadow: none !important; /* Убираем тени с контейнера */
}
</style>
