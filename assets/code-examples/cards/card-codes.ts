export const productCardCodes = `<script lang="ts" setup>
import { ref, reactive } from 'vue'

interface Product {
  name: string
  price: number
  originalPrice: number
  discount: number
  description: string
  image: string
  rating: number
}

const props = defineProps<{
  product?: Product
}>()

const emits = defineEmits<{
  (e: 'add-to-cart'): void
}>()

const isHovered = ref<boolean>(false)

const defaultProduct = reactive<Product>({
  name: 'iPhone 15 Pro',
  price: 999,
  originalPrice: 1199,
  discount: 17,
  description: 'Latest flagship smartphone with cutting-edge features.',
  image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
  rating: 4.8
})

const product = props.product ?? defaultProduct

const addToCart = (): void => {
  emits('add-to-cart')
}
</script>

<template>
  <div>
    <div 
      class="bg-[#232323] rounded-lg shadow-xl w-full max-w-md transition-all duration-300 hover:shadow-2xl hover:scale-105"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <div class="relative overflow-hidden">
        <img 
          :src="product.image" 
          :alt="product.name"
          class="w-full h-48 object-cover rounded-t-lg transition-transform duration-300"
          :class="{ 'scale-110': isHovered }"
        />
        <div 
          class="absolute top-4 right-4 bg-[#f30035] text-[#fff] px-2 py-1 rounded-full text-sm font-medium transition-all duration-300"
          :class="{ 'scale-110': isHovered }"
        >
          -{{ product.discount }}%
        </div>
      </div>
      <div class="p-6">
        <h3 class="text-xl font-semibold text-[#fff] mb-2">{{ product.name }}</h3>
        <p class="text-[#797979] mb-4">{{ product.description }}</p>
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-2">
            <span class="text-xl font-bold text-[#fff]">$\{{ product.price }}</span>
            <span class="text-sm text-[#797979] line-through">$\{{ product.originalPrice }}</span>
          </div>
          <div class="flex items-center gap-1">
            <span class="text-[#8181f9]">★</span>
            <span class="text-sm text-[#797979]">{{ product.rating }}</span>
          </div>
        </div>
        <button 
          class="w-full px-4 py-2 text-[#fff] bg-[#313131] rounded-md transition-all duration-300 hover:bg-[#f30035]"
          @click="addToCart"
        >
          {{ isHovered ? 'Add to Cart' : 'Buy Now' }}
        </button>
      </div>
    </div>
  </div>
</template>`

export const imageCardCodes = `<script lang="ts" setup>
const props = defineProps<{
  title?: string
  description?: string
  image?: string
}>()
</script>

<template>
  <div>
    <div class="bg-[#232323] rounded-lg shadow-xl w-full max-w-md">
      <img
        :src="props.image ?? 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400'"
        :alt="props.title ?? 'Feature'"
        class="w-full h-56 object-cover rounded-t-lg"
      />
      <div class="p-6">
        <h2 class="text-xl font-semibold text-[#fff]">{{ props.title ?? 'Feature Title' }}</h2>
        <p class="text-[#797979] mt-2">{{ props.description ?? 'Brief description of the feature or item.' }}</p>
      </div>
    </div>
  </div>
</template>`

export const portfolioCardCodes = `<script lang="ts" setup>
const props = defineProps<{
  title?: string
  description?: string
  image?: string
  rating?: number
  tags?: string[]
}>()
</script>

<template>
  <div>
    <div class="bg-[#232323] rounded-lg shadow-xl w-full max-w-md">
      <div class="relative overflow-hidden">
        <img 
          :src="props.image ?? 'https://picsum.photos/400/200?random=1'"
          :alt="props.title ?? 'Portfolio Project'"
          class="w-full h-48 object-cover rounded-t-lg"
        />
      </div>
      <div class="p-6">
        <h3 class="text-xl font-semibold text-[#fff] mb-2">{{ props.title ?? 'Portfolio Project' }}</h3>
        <p class="text-[#797979] mb-4">{{ props.description ?? 'A modern web application with sleek design and robust functionality.' }}</p>
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-1">
            <span class="text-[#8181f9]">★★★★★</span>
            <span class="text-sm text-[#797979]">{{ props.rating ?? 4.9 }}</span>
          </div>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tag in (props.tags ?? ['Vue', 'TypeScript', 'UI/UX'])"
              :key="tag"
              class="px-2 py-1 bg-[#313131] text-[#fff] rounded-full text-xs"
            >
              {{ tag }}
            </span>
          </div>
        </div>
        <button 
          class="w-full px-4 py-2 text-[#fff] bg-[#313131] rounded-md transition-all duration-300 hover:bg-[#f30035]"
        >
          View Project
        </button>
      </div>
    </div>
  </div>
</template>`

