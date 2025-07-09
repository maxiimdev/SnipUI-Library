<script lang="ts" setup>
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
  const rotateX = -(y / rect.height) * 60
  const rotateY = (x / rect.width) * 60

  textStyle.value = {
    transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
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
  <ClientOnly>
  <div
    class="inline-block perspective-[1000px]"
    @mousemove="handleMouseMove"
    @mouseleave="resetRotation"
  >
    <span
      :style="textStyle"
      class="inline-block text-6xl  p-30 font-bold bg-gradient-to-r from-red-400 to-teal-400 bg-clip-text text-transparent"
    >
      3D Text
    </span>
  </div>
  </ClientOnly>
</template>

<style scoped>
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
</style>
