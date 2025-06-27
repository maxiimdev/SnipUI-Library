<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Reference to the container element for mouse/touch calculations
const container = ref<HTMLElement>()

// Parallax position values (percentage-based for background-position)
const parallaxX = ref(50)
const parallaxY = ref(50)

// Throttle function to limit event frequency for performance (~60fps)
const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean
  return function (this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Handle mouse movement for parallax effect
const handleMouseMove = throttle((event: MouseEvent) => {
  if (!container.value) return
  const rect = container.value.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  const normalizedX = x / rect.width
  const normalizedY = y / rect.height
  const intensity = 20 // Adjusted for card size
  parallaxX.value = 50 + (normalizedX - 0.5) * intensity
  parallaxY.value = 50 + (normalizedY - 0.5) * intensity
  // Clamp values to prevent overflow
  parallaxX.value = Math.max(0, Math.min(100, parallaxX.value))
  parallaxY.value = Math.max(0, Math.min(100, parallaxY.value))
}, 16)

// Reset parallax position when mouse leaves
const handleMouseLeave = () => {
  parallaxX.value = 50
  parallaxY.value = 50
}

// Handle touch movement for mobile parallax effect
const handleTouchMove = throttle((event: TouchEvent) => {
  if (!container.value || !event.touches[0]) return
  const rect = container.value.getBoundingClientRect()
  const touch = event.touches[0]
  const x = touch.clientX - rect.left
  const y = touch.clientY - rect.top
  const normalizedX = x / rect.width
  const normalizedY = y / rect.height
  const intensity = 20
  parallaxX.value = 50 + (normalizedX - 0.5) * intensity
  parallaxY.value = 50 + (normalizedY - 0.5) * intensity
  parallaxX.value = Math.max(0, Math.min(100, parallaxX.value))
  parallaxY.value = Math.max(0, Math.min(100, parallaxY.value))
}, 16)

// Preload background image for smoother rendering
onMounted(() => {
  const img = new Image()
  img.src = '/bg2.jpg' // Ensure this image exists in public/
})

// Clean up event listeners to prevent memory leaks
onUnmounted(() => {
  container.value?.removeEventListener('mousemove', handleMouseMove)
  container.value?.removeEventListener('mouseleave', handleMouseLeave)
  container.value?.removeEventListener('touchmove', handleTouchMove)
  container.value?.removeEventListener('touchend', handleMouseLeave)
})
</script>

<template>
  <!-- Main container, sized to fit card (w-[40rem] h-[31rem]) -->
  <div
    ref="container"
    class="relative w-full h-full flex items-center justify-center bg-gray-900 overflow-hidden cursor-none"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    @touchmove="handleTouchMove"
    @touchend="handleMouseLeave"
  >
    <!-- Background layer with parallax effect -->
    <div
      class="absolute inset-0 will-change-transform"
      :style="{
        backgroundImage: `url(/bg2.jpg)`,
        backgroundPosition: `${parallaxX}% ${parallaxY}%`,
        backgroundSize: '150%',
        transform: 'translate3d(0, 0, 0)', // Hardware acceleration
        filter: 'blur(0.5px) brightness(1.1)',
      }"
    />

    <!-- Gradient overlay for better text readability -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20"
    />

    <!-- Main text with parallax background image -->
    <h1
      class="relative z-10 text-4xl md:text-5xl font-bold text-transparent bg-clip-text tracking-wider select-none"
      :style="{
        backgroundImage: `url(/bg2.jpg)`,
        backgroundPosition: `${parallaxX + 5}% ${parallaxY + 5}%`,
        backgroundSize: '200%',
        textShadow: '0 0 10px rgba(0,0,0,0.3)',
        filter: 'contrast(1.1) saturate(1.1)',
      }"
    >
      Parallax Text
    </h1>

    <!-- Subtle glow effect following mouse/touch -->
    <div
      class="absolute pointer-events-none opacity-20 w-48 h-48 rounded-full blur-2xl"
      :style="{
        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
        transform: `translate(${(parallaxX - 50) * 1.5}px, ${(parallaxY - 50) * 1.5}px)`,
      }"
    />
  </div>
</template>

<style scoped>
/* Smooth transitions for text */
h1 {
  transition: all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  background-attachment: fixed;
}

/* Smooth transitions for background and glow */
div {
  transition: background-position 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Improve performance with GPU acceleration */
* {
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>