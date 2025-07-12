<script lang="ts" setup>
import { ref, watch } from 'vue'
import { codeToHtml } from 'shiki'

const props = defineProps({
  card: {
    type: Object,
    required: true,
  },
  isCodePreview: {
    type: Boolean,
    default: false,
  },
  component: {
    type: Object,
    default: undefined,
  },
  isReload: {
    type: Boolean,
    default: false,
  },
  isCompact: {
    type: Boolean,
    default: false,
  },
})

const colorMode = useColorMode()
const isPreview = ref(!props.isCompact)
const copied = ref(false)
const highlightedCode = ref('')
const componentKey = ref(0)

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
  <div class="w-full max-w-[40rem] mx-auto flex flex-col gap-2 px-4 sm:px-0">
    <!-- Component Info -->
    <div v-if="card.title || card.text" class="space-y-2">
      <div class="flex items-сenter mt-6 mx-2 sm:mx-5">
        <div class="flex flex-col gap-3">
          <h3
            v-if="card.title"
            class="main-text text-2xl sm:text-4xl font-light tracking-tight"
          >
            {{ card.title }}
          </h3>
          <p
            v-if="card.text"
            class="text-p opacity-90 font-light tracking-tight mx-1 text-sm sm:text-base"
          >
            {{ card.text }}
          </p>
        </div>
      </div>
    </div>

    <!-- Component Content -->
    <div class="space-y-4">
      <!-- Tab Navigation -->
      <div v-if="!isCompact" class="flex gap-2 px-2 sm:px-0">
        <button
          @click="isPreview = true"
          :class="[
            'py-2 px-3 sm:px-4 rounded-lg transition-all duration-200 text-sm font-medium',
            isPreview ? 'main-text' : 'active-component-hover text-p',
          ]"
        >
          Preview
        </button>
        <button
          @click="isPreview = false"
          :class="[
            'py-2 px-3 sm:px-4 rounded-lg transition-all duration-200 text-sm font-medium',
            !isPreview ? ' main-text' : 'active-component-hover text-p',
          ]"
        >
          Code
        </button>
      </div>

      <!-- Component Display -->
      <div
        :class="[
          'border main-border relative rounded-xl w-full transition-all duration-300',
          isCompact ? 'h-auto' : 'h-[20rem] sm:h-[31rem]',
        ]"
      >
        <!-- Reload Button -->
        <button
          v-if="isReload && isPreview"
          @click="restartAnimation"
          class="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-lg active-component-hover transition-all duration-200 z-50"
          title="Restart animation"
        >
          <Icon name="mdi:refresh" size="18" class="text-p" />
        </button>

        <!-- Preview Mode -->
        <div
          v-if="isPreview && !isCompact"
          class="h-full flex justify-center items-center p-4 sm:p-6"
        >
          <div
            v-if="isCodePreview && component"
            :class="card.content?.props?.class"
            class="h-full flex items-center justify-center"
          >
            <component
              :is="component"
              :key="componentKey"
              :text="card.content?.children"
              v-bind="card.content?.props || {}"
            />
          </div>
          <span
            v-else
            :class="card.content?.props?.class"
            class="h-full flex items-center justify-center text-p text-2xl sm:text-6xl"
          >
            {{ card.content?.children }}
          </span>
        </div>

        <!-- Code Mode -->
        <div v-else class="h-full overflow-hidden rounded-xl">
          <div
            class="flex items-center justify-between px-3 sm:px-4 py-3 border-b main-border code-bg rounded-t-xl"
          >
            <div class="flex items-center gap-2">
              <span class="text-xs sm:text-sm text-p font-medium truncate">{{
                card.codeTitle
              }}</span>
            </div>
            <button
              @click="copyCode"
              :class="[
                'flex items-center gap-1 sm:gap-2 py-1.5 px-2 sm:px-3 rounded-lg transition-all duration-200 text-xs sm:text-sm font-medium flex-shrink-0',
                copied
                  ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                  : 'active-component-hover code-text',
              ]"
            >
              <Icon
                :name="copied ? 'mdi:check' : 'mdi:content-copy'"
                size="16"
              />
              <span class="hidden sm:inline">{{
                copied ? 'Copied!' : 'Copy'
              }}</span>
            </button>
          </div>
          <div class="flex h-full overflow-auto code-bg rounded-b-xl">
            <div class="flex-1 p-3 sm:p-4 mb-10 overflow-y-auto">
              <div
                v-html="highlightedCode"
                class="shiki break-words whitespace-pre-wrap text-xs sm:text-sm"
                :class="colorMode.value"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
