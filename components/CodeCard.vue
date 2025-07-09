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
const isPreview = ref(!props.isCompact) // Отключаем превью, если isCompact=true
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
  <div
    class="mt-3 flex flex-col w-[40rem] mx-auto items-center gap-3"
    :class="{ 'w-[36rem]': isCompact }"
  >
    <div class="w-full px-5" v-if="card.title || card.text">
      <h1 v-if="card.title" class="text-xl main-text font-medium">
        {{ card.title }}
      </h1>
      <p v-if="card.text" class="text-p text-[14px]">{{ card.text }}</p>
    </div>

    <div class="flex flex-col gap-3 w-full">
      <div v-if="!isCompact" class="flex gap-2 px-3">
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
        :class="[
          'border-1 main-border relative rounded-xl w-full',
          isCompact ? 'h-auto' : 'h-[31rem]',
        ]"
      >
        <button
          v-if="isReload && isPreview"
          @click="restartAnimation"
          class="py-2 px-3 absolute top-3 right-3 cursor-pointer hover:opacity-80 transition-opacity z-50"
          title="Restart animation"
        >
          <Icon name="mdi:refresh" size="20" />
        </button>

        <div
          v-if="isPreview && !isCompact"
          class="h-full flex justify-center items-center"
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
            class="h-full flex items-center justify-center"
          >
            {{ card.content?.children }}
          </span>
        </div>

        <div v-else class="h-full overflow-hidden">
          <div
            class="flex items-center justify-between px-4 py-2 border-b main-border code-bg rounded-t-xl"
          >
            <div class="flex items-center gap-2">
              <span class="text-sm text-gray-400 ml-2">{{
                card.codeTitle
              }}</span>
            </div>
            <button
              @click="copyCode"
              class="flex items-center gap-2 py-1 code-text rounded-md transition-colors duration-200 text-sm"
            >
              <Icon
                :name="copied ? 'mdi:check' : 'mdi:content-copy'"
                size="16"
              />
            </button>
          </div>
          <div class="flex h-full pl-3 overflow-auto code-bg text-sm rounded-b-xl">
            <div class="flex-1 p-3 mb-10 overflow-y-auto">
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
