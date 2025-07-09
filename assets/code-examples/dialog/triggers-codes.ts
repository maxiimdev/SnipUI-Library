export const iconTriggerCodes = `<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  title?: string
  content?: string
}>()

const emits = defineEmits<{
  (e: 'open'): void
  (e: 'close'): void
}>()

const isOpen = ref(false)

const openModal = () => {
  document.body.style.overflow = 'hidden';
  isOpen.value = true;
  emits('open');
};

const closeModal = () => {
  document.body.style.overflow = '';
  isOpen.value = false;
  emits('close');
};
</script>

<template>
  <div>
    <button
      type="button"
      class="p-2 text-[#8181f9] hover:bg-[#313131] rounded-full transition-all duration-300"
      @click="openModal"
      aria-label="Open modal"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    </button>
    <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-all duration-300"
      @click.self="closeModal"
    >
      <div
        class="bg-[#232323] rounded-lg shadow-xl w-full max-w-md transform transition-all duration-300"
        :class="{ 'scale-100 opacity-100': isOpen, 'scale-95 opacity-0': !isOpen }"
      >
        <div class="p-6">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-semibold text-[#fff]">{{ props.title ?? 'Test Modal' }}</h2>
            <button
              type="button"
              class="text-[#797979] hover:text-[#f30035] transition-all duration-300"
              @click="closeModal"
              aria-label="Close modal"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p class="text-[#797979] mb-6">{{ props.content ?? 'Modal opened via icon trigger.' }}</p>
          <div class="flex justify-end gap-4">
            <button
              type="button"
              class="px-4 py-2 text-[#fff] bg-[#313131] rounded-md hover:bg-[#797979] transition-all duration-300"
              @click="closeModal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    </Teleport>
  </div>
</template>`

export const autoOpenTriggerCodes = `<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  title?: string
  content?: string
  delay?: number
}>()

const emits = defineEmits<{
  (e: 'open'): void
  (e: 'close'): void
}>()

const isOpen = ref(false)
let timeoutId: NodeJS.Timeout | null = null

const openModal = () => {
  document.body.style.overflow = 'hidden';
  isOpen.value = true;
  emits('open');
};

const closeModal = () => {
  document.body.style.overflow = '';
  isOpen.value = false;
  emits('close');
};

onMounted(() => {
  timeoutId = setTimeout(() => {
    openModal()
  }, props.delay ?? 3000)
})

onUnmounted(() => {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
})
</script>

<template>
  <div>
    <button
      type="button"
      class="px-4 py-2 text-[#fff] bg-[#313131] rounded-md hover:bg-[#797979] transition-all duration-300"
      @click="openModal"
      aria-label="Open modal manually"
    >
      Open Manually (auto in {{ (props.delay ?? 3000) / 1000 }}s)
    </button>
    <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-all duration-300"
      @click.self="closeModal"
    >
      <div
        class="bg-[#232323] rounded-lg shadow-xl w-full max-w-md transform transition-all duration-300"
        :class="{ 'scale-100 opacity-100': isOpen, 'scale-95 opacity-0': !isOpen }"
      >
        <div class="p-6">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-semibold text-[#fff]">{{ props.title ?? 'Test Modal' }}</h2>
            <button
              type="button"
              class="text-[#797979] hover:text-[#f30035] transition-all duration-300"
              @click="closeModal"
              aria-label="Close modal"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p class="text-[#797979] mb-6">{{ props.content ?? 'Modal opened via auto trigger.' }}</p>
          <div class="flex justify-end gap-4">
            <button
              type="button"
              class="px-4 py-2 text-[#fff] bg-[#313131] rounded-md hover:bg-[#797979] transition-all duration-300"
              @click="closeModal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    </Teleport>
  </div>
</template>`