export const blogCardCodes = `<script lang="ts" setup>
const props = defineProps<{
  title?: string
  description?: string
  image?: string
  author?: string
  date?: string
}>()
</script>

<template>
  <div>
    <div class="bg-[#232323] rounded-lg shadow-xl w-full max-w-md">
      <div class="relative overflow-hidden">
        <img 
          :src="props.image ?? 'https://picsum.photos/400/200?random=2'"
          :alt="props.title ?? 'Blog Post'"
          class="w-full h-48 object-cover rounded-t-lg"
        />
      </div>
      <div class="p-6">
        <h3 class="text-xl font-semibold text-[#fff] mb-2">{{ props.title ?? 'Blog Post Title' }}</h3>
        <p class="text-[#797979] mb-4">{{ props.description ?? 'A deep dive into modern web development trends and best practices.' }}</p>
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-2">
            <span class="text-sm text-[#797979]">{{ props.author ?? 'By John Doe' }}</span>
            <span class="text-sm text-[#797979]">•</span>
            <span class="text-sm text-[#797979]">{{ props.date ?? 'Jul 7, 2025' }}</span>
          </div>
        </div>
        <button 
          class="w-full px-4 py-2 text-[#fff] bg-[#313131] rounded-md transition-all duration-300 hover:bg-[#f30035]"
        >
          Read More
        </button>
      </div>
    </div>
  </div>
</template>`

export const hoverExpandCardCodes = `<script lang="ts" setup>
import { ref, reactive } from 'vue'

interface Service {
  title: string
  shortDescription: string
  features: string[]
}

const props = defineProps<{
  service?: Service
}>()

const emits = defineEmits<{
  (e: 'start-service'): void
}>()

const isExpanded = ref<boolean>(false)

const defaultService = reactive<Service>({
  title: 'Web Development',
  shortDescription: 'Building modern web applications with cutting-edge technologies.',
  features: [
    'Vue.js & React development',
    'TypeScript integration',
    'Responsive design',
    'API integration',
    'Performance optimization'
  ]
})

const service = props.service ?? defaultService

const startService = (): void => {
  emits('start-service')
}
</script>

<template>
  <div>
    <div 
      class="bg-[#232323] rounded-lg shadow-xl w-full max-w-md transition-all duration-500 cursor-pointer hover:shadow-2xl hover:scale-105"
      :class="{ 'h-80': !isExpanded, 'h-96': isExpanded }"
      @mouseenter="isExpanded = true"
      @mouseleave="isExpanded = false"
    >
      <div class="p-6 h-full flex flex-col">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-12 h-12 bg-[#313131] rounded-full flex items-center justify-center">
            <span class="text-2xl">🚀</span>
          </div>
          <h3 class="text-xl font-semibold text-[#fff]">{{ service.title }}</h3>
        </div>
        <p class="text-[#797979] mb-6">{{ service.shortDescription }}</p>
        <div 
          class="transition-all duration-500 overflow-hidden"
          :class="{ 'max-h-0 opacity-0': !isExpanded, 'max-h-40 opacity-100': isExpanded }"
        >
          <div class="space-y-3">
            <h4 class="font-semibold text-sm text-[#fff]">Features:</h4>
            <ul class="space-y-2">
              <li v-for="feature in service.features" :key="feature" class="flex items-center gap-2">
                <span class="text-[#189157]">✓</span>
                <span class="text-sm text-[#797979]">{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-auto">
          <button 
            class="w-full px-4 py-2 text-[#fff] bg-[#313131] rounded-md transition-all duration-300 hover:bg-[#f30035]"
            @click="startService"
          >
            Start Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>`

