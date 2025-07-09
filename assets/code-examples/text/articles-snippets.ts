export const truncatedQuoteSnippetCode = `<script lang="ts" setup>
const props = defineProps<{
  quote?: string
  author?: string
}>()
</script>

<template>
  <figure
    class="relative max-w-2xl mx-auto my-8 p-6 bg-[#232323] rounded-lg shadow-md border-l-4 border-[#8181f9]"
  >
    <svg
      class="absolute top-4 left-4 h-8 w-8 text-[#8181f9] opacity-50"
      fill="currentColor"
      viewBox="0 0 32 32"
    >
      <path
        d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
      />
    </svg>
    <blockquote class="mt-2 pl-8 text-[#fff] text-lg italic whitespace-normal">
      {{ props.quote ?? 'The only way to do great work is to love what you do.' }}
    </blockquote>
    <figcaption class="mt-4 text-right text-sm font-semibold text-[#fff] italic">
      — {{ props.author ?? 'Steve Jobs' }}
    </figcaption>
  </figure>
</template>`

export const collapsibleArticleSnippetCode = `<script lang="ts" setup>
const props = defineProps<{
  title?: string
  content?: string
}>()
</script>

<template>
  <div class="relative max-w-2xl mx-auto my-6 p-4 bg-[#232323] rounded-lg shadow-sm border border-[#313131] hover:shadow-md transition-all duration-300 ease-in-out group">
    <div class="max-h-6 overflow-hidden transition-all duration-300 ease-in-out group-hover:max-h-96">
      <span class="text-lg font-semibold text-[#fff]">{{ props.title ?? 'Inspiration' }}</span>
      <p class="mt-2 text-[#797979] text-base">
        {{ props.content ?? 'Success is not the absence of obstacles, but the courage to push through them.' }}
      </p>
    </div>
  </div>
</template>`

export const interactiveCollapsibleCode = `<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  title?: string
  content?: string
}>()

const emits = defineEmits<{
  (e: 'toggle', isExpanded: boolean): void
}>()

const isExpanded = ref(false)

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
  emits('toggle', isExpanded.value)
}
</script>

<template>
  <div
    class="relative max-w-2xl mx-auto my-6 p-4 bg-[#232323] rounded-lg shadow-sm border border-[#313131] hover:shadow-md transition-all duration-300 ease-in-out"
  >
    <span class="text-lg text-[#fff] font-bold">{{ props.title ?? 'Inspiration' }}</span>
    <div
      class="transition-all duration-300 ease-in-out"
      :class="{ 'max-h-12 line-clamp-2': !isExpanded, 'max-h-96': isExpanded }"
    >
      <p
        class="text-[#797979] text-base cursor-pointer"
        @click="toggleExpand"
      >
        {{ props.content ?? 'Success is not the absence of obstacles, but the courage to push through them. It\\'s about finding the strength to keep moving forward, even when the path seems daunting. Every challenge is an opportunity to grow and learn.' }}
      </p>
    </div>
  </div>
</template>`

export const copiedArticle = `<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  title?: string
  content?: string
}>()

const emits = defineEmits<{
  (e: 'copy', text: string): void
}>()

const selectedText = ref('')
const copied = ref(false)

const handleTextSelection = () => {
  const selection = window.getSelection()
  selectedText.value = selection?.toString().trim() || ''
  copied.value = false
}

const copySelectedText = () => {
  if (selectedText.value) {
    navigator.clipboard.writeText(selectedText.value)
    copied.value = true
    emits('copy', selectedText.value)
    setTimeout(() => {
      copied.value = false
      selectedText.value = ''
    }, 1500)
  }
}
</script>

<template>
  <div
    @mouseup="handleTextSelection"
    class="relative max-w-2xl mx-auto my-6 p-4 bg-[#232323] rounded-lg shadow-sm border border-[#313131] hover:shadow-md transition-shadow duration-200"
  >
    <span class="text-lg font-semibold text-[#fff]">{{ props.title ?? 'Key Insight' }}</span>

    <p class="text-[#797979] text-base leading-relaxed">
      {{ props.content ?? 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio animi cum nisi odit perspiciatis sit laboriosam voluptatibus illum corporis quidem. Iste natus error aliquam! Aliquam, autem. Assumenda culpa veniam alias.' }}
    </p>

    <button
      v-if="selectedText"
      @click.stop="copySelectedText"
      class="mt-3 flex items-center gap-2 px-3 py-1.5 text-[#fff] rounded-md transition-colors duration-200 text-sm font-medium hover:bg-[#313131]"
    >
      <svg
        v-if="!copied"
        class="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
      <svg
        v-else
        class="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
      {{ copied ? 'Copied!' : 'Copy' }}
    </button>
  </div>
</template>

<style scoped>
::selection {
  background-color: #4f4f4f;
  color: #dedede;
}
</style>`

