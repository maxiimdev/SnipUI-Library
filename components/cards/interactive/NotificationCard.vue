<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'

interface Notification {
  id: number
  title: string
  message: string
  type: 'success' | 'warning' | 'info'
  time: string
  isNew: boolean
}

const showNotifications = ref<boolean>(false)
const notificationId = ref<number>(1)

const notifications = reactive<Notification[]>([
  {
    id: 1,
    title: 'New Message',
    message: 'You have a new message from the support team.',
    type: 'info',
    time: '5 min ago',
    isNew: true,
  },
  {
    id: 2,
    title: 'Payment Successful',
    message: 'Your payment of $99 was successfully processed.',
    type: 'success',
    time: '1 hour ago',
    isNew: false,
  },
])

const hasNotifications = computed<boolean>(() => notifications.length > 0)

const toggleNotifications = (): void => {
  showNotifications.value = !showNotifications.value
  if (showNotifications.value) {
    notifications.forEach(notification => {
      notification.isNew = false
    })
  }
}

const getIcon = (type: string): string => {
  switch (type) {
    case 'success':
      return '✅'
    case 'warning':
      return '⚠️'
    case 'info':
      return 'ℹ️'
    default:
      return '📢'
  }
}

const removeNotification = (id: number): void => {
  const index = notifications.findIndex(n => n.id === id)
  if (index > -1) {
    notifications.splice(index, 1)
  }
}

const addNotification = (): void => {
  const types: Array<'success' | 'warning' | 'info'> = [
    'success',
    'warning',
    'info',
  ]
  const randomType = types[Math.floor(Math.random() * types.length)]
  const messages = {
    success: 'Operation completed successfully!',
    warning: 'Attention! Action required.',
    info: 'Information updated.',
  }
  notifications.unshift({
    id: ++notificationId.value,
    title: `Notification #${notificationId.value}`,
    message: messages[randomType],
    type: randomType,
    time: 'Just now',
    isNew: true,
  })
}

const clearAll = (): void => {
  notifications.splice(0, notifications.length)
  showNotifications.value = false
}
</script>

<template>
  <ClientOnly>
    <div class="relative w-[40rem] h-[31rem] flex justify-center items-center">
      <div
        class="main-div rounded-lg shadow-xl w-full max-h-[28rem] max-w-sm transition-all duration-300"
      >
        <div class="p-4 max-h-[28rem] overflow-y-scroll">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold main-text">Notifications</h3>
            <div class="relative">
              <button
                class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 active-component"
                @click="toggleNotifications"
              >
                <span class="text-xl">🔔</span>
              </button>
              <div
                v-if="hasNotifications"
                class="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse"
              >
                {{ notifications.length }}
              </div>
            </div>
          </div>
          <div
            class="space-y-3 transition-all duration-500 overflow-hidden"
            :class="{
              'max-h-0 opacity-0': !showNotifications,
              'max-h-96 opacity-100': showNotifications,
            }"
          >
            <div
              v-for="(notification, index) in notifications"
              :key="notification.id"
              class="p-3 rounded-lg border-l-4 transition-all duration-300 active-component"
              :class="[
                notification.type === 'success'
                  ? 'border-green-500'
                  : notification.type === 'warning'
                    ? 'border-yellow-500'
                    : 'border-indigo-500',
                { 'animate-pulse': notification.isNew },
              ]"
              :style="{ transitionDelay: `${index * 100}ms` }"
            >
              <div class="flex items-start gap-3">
                <div class="mt-1">
                  <span class="text-lg">{{ getIcon(notification.type) }}</span>
                </div>
                <div class="flex-1">
                  <h4 class="font-semibold main-text text-sm">
                    {{ notification.title }}
                  </h4>
                  <p class="text-p mt-1 text-sm">{{ notification.message }}</p>
                  <span class="text-xs text-p mt-2 block">{{
                    notification.time
                  }}</span>
                </div>
                <button
                  class="text-gray-400 hover:text-red-500 transition-colors duration-200"
                  @click="removeNotification(notification.id)"
                >
                  ×
                </button>
              </div>
            </div>
          </div>
          <div class="mt-4 flex gap-3">
            <button
              class="flex-1 px-3 py-1 main-text active-component rounded-md transition-all duration-300 text-sm"
              @click="addNotification"
            >
              Add Notification
            </button>
            <button
              class="flex-1 px-3 py-1 main-text active-component rounded-md transition-all duration-300 text-sm"
              @click="clearAll"
            >
              Clear All
            </button>
          </div>
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
