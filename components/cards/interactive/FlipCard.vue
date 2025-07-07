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
    <div class="relative w-[40rem] h-[31rem] flex justify-center items-center">
      <div class="flip-card h-80 w-full max-w-sm">
        <div class="flip-card-inner">
          <div class="flip-card-front main-div flex items-center justify-center p-4 rounded-lg">
            <div class="text-center">
              <div class="text-6xl mb-4">{{ team.icon }}</div>
              <h3 class="text-lg font-semibold main-text mb-2">{{ team.name }}</h3>
              <p class="text-p text-sm">{{ team.role }}</p>
            </div>
          </div>
          <div class="flip-card-back main-div p-4 flex flex-col rounded-lg">
            <div class="flex items-center gap-3 mb-4">
              <img 
                :src="team.avatar" 
                :alt="team.name"
                class="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h4 class="font-semibold main-text">{{ team.name }}</h4>
                <p class="text-p text-sm">{{ team.role }}</p>
              </div>
            </div>
            <p class="text-p mb-4 flex-1 text-sm">{{ team.bio }}</p>
            <div class="space-y-2 mb-4">
              <div class="flex items-center gap-2">
                <span class="text-sm text-p">Experience:</span>
                <span class="text-sm main-text">{{ team.experience }} years</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-sm text-p">Projects:</span>
                <span class="text-sm main-text">{{ team.projects }}+</span>
              </div>
            </div>
            <div class="flex gap-2">
              <button 
                class="flex-1 px-3 py-1 main-text active-component rounded-md transition-all duration-300 text-sm"
                @click="contact"
              >
                Contact
              </button>
              <button 
                class="flex-1 px-3 py-1 main-text active-component rounded-md transition-all duration-300 text-sm"
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