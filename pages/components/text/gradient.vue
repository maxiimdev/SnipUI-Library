<script lang="ts" setup>
import { animatedGradientCode, fireGradientCode, goldLuxuryCode, neonGlowCode, oceanWaveCode, rainbowShimmerCode, staticGradientCode, sunsetGradientCode } from '~/assets/code-examples/text/gradients-codes'
import type { Card } from '~/types/index'

definePageMeta({
  layout: 'sidebar',
})

useState('right-sidebar-text').value = 'On This Page'

useState('right-sidebar-items').value = [
  {
    items: [
      { name: 'Static Gradient', path: '#static-gradient' },
      { name: 'Sunset Gradient', path: '#sunset-gradient' },
      { name: 'Animated Gradient', path: '#animated-gradient' },
      { name: 'Neon Glow', path: '#neon-glow' },
      { name: 'Rainbow Shimmer', path: '#rainbow-shimmer' },
      { name: 'Gold Luxury', path: '#gold-luxury' },
      { name: 'Ocean Wave', path: '#ocean-wave' },
      { name: 'Fire Gradient', path: '#fire-gradient' },
    ],
  },
]

const gradient: Card = {
  title: 'Gradient',
  text: 'Normal static gradient',
  codeTitle: 'gradient.vue',
  code: staticGradientCode,
  content: {
    type: 'text',
    props: {
      class: 'text-6xl bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 text-transparent bg-clip-text font-bold',
    },
    children: 'Static Gradient',
  },
}

const gradientAnimated: Card = {
  title: 'Animated Gradient',
  text: 'Сyclic animated gradient',
  codeTitle: 'animated-gradient.vue',
  code: animatedGradientCode,
  content: {
    type: 'text',
    props: {
      class: 'text-6xl font-bold bg-gradient-to-l from-blue-400 via-indigo-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent animate-gradient w-96',
    },
    children: 'Animated Gradient Text',
  },
}

const sunsetGradient: Card = {
  title: 'Sunset Gradient',
  text: 'Warm sunset colors gradient',
  codeTitle: 'sunset-gradient.vue',
  code: sunsetGradientCode,
  content: {
    type: 'text',
    props: {
      class: 'text-6xl bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 text-transparent bg-clip-text font-bold',
    },
    children: 'Sunset Dreams',
  },
}

const neonGlow: Card = {
  title: 'Neon Glow',
  text: 'Cyberpunk neon effect with glow',
  codeTitle: 'neon-glow.vue',
  code: neonGlowCode,
  content: {
    type: 'text',
    props: {
      class: 'text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent neon-glow',
    },
    children: 'NEON GLOW',
  },
}

const rainbowShimmer: Card = {
  title: 'Rainbow Shimmer',
  text: 'Rainbow gradient with shimmer animation',
  codeTitle: 'rainbow-shimmer.vue',
  code: rainbowShimmerCode,
  content: {
    type: 'text',
    props: {
      class: 'text-6xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent rainbow-shimmer',
    },
    children: 'Rainbow Magic',
  },
}

const goldLuxury: Card = {
  title: 'Gold Luxury',
  text: 'Premium gold gradient effect',
  codeTitle: 'gold-luxury.vue',
  code: goldLuxuryCode,
  content: {
    type: 'text',
    props: {
      class: 'text-6xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-900 bg-clip-text text-transparent gold-luxury',
    },
    children: 'LUXURY GOLD',
  },
}

const oceanWave: Card = {
  title: 'Ocean Wave',
  text: 'Ocean-inspired flowing gradient',
  codeTitle: 'ocean-wave.vue',
  code: oceanWaveCode,
  content: {
    type: 'text',
    props: {
      class: 'text-6xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 via-teal-500 to-blue-600 bg-clip-text text-transparent ocean-wave',
    },
    children: 'Ocean Waves',
  },
}

const fireGradient: Card = {
  title: 'Fire Gradient',
  text: 'Hot fire effect with flickering animation',
  codeTitle: 'fire-gradient.vue',
  code: fireGradientCode,
  content: {
    type: 'text',
    props: {
      class: 'text-6xl font-bold bg-gradient-to-r from-red-600 via-orange-500 via-amber-400 to-yellow-400 bg-clip-text text-transparent animate-fire-flicker [text-shadow:0_0_8px_rgba(234,88,12,0.4)]',
    },
    children: 'FIRE POWER',
  },
}
</script>

<template>
  <div class="flex flex-col gap-20">
    <div :id="'static-gradient'"><CodeCard :card="gradient" /></div>
    <div :id="'sunset-gradient'"><CodeCard :card="sunsetGradient" /></div>
    <div :id="'animated-gradient'"><CodeCard :card="gradientAnimated" /></div>
    <div :id="'neon-glow'"><CodeCard :card="neonGlow" /></div>
    <div :id="'rainbow-shimmer'"><CodeCard :card="rainbowShimmer" /></div>
    <div :id="'gold-luxury'"><CodeCard :card="goldLuxury" /></div>
    <div :id="'ocean-wave'"><CodeCard :card="oceanWave" /></div>
    <div :id="'fire-gradient'"><CodeCard :card="fireGradient" /></div>
  </div>
</template>

<style>
@layer utilities {
  .animate-gradient {
    background-size: 200%;
    animation: gradientFlow 3s linear infinite;
  }
  @keyframes gradientFlow {
    0% { background-position: 200%; }
    100% { background-position: 0%; }
  }

  .neon-glow {
    filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.5));
    animation: neonPulse 2s ease-in-out infinite alternate;
  }

  @keyframes neonPulse {
    from {
      filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.5));
    }
    to {
      filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.8)) drop-shadow(0 0 30px rgba(147, 51, 234, 0.6));
    }
  }

  .rainbow-shimmer {
    background-size: 400% 100%;
    animation: rainbowShimmer 3s ease-in-out infinite;
  }

  @keyframes rainbowShimmer {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .gold-luxury {
    background-image: linear-gradient(45deg, #fbbf24, #f59e0b, #d97706, #92400e, #f59e0b, #fbbf24);
    background-size: 300% 100%;
    animation: goldFlow 4s linear infinite;
    filter: drop-shadow(0 2px 4px rgba(217, 119, 6, 0.3));
  }

  @keyframes goldFlow {
    0% { background-position: 0% 50%; }
    100% { background-position: 300% 50%; }
  }

  .ocean-wave {
    background-size: 300% 100%;
    animation: oceanFlow 8s ease-in-out infinite;
  }

  @keyframes oceanFlow {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .animate-fire-flicker {
    background-size: 300% 100%;
    animation: fireFlicker 2s ease-in-out infinite alternate;
  }

  @keyframes fireFlicker {
    0% {
      background-position: 0% 50%;
      filter: drop-shadow(0 0 8px rgba(234, 88, 12, 0.4)) brightness(1);
    }
    25% {
      background-position: 50% 50%;
      filter: drop-shadow(0 0 12px rgba(234, 88, 12, 0.6)) brightness(1.1);
    }
    50% {
      background-position: 100% 50%;
      filter: drop-shadow(0 0 8px rgba(234, 88, 12, 0.4)) brightness(0.9);
    }
    75% {
      background-position: 75% 50%;
      filter: drop-shadow(0 0 15px rgba(234, 88, 12, 0.7)) brightness(1.2);
    }
    100% {
      background-position: 0% 50%;
      filter: drop-shadow(0 0 10px rgba(234, 88, 12, 0.5)) brightness(1);
    }
  }
}
</style>