export const readAloundCode = `<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  title?: string
  content?: string
  lang?: string
}>()

const emits = defineEmits<{
  (e: 'toggle-read', isReading: boolean): void
}>()

const isReading = ref(false)
const textContent = ref<HTMLElement | null>(null)

const toggleReadAloud = () => {
  if (isReading.value) {
    window.speechSynthesis.cancel()
    isReading.value = false
    emits('toggle-read', false)
  } else {
    const utterance = new SpeechSynthesisUtterance(
      textContent.value?.innerText || props.content || ''
    )
    utterance.lang = props.lang ?? 'en-EN'
    window.speechSynthesis.speak(utterance)
    isReading.value = true
    emits('toggle-read', true)
    utterance.onend = () => {
      isReading.value = false
      emits('toggle-read', false)
    }
  }
}
</script>

<template>
  <div
    class="relative max-w-2xl mx-auto my-6 p-4 bg-[#232323] rounded-lg shadow-sm border border-[#313131] hover:shadow-md transition-all duration-300"
  >
    <span class="text-lg font-semibold text-[#fff]">{{ props.title ?? 'Read Aloud' }}</span>
    <p class="text-[#797979] text-base" ref="textContent">
      {{ props.content ?? 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, itaque ipsa facilis ducimus a enim?' }}
    </p>
    <button class="mt-4 text-[#fff] focus:outline-none hover:text-[#8181f9]" @click="toggleReadAloud">
      <svg
        v-if="!isReading"
        class="w-5 h-5 inline-block mr-1"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M12 4v12a1 1 0 01-2 0V4a1 1 0 012 0zm-5 3v6a1 1 0 01-2 0V7a1 1 0 012 0zm10 0v6a1 1 0 01-2 0V7a1 1 0 012 0z"
        />
      </svg>
      <svg
        v-else
        class="w-5 h-5 inline-block mr-1"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M6 4h8v12H6V4z" />
      </svg>
      {{ isReading ? 'Stop' : 'Voice' }}
    </button>
  </div>
</template>`

export const annotationCode = `<script lang="ts" setup>
import { ref, onUnmounted } from 'vue'

const props = defineProps<{
  title?: string
  content?: string
  annotatedWord?: string
  annotationText?: string
  autoCloseDelay?: number
}>()

const emits = defineEmits<{
  (e: 'toggle-annotation', isVisible: boolean): void
}>()

const showAnnotation = ref(false)
let autoCloseTimer: NodeJS.Timeout | null = null

const toggleAnnotation = () => {
  showAnnotation.value = !showAnnotation.value
  emits('toggle-annotation', showAnnotation.value)
  if (showAnnotation.value) {
    clearTimeout(autoCloseTimer!)
  }
}

const startAutoClose = () => {
  if (showAnnotation.value) {
    autoCloseTimer = setTimeout(() => {
      showAnnotation.value = false
      emits('toggle-annotation', false)
    }, props.autoCloseDelay ?? 2500)
  }
}

onUnmounted(() => {
  if (autoCloseTimer) {
    clearTimeout(autoCloseTimer)
  }
})
</script>

<template>
  <div
    class="relative max-w-2xl mx-auto my-6 p-4 bg-[#232323] rounded-lg shadow-sm border border-[#313131] hover:shadow-md transition-all duration-300"
  >
    <span class="text-lg font-semibold text-[#fff]">{{ props.title ?? 'Annotated Text' }}</span>
    <p class="text-[#797979] text-base">
      The
      <span
        class="relative underline text-[#fff] cursor-pointer"
        @click="toggleAnnotation"
      >
        {{ props.annotatedWord ?? 'paradigm' }}
        <span
          v-if="showAnnotation"
          class="absolute left-0 mt-6 min-w-[20rem] bg-[#191919] text-[#fff] text-sm p-2 rounded shadow-lg z-10 animate-fade-in"
          @animationend="startAutoClose"
        >
          {{ props.annotationText ?? 'Paradigm: A typical example or pattern of something.' }}
          <button
            class="absolute top-1 right-1 text-[#fff] focus:outline-none hover:text-[#f30035]"
            @click.stop="showAnnotation = false"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </span>
      </span>
      shift in technology is remarkable. {{ props.content ?? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsam ullam dolor dolores porro saepe eum laborum tenetur mollitia, blanditiis earum ad. Obcaecati nihil delectus nesciunt. Amet a officiis aliquam?' }}
    </p>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fade-out {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-5px);
  }
}
.animate-fade-in {
  animation: fade-in 0.3s ease-in forwards;
}
.animate-fade-out {
  animation: fade-out 0.3s ease-out forwards;
}
</style>`