export const imageSwitchCardCodes = `<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'

interface Portfolio {
  title: string
  description: string
  images: string[]
  technologies: string[]
}

const props = defineProps<{
  portfolio?: Portfolio
}>()

const emits = defineEmits<{
  (e: 'view-project'): void
  (e: 'view-code'): void
}>()

const currentImageIndex = ref<number>(0)

const defaultPortfolio = reactive<Portfolio>({
  title: 'E-commerce Platform',
  description: 'A modern e-commerce binoculars with intuitive interface.',
  images: [
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
    'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400'
  ],
  technologies: ['Vue 3', 'TypeScript', 'Tailwind', 'Node.js']
})

const portfolio = props.portfolio ?? defaultPortfolio

const currentImage = computed(() => portfolio.images[currentImageIndex.value])

const switchImage = (): void => {
  currentImageIndex.value = (currentImageIndex.value + 1) % portfolio.images.length
}

const resetImage = (): void => {
  currentImageIndex.value = 0
}

const viewProject = (): void => {
  emits('view-project')
}

const viewCode = (): void => {
  emits('view-code')
}
</script>

<template>
  <div>
    <div 
      class="bg-[#232323] rounded-lg shadow-xl w-full max-w-md transition-all duration-300 hover:shadow-2xl hover:scale-105"
      @mouseenter="switchImage"
      @mouseleave="resetImage"
    >
      <div class="relative overflow-hidden h-48">
        <img 
          :src="currentImage" 
          :alt="portfolio.title"
          class="w-full h-full object-cover transition-all duration-500"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div class="absolute bottom-4 left-4 text-[#fff] text-sm">
          {{ currentImageIndex + 1 }} / {{ portfolio.images.length }}
        </div>
      </div>
      <div class="p-6">
        <h3 class="text-xl font-semibold text-[#fff] mb-2">{{ portfolio.title }}</h3>
        <p class="text-[#797979] mb-4">{{ portfolio.description }}</p>
        <div class="flex flex-wrap justify-center gap-2 mb-4">
          <span 
            v-for="tech in portfolio.technologies" 
            :key="tech"
            class="px-3 py-1 bg-[#313131] text-[#fff] rounded-full text-sm"
          >
            {{ tech }}
          </span>
        </div>
        <div class="flex gap-3">
          <button 
            class="flex-1 px-4 py-2 text-[#fff] bg-[#313131] rounded-md transition-all duration-300 hover:bg-[#f30035]"
            @click="viewProject"
          >
            View
          </button>
          <button 
            class="flex-1 px-4 py-2 text-[#fff] bg-[#313131] rounded-md transition-all duration-300 hover:bg-[#f30035]"
            @click="viewCode"
          >
            Code
          </button>
        </div>
      </div>
    </div>
  </div>
</template>`

export const flipCardCodes = `<script lang="ts" setup>
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

const props = defineProps<{
  team?: TeamMember
}>()

const emits = defineEmits<{
  (e: 'contact'): void
  (e: 'view-portfolio'): void
}>()

const defaultTeam = reactive<TeamMember>({
  name: 'Anna Smirnova',
  role: 'Frontend Developer',
  icon: '👩‍💻',
  avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format',

  bio: 'Creating beautiful and functional user interfaces with a focus on UX/UI design.',
  experience: 5,
  projects: 50
})

const team = props.team ?? defaultTeam

const contact = (): void => {
  emits('contact')
}

const viewPortfolio = (): void => {
  emits('view-portfolio')
}
</script>

<template>
  <div class="flip-card h-96 w-96">
    <div class="flip-card-inner">
      <div class="flip-card-front bg-[#232323] flex items-center justify-center p-6 rounded-lg">
        <div class="text-center">
          <div class="text-6xl mb-4">{{ team.icon }}</div>
          <h3 class="text-xl font-semibold text-[#fff] mb-2">{{ team.name }}</h3>
          <p class="text-[#797979]">{{ team.role }}</p>
        </div>
      </div>
      <div class="flip-card-back bg-[#232323] p-6 flex flex-col rounded-lg">
        <div class="flex items-center gap-3 mb-4">
          <img 
            :src="team.avatar" 
            :alt="team.name"
            class="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h4 class="font-semibold text-[#fff]">{{ team.name }}</h4>
            <p class="text-[#797979]">{{ team.role }}</p>
          </div>
        </div>
        <p class="text-[#797979] mb-4 flex-1">{{ team.bio }}</p>
        <div class="space-y-2 mb-4">
          <div class="flex items-center gap-2">
            <span class="text-sm text-[#797979]">Experience:</span>
            <span class="text-sm text-[#fff]">{{ team.experience }} years</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-sm text-[#797979]">Projects:</span>
            <span class="text-sm text-[#fff]">{{ team.projects }}+</span>
          </div>
        </div>
        <div class="flex gap-2">
          <button 
            class="flex-1 px-4 py-2 text-[#fff] bg-[#313131] rounded-md transition-all duration-300 hover:bg-[#f30035]"
            @click="contact"
          >
            Contact
          </button>
          <button 
            class="flex-1 px-4 py-2 text-[#fff] bg-[#313131] rounded-md transition-all duration-300 hover:bg-[#f30035]"
            @click="viewPortfolio"
          >
            Portfolio
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
</style>`

