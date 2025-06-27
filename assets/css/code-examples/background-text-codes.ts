export const staticBgTextCode = `<template>
  <div class="relative flex items-center justify-center min-h-[300px] bg-gray-900">
    <!-- Text with static image background -->
    <h1
      class="text-4xl md:text-6xl font-bold tracking-wider text-transparent bg-clip-text bg-cover bg-center"
      style="background-image: url('/bg2.jpg')"
    >
      Background Text
    </h1>
    <!-- Overlay for better readability -->
    <div class="absolute inset-0 bg-black opacity-30"></div>
  </div>
</template>

<style scoped>
h1 {
  transition: all 0.3s ease;
}
</style>`

export const parallaxBackgroundTextCode = `<script setup lang="ts">
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
  <div
    class="relative w-full h-full flex items-center justify-center"
    @mousemove="handleMouseMove"
  >
    <!-- Text with parallax background effect -->
    <h1
      class="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-cover bg-center text-center"
      :style="{
        backgroundImage: \`url(\${bgImage})\`,
        backgroundPosition: \`\${parallaxX}% \${parallaxY}%\`,
        letterSpacing: '0.05em',
        backgroundSize: '120%',
        transition: 'background-position 0.2s ease',
      }"
    >
      {{ text }}
    </h1>
  </div>
</template>
`

export const threeDRotateTextCode = `<script lang="ts" setup>
import { ref } from 'vue'

const textStyle = ref({
  transform: 'rotateX(0deg) rotateY(0deg)',
  transition: 'transform 0.5s ease',
})

const handleMouseMove = (event: MouseEvent) => {
  const container = event.currentTarget as HTMLElement
  const rect = container.getBoundingClientRect()
  const x = event.clientX - rect.left - rect.width / 2
  const y = event.clientY - rect.top - rect.height / 2
  const rotateX = -(y / rect.height) * 20
  const rotateY = (x / rect.width) * 20
  
  textStyle.value = {
    transform: \`rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`,
    transition: 'transform 0.1s ease',
  }
}

const resetRotation = () => {
  textStyle.value = {
    transform: 'rotateX(0deg) rotateY(0deg)',
    transition: 'transform 0.5s ease',
  }
}
</script>

<template>
  <div
    class="inline-block perspective-[1000px]"
    @mousemove="handleMouseMove"
    @mouseleave="resetRotation"
  >
    <span
      :style="textStyle"
      class="inline-block text-6xl p-20 font-bold bg-gradient-to-r from-red-400 to-teal-400 bg-clip-text text-transparent"
    >
      3D Text
    </span>
  </div>
</template>

<style scoped>
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
</style>`


export const fillAnimationTextCode = `<template>
  <div class="inline-block">
    <span class="text-6xl font-bold p-10 bg-gradient-to-r from-red-400 from-50% to-gray-800 to-50% bg-[length:200%_100%] bg-[100%] bg-clip-text text-transparent transition-all duration-500 hover:bg-[0%]">
      Fill Text
    </span>
  </div>
</template>

<style scoped>
.bg-clip-text {
  -webkit-background-clip: text;
}
</style>
`

