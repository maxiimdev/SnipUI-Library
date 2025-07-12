<script lang="ts" setup>
import { reactive } from 'vue'

interface TeamMember {
  name: string
  role: string
  icon: string
  avatar: string
  bio: string
  experience: number
  projects: number
}

const team = reactive<TeamMember>({
  name: 'Anna Smirnova',
  role: 'Frontend Developer',
  icon: '👩‍💻',
  avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format',
  bio: 'Creating beautiful and functional user interfaces with a focus on UX/UI design.',
  experience: 5,
  projects: 50
})

const contact = (): void => {
  alert(`Contact ${team.name}`)
}

const viewPortfolio = (): void => {
  alert(`Open portfolio of ${team.name}`)
}
</script>

<template>
  <ClientOnly>
    <div class="relative w-full min-w-[18rem] max-w-[40rem] min-h-[20rem] sm:h-[31rem] flex justify-center items-center px-4 sm:px-0">
      <div class="flip-card h-72 sm:h-80 w-full max-w-sm">
        <div class="flip-card-inner">
          <div class="flip-card-front main-div flex items-center justify-center p-3 sm:p-4 rounded-lg shadow-xl">
            <div class="text-center">
              <div class="text-4xl sm:text-5xl mb-2 sm:mb-4">{{ team.icon }}</div>
              <h3 class="text-base sm:text-lg font-semibold main-text mb-1 sm:mb-2">{{ team.name }}</h3>
              <p class="text-p text-xs sm:text-sm">{{ team.role }}</p>
            </div>
          </div>
          <div class="flip-card-back main-div p-3 sm:p-4 flex flex-col rounded-lg shadow-xl">
            <div class="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <img 
                :src="team.avatar" 
                :alt="team.name"
                class="w-12 sm:w-14 h-12 sm:h-14 rounded-full object-cover"
              />
              <div>
                <h4 class="font-semibold text-sm sm:text-base main-text">{{ team.name }}</h4>
                <p class="text-p text-xs sm:text-sm">{{ team.role }}</p>
              </div>
            </div>
            <p class="text-p mb-3 sm:mb-4 flex-1 text-xs sm:text-sm">{{ team.bio }}</p>
            <div class="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
              <div class="flex items-center gap-1 sm:gap-2">
                <span class="text-xs sm:text-sm text-p">Experience:</span>
                <span class="text-xs sm:text-sm main-text">{{ team.experience }} years</span>
              </div>
              <div class="flex items-center gap-1 sm:gap-2">
                <span class="text-xs sm:text-sm text-p">Projects:</span>
                <span class="text-xs sm:text-sm main-text">{{ team.projects }}+</span>
              </div>
            </div>
            <div class="flex gap-2 sm:gap-3">
              <button 
                class="flex-1 px-2 sm:px-3 py-1 sm:py-1.5 main-text active-component rounded-md transition-all duration-300 text-xs sm:text-sm"
                @click="contact"
              >
                Contact
              </button>
              <button 
                class="flex-1 px-2 sm:px-3 py-1 sm:py-1.5 main-text active-component rounded-md transition-all duration-300 text-xs sm:text-sm"
                @click="viewPortfolio"
              >
                Portfolio
              </button>
            </div>
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

.flip-card {
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
}
</style>