export const keyPressTriggerCodes = `<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  title?: string
  content?: string
  keyCombo?: { ctrl: boolean; key: string }
}>()

const emits = defineEmits<{
  (e: 'open'): void
  (e: 'close'): void
  (e: 'confirm'): void
}>()

const isOpen = ref(false)

const defaultKeyCombo = { ctrl: true, key: 'm' }

const handleKeyPress = (event: KeyboardEvent) => {
  const combo = props.keyCombo ?? defaultKeyCombo
  if (combo.ctrl && event.ctrlKey && event.key.toLowerCase() === combo.key) {
    openModal()
  }
}

const openModal = () => {
  document.body.style.overflow = 'hidden';
  isOpen.value = true;
  emits('open');
};

const closeModal = () => {
  document.body.style.overflow = '';
  isOpen.value = false;
  emits('close');
};

const confirm = () => {
  emits('confirm')
  closeModal()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyPress)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyPress)
})
</script>

<template>
  <div>
    <p class="text-[#797979]">Press {{ props.keyCombo?.ctrl ?? true ? 'Ctrl + ' : '' }}{{ (props.keyCombo?.key ?? 'm').toUpperCase() }} to open modal</p>
    <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-all duration-300"
      @click.self="closeModal"
    >
      <div
        class="bg-[#232323] rounded-lg shadow-xl w-full max-w-md transform transition-all duration-300"
        :class="{ 'scale-100 opacity-100': isOpen, 'scale-95 opacity-0': !isOpen }"
      >
        <div class="p-6">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-semibold text-[#fff]">{{ props.title ?? 'Test Modal' }}</h2>
            <button
              type="button"
              class="text-[#797979] hover:text-[#f30035] transition-all duration-300"
              @click="closeModal"
              aria-label="Close modal"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p class="text-[#797979] mb-6">{{ props.content ?? 'Modal opened via key press (Ctrl + M).' }}</p>
          <div class="flex justify-end gap-4">
            <button
              type="button"
              class="px-4 py-2 text-[#fff] bg-[#313131] rounded-md hover:bg-[#797979] transition-all duration-300"
              @click="closeModal"
            >
              Cancel
            </button>
            <button
              type="button"
              class="px-4 py-2 text-[#fff] bg-[#189157] rounded-md hover:bg-[#f30035] transition-all duration-300"
              @click="confirm"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
    </Teleport>
  </div>
</template>`

export const hoverTriggerCodes = `<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  title?: string
  content?: string
  hoverDelay?: number
}>()

const emits = defineEmits<{
  (e: 'open'): void
  (e: 'close'): void
  (e: 'confirm'): void
}>()

const isOpen = ref(false)
let hoverTimeout: NodeJS.Timeout | null = null

const startHover = () => {
  hoverTimeout = setTimeout(() => {
    isOpen.value = true
  document.body.style.overflow = 'hidden';
    emits('open')
  }, props.hoverDelay ?? 1500)
}

const cancelHover = () => {
  if (hoverTimeout) {
    clearTimeout(hoverTimeout)
    hoverTimeout = null
  }
}

const closeModal = () => {
  document.body.style.overflow = '';
  isOpen.value = false;
  emits('close');
};

const confirm = () => {
  emits('confirm')
  closeModal()
}
</script>

<template>
  <div>
    <button
      type="button"
      class="p-2 text-[#8181f9] bg-[#232323] rounded-full transition-all duration-300 hover:bg-[#313131]"
      @mouseenter="startHover"
      @mouseleave="cancelHover"
      aria-label="Open modal on hover"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    </button>
    <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-all duration-300"
      @click.self="closeModal"
    >
      <div
        class="bg-[#232323] rounded-lg shadow-xl w-full max-w-md transform transition-all duration-300"
        :class="{ 'scale-100 opacity-100': isOpen, 'scale-95 opacity-0': !isOpen }"
      >
        <div class="p-6">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-semibold text-[#fff]">{{ props.title ?? 'Test Modal' }}</h2>
            <button
              type="button"
              class="text-[#797979] hover:text-[#f30035] transition-all duration-300"
              @click="closeModal"
              aria-label="Close modal"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p class="text-[#797979] mb-6">{{ props.content ?? 'Modal opened via hover trigger (1.5s).' }}</p>
          <div class="flex justify-end gap-4">
            <button
              type="button"
              class="px-4 py-2 text-[#fff] bg-[#313131] rounded-md hover:bg-[#797979] transition-all duration-300"
              @click="closeModal"
            >
              Cancel
            </button>
            <button
              type="button"
              class="px-4 py-2 text-[#fff] bg-[#189157] rounded-md hover:bg-[#f30035] transition-all duration-300"
              @click="confirm"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
    </Teleport>
  </div>
</template>`
