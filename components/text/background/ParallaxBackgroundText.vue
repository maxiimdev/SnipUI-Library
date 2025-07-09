<script setup lang="ts">
import { ref } from 'vue'

const text = ref('Parallax Text')
const bgImage = ref('/bg2.jpg')
const parallaxX = ref(50)
const parallaxY = ref(50)

// Parallax effect based on mouse movement
const handleMouseMove = (event: MouseEvent) => {
  const { clientX, clientY } = event
  const { innerWidth, innerHeight } = window
  parallaxX.value = 50 + (clientX / innerWidth - 0.5) * 20
  parallaxY.value = 50 + (clientY / innerHeight - 0.5) * 20
}
</script>

<template>
  <ClientOnly>
  <div
    class="relative w-full h-full flex items-center justify-center"
    @mousemove="handleMouseMove"
  >
    <!-- Text with parallax background effect -->
    <h1
      class="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-cover bg-center text-center"
      :style="{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: `${parallaxX}% ${parallaxY}%`,
        letterSpacing: '0.05em',
        backgroundSize: '120%',
        transition: 'background-position 0.2s ease',
      }"
    >
      {{ text }}
    </h1>
  </div>
  </ClientOnly>
</template>