export const clickTransformCardCodes = `<script lang="ts" setup>
import { ref, reactive } from 'vue'

interface StatItem {
  label: string
  value: string
  animatedValue: string
  targetValue: number
}

interface Stats {
  title: string
  data: StatItem[]
}

const props = defineProps<{
  stats?: Stats
}>()

const emits = defineEmits<{
  (e: 'transform'): void
}>()

const isTransformed = ref<boolean>(false)

const defaultStats = reactive<Stats>({
  title: 'Project Analytics',
  data: [
    { label: 'Users', value: '1.2K', animatedValue: '0', targetValue: 1200 },
    { label: 'Sales', value: '€45K', animatedValue: '€0', targetValue: 45000 },
    { label: 'Conversion', value: '3.8%', animatedValue: '0%', targetValue: 38 },
    { label: 'Growth', value: '+23%', animatedValue: '0%', targetValue: 23 }
  ]
})

const stats = props.stats ?? defaultStats

const transform = (): void => {
  isTransformed.value = !isTransformed.value
  emits('transform')
  if (isTransformed.value) {
    animateStats()
  } else {
    resetStats()
  }
}

const animateStats = (): void => {
  stats.data.forEach((stat, index) => {
    setTimeout(() => {
      const duration = 1000
      const steps = 30
      const stepValue = stat.targetValue / steps
      let currentValue = 0
      const interval = setInterval(() => {
        currentValue += stepValue
        if (currentValue >= stat.targetValue) {
          currentValue = stat.targetValue
          clearInterval(interval)
        }
        if (stat.label === 'Users') {
          stat.animatedValue = \`\${Math.round(currentValue / 100) / 10}K\`
        } else if (stat.label === 'Sales') {
          stat.animatedValue = \`€\${Math.round(currentValue / 1000)}K\`
        } else if (stat.label === 'Conversion') {
          stat.animatedValue = \`\${(currentValue / 10).toFixed(1)}%\`
        } else if (stat.label === 'Growth') {
          stat.animatedValue = \`+\${Math.round(currentValue)}%\`
        }
      }, duration / steps)
    }, index * 200)
  })
}

const resetStats = (): void => {
  stats.data.forEach(stat => {
    stat.animatedValue = '0'
  })
}
</script>

<template>
  <div>
    <div
      class="bg-[#232323] rounded-lg shadow-xl w-full max-w-md transition-all duration-500 cursor-pointer hover:shadow-2xl hover:scale-105"
      @click="transform"
    >
      <div class="p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-semibold text-[#fff]">{{ stats.title }}</h3>
          <div
            class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-[#313131]"
          >
            <span class="text-xl">{{ isTransformed ? '📊' : '📈' }}</span>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 mb-6">
          <div
            v-for="(stat, index) in stats.data"
            :key="stat.label"
            class="text-center p-4 rounded-lg transition-all duration-500 bg-[#313131]"
            :style="{ transitionDelay: \`\${index * 100}ms\` }"
          >
            <div class="text-xl font-bold text-[#fff] mb-1">
              {{ isTransformed ? stat.animatedValue : stat.value }}
            </div>
            <div class="text-sm text-[#797979]">{{ stat.label }}</div>
          </div>
        </div>
        <div class="text-center">
          <button
            class="px-6 py-2 text-[#fff] bg-[#313131] rounded-md transition-all duration-300 hover:bg-[#f30035]"
            @click="transform"
          >
            {{ isTransformed ? 'Hide Details' : 'Show Stats' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>`


