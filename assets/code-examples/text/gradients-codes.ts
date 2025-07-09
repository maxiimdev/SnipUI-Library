export const staticGradientCode = `<script lang="ts" setup>
const props = defineProps<{
  text?: string
}>()
</script>

<template>
  <span class="text-6xl font-bold bg-gradient-to-r from-[#8181f9] via-[#189157] to-[#f30035] text-transparent bg-clip-text">
    {{ props.text ?? 'Static Gradient' }}
  </span>
</template>

<style scoped>
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
</style>`

export const sunsetGradientCode = `<script lang="ts" setup>
const props = defineProps<{
  text?: string
}>()
</script>

<template>
  <span class="text-6xl font-bold bg-gradient-to-r from-[#f59e0b] via-[#f30035] to-[#8181f9] text-transparent bg-clip-text">
    {{ props.text ?? 'Sunset Dreams' }}
  </span>
</template>

<style scoped>
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
</style>`

export const animatedGradientCode = `<script lang="ts" setup>
const props = defineProps<{
  text?: string
}>()
</script>

<template>
  <span class="text-6xl font-bold bg-gradient-to-l from-[#8181f9] via-[#189157] via-[#f30035] to-[#f59e0b] text-transparent bg-clip-text animate-gradient w-96">
    {{ props.text ?? 'Animated Gradient Text' }}
  </span>
</template>

<style scoped>
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
.animate-gradient {
  background-size: 200%;
  animation: gradientFlow 3s linear infinite;
}
@keyframes gradientFlow {
  0% { background-position: 200%; }
  100% { background-position: 0%; }
}
</style>`

export const neonGlowCode = `<script lang="ts" setup>
const props = defineProps<{
  text?: string
}>()
</script>

<template>
  <span class="text-6xl font-bold bg-gradient-to-r from-[#189157] via-[#8181f9] to-[#f30035] text-transparent bg-clip-text neon-glow">
    {{ props.text ?? 'NEON GLOW' }}
  </span>
</template>

<style scoped>
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
.neon-glow {
  filter: drop-shadow(0 0 10px rgba(129, 129, 249, 0.5));
  animation: neonPulse 2s ease-in-out infinite alternate;
}
@keyframes neonPulse {
  from {
    filter: drop-shadow(0 0 10px rgba(129, 129, 249, 0.5));
  }
  to {
    filter: drop-shadow(0 0 20px rgba(129, 129, 249, 0.8)) drop-shadow(0 0 30px rgba(24, 145, 87, 0.6));
  }
}
</style>`

export const rainbowShimmerCode = `<script lang="ts" setup>
const props = defineProps<{
  text?: string
}>()
</script>

<template>
  <span class="text-6xl font-bold bg-gradient-to-r from-[#f30035] via-[#f59e0b] via-[#189157] via-[#8181f9] to-[#f30035] text-transparent bg-clip-text rainbow-shimmer">
    {{ props.text ?? 'Rainbow Magic' }}
  </span>
</template>

<style scoped>
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
.rainbow-shimmer {
  background-size: 400% 100%;
  animation: rainbowShimmer 3s ease-in-out infinite;
}
@keyframes rainbowShimmer {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
</style>`

export const goldLuxuryCode = `<script lang="ts" setup>
const props = defineProps<{
  text?: string
}>()
</script>

<template>
  <span class="text-6xl font-bold bg-gradient-to-r from-[#f59e0b] via-[#d97706] to-[#92400e] text-transparent bg-clip-text gold-luxury">
    {{ props.text ?? 'LUXURY GOLD' }}
  </span>
</template>

<style scoped>
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
.gold-luxury {
  background-image: linear-gradient(45deg, #f59e0b, #d97706, #92400e, #d97706, #f59e0b, #f59e0b);
  background-size: 300% 100%;
  animation: goldFlow 4s linear infinite;
  filter: drop-shadow(0 2px 4px rgba(217, 119, 6, 0.3));
}
@keyframes goldFlow {
  0% { background-position: 0% 50%; }
  100% { background-position: 300% 50%; }
}
</style>`

export const oceanWaveCode = `<script lang="ts" setup>
const props = defineProps<{
  text?: string
}>()
</script>

<template>
  <span class="text-6xl font-bold bg-gradient-to-r from-[#189157] via-[#81e6d9] via-[#2dd4bf] to-[#189157] text-transparent bg-clip-text ocean-wave">
    {{ props.text ?? 'Ocean Waves' }}
  </span>
</template>

<style scoped>
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
.ocean-wave {
  background-size: 300% 100%;
  animation: oceanFlow 8s ease-in-out infinite;
}
@keyframes oceanFlow {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
</style>`

export const fireGradientCode = `<script lang="ts" setup>
const props = defineProps<{
  text?: string
}>()
</script>

<template>
  <span class="text-6xl font-bold bg-gradient-to-r from-[#f30035] via-[#f59e0b] via-[#d97706] to-[#f59e0b] text-transparent bg-clip-text animate-fire-flicker [text-shadow:0_0_8px_rgba(243,0,53,0.4)]">
    {{ props.text ?? 'FIRE POWER' }}
  </span>
</template>

<style scoped>
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
.animate-fire-flicker {
  background-size: 300% 100%;
  animation: fireFlicker 2s ease-in-out infinite alternate;
}
@keyframes fireFlicker {
  0% {
    background-position: 0% 50%;
    filter: drop-shadow(0 0 8px rgba(243, 0, 53, 0.4)) brightness(1);
  }
  25% {
    background-position: 50% 50%;
    filter: drop-shadow(0 0 12px rgba(243, 0, 53, 0.6)) brightness(1.1);
  }
  50% {
    background-position: 100% 50%;
    filter: drop-shadow(0 0 8px rgba(243, 0, 53, 0.4)) brightness(0.9);
  }
  75% {
    background-position: 75% 50%;
    filter: drop-shadow(0 0 15px rgba(243, 0, 53, 0.7)) brightness(1.2);
  }
  100% {
    background-position: 0% 50%;
    filter: drop-shadow(0 0 10px rgba(243, 0, 53, 0.5)) brightness(1);
  }
}
</style>`