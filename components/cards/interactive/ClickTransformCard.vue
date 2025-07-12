<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'

interface StatItem {
  label: string
  value: string
  animatedValue: string
  targetValue: number
  animationInterval?: number
}

interface Stats {
  title: string
  data: StatItem[]
}

const isTransformed = ref<boolean>(false)
const animationInProgress = ref<boolean>(false)

const stats = reactive<Stats>({
  title: 'Project Analytics',
  data: [
    { label: 'Users', value: '1.2K', animatedValue: '0', targetValue: 1200 },
    { label: 'Sales', value: '€45K', animatedValue: '€0', targetValue: 45000 },
    {
      label: 'Conversion',
      value: '3.8%',
      animatedValue: '0%',
      targetValue: 3.8,
    },
    { label: 'Growth', value: '+23%', animatedValue: '0%', targetValue: 23 },
  ],
})

onMounted(() => {
  return () => {
    stats.data.forEach(stat => {
      if (stat.animationInterval) {
        clearInterval(stat.animationInterval)
      }
    })
  }
})

const transform = (): void => {
  if (animationInProgress.value) return

  isTransformed.value = !isTransformed.value

  if (isTransformed.value) {
    animateStats()
  } else {
    resetStats()
  }
}

const animateStats = (): void => {
  animationInProgress.value = true

  stats.data.forEach((stat, index) => {
    setTimeout(() => {
      const duration = 1000
      const steps = 30
      const increment = stat.targetValue / steps
      let currentValue = 0

      if (stat.animationInterval) {
        clearInterval(stat.animationInterval)
      }

      stat.animationInterval = setInterval(() => {
        currentValue += increment

        if (currentValue >= stat.targetValue) {
          currentValue = stat.targetValue
          clearInterval(stat.animationInterval)
          if (index === stats.data.length - 1) {
            animationInProgress.value = false
          }
        }

        if (stat.label === 'Users') {
          stat.animatedValue =
            currentValue >= 1000
              ? `${Math.round(currentValue / 100) / 10}K`
              : Math.round(currentValue).toString()
        } else if (stat.label === 'Sales') {
          stat.animatedValue =
            currentValue >= 1000
              ? `€${Math.round(currentValue / 1000)}K`
              : `€${Math.round(currentValue)}`
        } else if (stat.label === 'Conversion') {
          stat.animatedValue = `${currentValue.toFixed(1)}%`
        } else if (stat.label === 'Growth') {
          stat.animatedValue = `+${Math.round(currentValue)}%`
        }
      }, duration / steps) as unknown as number
    }, index * 200)
  })
}

const resetStats = (): void => {
  animationInProgress.value = true

  stats.data.forEach((stat, index) => {
    setTimeout(() => {
      const duration = 500
      const steps = 15
      const decrement = stat.targetValue / steps
      let currentValue = stat.targetValue

      if (stat.animationInterval) {
        clearInterval(stat.animationInterval)
      }

      stat.animationInterval = setInterval(() => {
        currentValue -= decrement

        if (currentValue <= 0) {
          currentValue = 0
          clearInterval(stat.animationInterval)
          if (index === stats.data.length - 1) {
            animationInProgress.value = false
          }
        }

        if (stat.label === 'Users') {
          stat.animatedValue = '0'
        } else if (stat.label === 'Sales') {
          stat.animatedValue = '€0'
        } else if (stat.label === 'Conversion') {
          stat.animatedValue = '0%'
        } else if (stat.label === 'Growth') {
          stat.animatedValue = '0%'
        }
      }, duration / steps) as unknown as number
    }, index * 100)
  })
}
</script>

<template>
  <ClientOnly>
    <div class="relative w-full max-w-[24rem] sm:max-w-[40rem] min-h-[20rem] sm:h-[31rem] flex justify-center items-center px-4 sm:px-0">
      <div
        class="main-div rounded-lg shadow-xl w-full max-w-[20rem] sm:max-w-sm transition-all duration-500 cursor-pointer"
        @click="transform"
      >
        <div class="p-3 sm:p-4">
          <div class="flex items-center justify-between mb-3 sm:mb-4">
            <h3 class="text-base sm:text-lg font-semibold main-text">{{ stats.title }}</h3>
            <div
              class="w-8 sm:w-10 h-8 sm:h-10 rounded-full flex items-center justify-center active-component"
            >
              <span class="text-lg sm:text-xl">{{ isTransformed ? '📊' : '📈' }}</span>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
            <div
              v-for="(stat, index) in stats.data"
              :key="stat.label"
              class="text-center p-3 sm:p-4 rounded-lg transition-all duration-500 active-component"
              :style="{ transitionDelay: `${index * 100}ms` }"
            >
              <div class="text-base sm:text-lg font-semibold main-text mb-1 sm:mb-1">
                {{ isTransformed ? stat.animatedValue : stat.value }}
              </div>
              <div class="text-xs sm:text-sm text-p">{{ stat.label }}</div>
            </div>
          </div>
          <div class="text-center">
            <button
              class="px-2 sm:px-3 py-1 sm:py-1.5 main-text active-component rounded-md transition-all duration-300 text-xs sm:text-sm"
              :class="{ 'bg-indigo-700 text-white': isTransformed }"
              @click.stop="transform"
            >
              {{ isTransformed ? 'Hide Details' : 'Show Stats' }}
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