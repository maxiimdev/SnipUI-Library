export const basicModalCodes = `<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  title?: string
  content?: string
}>()

const emits = defineEmits<{
  (e: 'open'): void
  (e: 'close'): void
  (e: 'confirm'): void
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

const confirm = () => {
  emits('confirm')
  closeModal()
}
</script>

<template>
  <div>
    <button
      type="button"
      class="px-4 py-2 text-[#fff] bg-[#313131] rounded-md hover:bg-[#f30035] transition-all duration-300"
      @click="openModal"
      aria-label="Open modal"
    >
      Open Modal
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
            <h2 class="text-xl font-semibold text-[#fff]">{{ props.title ?? 'Modal Title' }}</h2>
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
          <p class="text-[#797979] mb-6">{{ props.content ?? 'This is an example of modal content.' }}</p>
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

export const slideInModalCodes = `<script lang="ts" setup>
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
      class="px-4 py-2 text-[#fff] bg-[#313131] rounded-md hover:bg-[#f30035] transition-all duration-300"
      @click="openModal"
      aria-label="Open slide-in modal"
    >
      Open Sidebar
    </button>
    <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/50 z-50 transition-all duration-300"
      @click.self="closeModal"
    >
      <div
        class="fixed left-0 top-0 h-full w-80 bg-[#232323] shadow-xl transform transition-all duration-300"
        :class="{ 'translate-x-0': isOpen, 'translate-x-full': !isOpen }"
      >
        <div class="p-6">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-semibold text-[#fff]">{{ props.title ?? 'Sidebar Modal' }}</h2>
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
          <p class="text-[#797979] mb-6">{{ props.content ?? 'Slide-in modal for settings or menus.' }}</p>
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

export const fullScreenModalCodes = `<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  title?: string
  content?: string
}>()

const emits = defineEmits<{
  (e: 'open'): void
  (e: 'close'): void
  (e: 'save'): void
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

const save = () => {
  emits('save')
  closeModal()
}
</script>

<template>
  <div>
    <button
      type="button"
      class="px-4 py-2 text-[#fff] bg-[#313131] rounded-md hover:bg-[#f30035] transition-all duration-300"
      @click="openModal"
      aria-label="Open full-screen modal"
    >
      Open Full-Screen Modal
    </button>
    <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-[#232323] z-50 transition-all duration-300"
      :class="{ 'opacity-100': isOpen, 'opacity-0': !isOpen }"
    >
      <div class="flex flex-col h-full">
        <div class="p-6 flex justify-between items-center">
          <h2 class="text-xl font-semibold text-[#fff]">{{ props.title ?? 'Full-Screen Modal' }}</h2>
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
        <div class="flex-1 p-6 overflow-auto">
          <p class="text-[#797979]">{{ props.content ?? 'Full-screen modal for forms or content.' }}</p>
        </div>
        <div class="p-6 flex justify-end gap-4">
          <button
            type="button"
            class="px-4 py-2 text-[#fff] bg-[#313131] rounded-md hover:bg-[#797979] transition-all duration-300"
            @click="closeModal"
          >
            Close
          </button>
          <button
            type="button"
            class="px-4 py-2 text-[#fff] bg-[#189157] rounded-md hover:bg-[#f30035] transition-all duration-300"
            @click="save"
          >
            Save
          </button>
        </div>
      </div>
    </div>
    </Teleport>
  </div>
</template>`