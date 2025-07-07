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

const isHovered = ref<boolean>(false)

const product = reactive<Product>({
  name: 'iPhone 15 Pro',
  price: 999,
  originalPrice: 1199,
  discount: 17,
  description: 'Latest flagship smartphone with cutting-edge features.',
  image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
  rating: 4.8
})

const addToCart = (): void => {
  alert(\`\${product.name} added to cart!\`)
}
</script>

<template>
  <div>
    <div 
      class="main-div rounded-lg shadow-xl w-full max-w-md transition-all duration-300 hover:shadow-2xl hover:scale-105"
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
          class="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium transition-all duration-300"
          :class="{ 'scale-110': isHovered }"
        >
          -\${product.discount}%
        </div>
      </div>
      <div class="p-6">
        <h3 class="text-xl font-semibold main-text mb-2">\${product.name}</h3>
        <p class="text-p mb-4">\${product.description}</p>
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-2">
            <span class="text-xl font-bold main-text">$\${product.price}</span>
            <span class="text-sm text-p line-through">$\${product.originalPrice}</span>
          </div>
          <div class="flex items-center gap-1">
            <span class="text-yellow-400">★</span>
            <span class="text-sm text-p">\${product.rating}</span>
          </div>
        </div>
        <button 
          class="w-full px-4 py-2 main-text active-component rounded-md transition-all duration-300"
          :class="{ 'bg-indigo-700': isHovered }"
          @click="addToCart"
        >
          \${isHovered ? 'Add to Cart' : 'Buy Now'}
        </button>
      </div>
    </div>
  </div>
</template>`

export const imageCardCodes = `<script lang="ts" setup>
// No script needed for static card
</script>

<template>
  <div>
    <div class="main-div rounded-lg shadow-xl w-full max-w-md">
      <img
        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400"
        alt="Feature"
        class="w-full h-56 object-cover rounded-t-lg"
      >
      <div class="p-6">
        <h2 class="text-xl font-semibold main-text">Feature Title</h2>
        <p class="text-p mt-2">Brief description of the feature or item.</p>
      </div>
    </div>
  </div>
</template>`

export const portfolioCardCodes = `<script lang="ts" setup>
// No script needed for fully static card
</script>

<template>
  <div>
    <div class="main-div rounded-lg shadow-xl w-full max-w-md">
      <div class="relative overflow-hidden">
        <img 
          src="https://picsum.photos/400/200?random=1"
          alt="Portfolio Project"
          class="w-full h-48 object-cover rounded-t-lg"
        />
      </div>
      <div class="p-6">
        <h3 class="text-xl font-semibold main-text mb-2">Portfolio Project</h3>
        <p class="text-p mb-4">A modern web application with sleek design and robust functionality.</p>
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-1">
            <span class="text-yellow-400">★★★★★</span>
            <span class="text-sm text-p">4.9</span>
          </div>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tag in ['Vue', 'TypeScript', 'UI/UX']"
              :key="tag"
              class="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs main-text"
            >
              \${tag}
            </span>
          </div>
        </div>
        <button 
          class="w-full px-4 py-2 main-text active-component rounded-md bg-indigo-700 text-white"
        >
          View Project
        </button>
      </div>
    </div>
  </div>
</template>`

export const blogCardCodes = `<script lang="ts" setup>
// No script needed for fully static card
</script>

<template>
  <div>
    <div class="main-div rounded-lg shadow-xl w-full max-w-md">
      <div class="relative overflow-hidden">
        <img 
          src="https://picsum.photos/400/200?random=2"
          alt="Blog Post"
          class="w-full h-48 object-cover rounded-t-lg"
        />
      </div>
      <div class="p-6">
        <h3 class="text-xl font-semibold main-text mb-2">Blog Post Title</h3>
        <p class="text-p mb-4">A deep dive into modern web development trends and best practices.</p>
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-2">
            <span class="text-sm text-p">By John Doe</span>
            <span class="text-sm text-p">•</span>
            <span class="text-sm text-p">Jul 7, 2025</span>
          </div>
        </div>
        <button 
          class="w-full px-4 py-2 main-text active-component rounded-md bg-indigo-700 text-white"
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

const isExpanded = ref<boolean>(false)

const service = reactive<Service>({
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

const startService = (): void => {
  alert('Starting the project!')
}
</script>

<template>
  <div>
    <div 
      class="main-div rounded-lg shadow-xl w-full max-w-md transition-all duration-500 cursor-pointer hover:shadow-2xl hover:scale-105"
      :class="{ 'h-80': !isExpanded, 'h-96': isExpanded }"
      @mouseenter="isExpanded = true"
      @mouseleave="isExpanded = false"
    >
      <div class="p-6 h-full flex flex-col">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
            <span class="text-2xl">🚀</span>
          </div>
          <h3 class="text-xl font-semibold main-text">\${service.title}</h3>
        </div>
        <p class="text-p mb-6">\${service.shortDescription}</p>
        <div 
          class="transition-all duration-500 overflow-hidden"
          :class="{ 'max-h-0 opacity-0': !isExpanded, 'max-h-40 opacity-100': isExpanded }"
        >
          <div class="space-y-3">
            <h4 class="font-semibold text-sm main-text">Features:</h4>
            <ul class="space-y-2">
              <li v-for="feature in service.features" :key="feature" class="flex items-center gap-2">
                <span class="text-green-300">✓</span>
                <span class="text-sm text-p">\${feature}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-auto">
          <button 
            class="w-full px-4 py-2 main-text active-component rounded-md transition-all duration-300"
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

const currentImageIndex = ref<number>(0)
const portfolio = reactive<Portfolio>({
  title: 'E-commerce Platform',
  description: 'A modern e-commerce binoculars with intuitive interface.',
  images: [
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
    'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400'
  ],
  technologies: ['Vue 3', 'TypeScript', 'Tailwind', 'Node.js']
})

const currentImage = computed<string>(() => portfolio.images[currentImageIndex.value])

const switchImage = (): void => {
  currentImageIndex.value = (currentImageIndex.value + 1) % portfolio.images.length
}

const resetImage = (): void => {
  currentImageIndex.value = 0
}

const viewProject = (): void => {
  alert('Opening project...')
}

const viewCode = (): void => {
  alert('Opening code on GitHub...')
}
</script>

<template>
  <div>
    <div 
      class="main-div rounded-lg shadow-xl w-full max-w-md transition-all duration-300 hover:shadow-2xl hover:scale-105"
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
        <div class="absolute bottom-4 left-4 main-text text-sm">
          \${currentImageIndex + 1} / \${portfolio.images.length}
        </div>
      </div>
      <div class="p-6">
        <h3 class="text-xl font-semibold main-text mb-2">\${portfolio.title}</h3>
        <p class="text-p mb-4">\${portfolio.description}</p>
        <div class="flex flex-wrap gap-2 mb-4">
          <span 
            v-for="tech in portfolio.technologies" 
            :key="tech"
            class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm main-text"
          >
            \${tech}
          </span>
        </div>
        <div class="flex gap-3">
          <button 
            class="flex-1 px-4 py-2 main-text active-component rounded-md transition-all duration-300"
            @click="viewProject"
          >
            View
          </button>
          <button 
            class="flex-1 px-4 py-2 main-text active-component rounded-md transition-all duration-300"
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

const team = reactive<TeamMember>({
  name: 'Anna Smirnova',
  role: 'Frontend Developer',
  icon: '👩‍💻',
  avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200',
  bio: 'Creating beautiful and functional user interfaces with a focus on UX/UI design.',
  experience: 5,
  projects: 50
})

const contact = (): void => {
  alert(\`Contact \${team.name}\`)
}

const viewPortfolio = (): void => {
  alert(\`Open portfolio of \${team.name}\`)
}
</script>

<template>
  <div class="flip-card h-80">
    <div class="flip-card-inner">
      <div class="flip-card-front main-div flex items-center justify-center p-6 rounded-lg">
        <div class="text-center">
          <div class="text-6xl mb-4">\${team.icon}</div>
          <h3 class="text-xl font-semibold main-text mb-2">\${team.name}</h3>
          <p class="text-p">\${team.role}</p>
        </div>
      </div>
      <div class="flip-card-back main-div p-6 flex flex-col rounded-lg">
        <div class="flex items-center gap-3 mb-4">
          <img 
            :src="team.avatar" 
            :alt="team.name"
            class="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h4 class="font-semibold main-text">\${team.name}</h4>
            <p class="text-p">\${team.role}</p>
          </div>
        </div>
        <p class="text-p mb-4 flex-1">\${team.bio}</p>
        <div class="space-y-2 mb-4">
          <div class="flex items-center gap-2">
            <span class="text-sm text-p">Experience:</span>
            <span class="text-sm main-text">\${team.experience} years</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-sm text-p">Projects:</span>
            <span class="text-sm main-text">\${team.projects}+</span>
          </div>
        </div>
        <div class="flex gap-2">
          <button 
            class="flex-1 px-4 py-2 main-text active-component rounded-md transition-all duration-300"
            @click="contact"
          >
            Contact
          </button>
          <button 
            class="flex-1 px-4 py-2 main-text active-component rounded-md transition-all duration-300"
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

const isTransformed = ref<boolean>(false)

const stats = reactive<Stats>({
  title: 'Project Analytics',
  data: [
    { label: 'Users', value: '1.2K', animatedValue: '0', targetValue: 1200 },
    { label: 'Sales', value: '€45K', animatedValue: '€0', targetValue: 45000 },
    { label: 'Conversion', value: '3.8%', animatedValue: '0%', targetValue: 38 },
    { label: 'Growth', value: '+23%', animatedValue: '0%', targetValue: 23 }
  ]
})

const transform = (): void => {
  isTransformed.value = !isTransformed.value
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
      class="main-div rounded-lg shadow-xl w-full max-w-md transition-all duration-500 cursor-pointer hover:shadow-2xl hover:scale-105"
      :class="{ 'bg-indigo-100': isTransformed }"
      @click="transform"
    >
      <div class="p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-semibold main-text">\${stats.title}</h3>
          <div
            class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 active-component"
            :class="{ 'bg-indigo-200': isTransformed }"
          >
            <span class="text-xl">\${isTransformed ? '📊' : '📈'}</span>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 mb-6">
          <div
            v-for="(stat, index) in stats.data"
            :key="stat.label"
            class="text-center p-4 rounded-lg transition-all duration-500 active-component"
            :class="{ 'bg-indigo-50': isTransformed }"
            :style="{ transitionDelay: \`\${index * 100}ms\` }"
          >
            <div class="text-xl font-bold main-text mb-1">
              \${isTransformed ? stat.animatedValue : stat.value}
            </div>
            <div class="text-sm text-p">\${stat.label}</div>
          </div>
        </div>
        <div class="text-center">
          <button
            class="px-6 py-2 main-text active-component rounded-md transition-all duration-300"
            :class="{ 'bg-indigo-700 text-white': isTransformed }"
            @click="transform"
          >
            \${isTransformed ? 'Hide Details' : 'Show Stats'}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>`

export const notificationCardCodes = `<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'

interface Notification {
  id: number
  title: string
  message: string
  type: 'success' | 'warning' | 'info'
  time: string
  isNew: boolean
}

const showNotifications = ref<boolean>(false)
const notificationId = ref<number>(1)

const notifications = reactive<Notification[]>([
  {
    id: 1,
    title: 'New Message',
    message: 'You have a new message from the support team.',
    type: 'info',
    time: '5 min ago',
    isNew: true
  },
  {
    id: 2,
    title: 'Payment Successful',
    message: 'Your payment of $99 was successfully processed.',
    type: 'success',
    time: '1 hour ago',
    isNew: false
  }
])

const hasNotifications = computed<boolean>(() => notifications.length > 0)

const toggleNotifications = (): void => {
  showNotifications.value = !showNotifications.value
  if (showNotifications.value) {
    notifications.forEach(notification => {
      notification.isNew = false
    })
  }
}

const getIcon = (type: string): string => {
  switch (type) {
    case 'success': return '✅'
    case 'warning': return '⚠️'
    case 'info': return 'ℹ️'
    default: return '📢'
  }
}

const removeNotification = (id: number): void => {
  const index = notifications.findIndex(n => n.id === id)
  if (index > -1) {
    notifications.splice(index, 1)
  }
}

const addNotification = (): void => {
  const types: Array<'success' | 'warning' | 'info'> = ['success', 'warning', 'info']
  const randomType = types[Math.floor(Math.random() * types.length)]
  const messages = {
    success: 'Operation completed successfully!',
    warning: 'Attention! Action required.',
    info: 'Information updated.'
  }
  notifications.unshift({
    id: ++notificationId.value,
    title: \`Notification #\${notificationId.value}\`,
    message: messages[randomType],
    type: randomType,
    time: 'Just now',
    isNew: true
  })
}

const clearAll = (): void => {
  notifications.splice(0, notifications.length)
  showNotifications.value = false
}
</script>

<template>
  <div>
    <div 
      class="main-div rounded-lg shadow-xl w-full max-w-md transition-all duration-300 hover:shadow-2xl"
      :class="{ 'ring-2 ring-indigo-500': hasNotifications }"
    >
      <div class="p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-semibold main-text">Notifications</h3>
          <div class="relative">
            <button 
              class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 active-component"
              @click="toggleNotifications"
            >
              <span class="text-xl">🔔</span>
            </button>
            <div 
              v-if="hasNotifications"
              class="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse"
            >
              \${notifications.length}
            </div>
          </div>
        </div>
        <div 
          class="space-y-3 transition-all duration-500 overflow-hidden"
          :class="{ 'max-h-0 opacity-0': !showNotifications, 'max-h-96 opacity-100': showNotifications }"
        >
          <div 
            v-for="(notification, index) in notifications" 
            :key="notification.id"
            class="p-3 rounded-lg border-l-4 transition-all duration-300 active-component"
            :class="[
              notification.type === 'success' ? 'border-green-500' : 
              notification.type === 'warning' ? 'border-yellow-500' : 
              'border-indigo-500',
              { 'animate-pulse': notification.isNew }
            ]"
            :style="{ transitionDelay: \`\${index * 100}ms\` }"
          >
            <div class="flex items-start gap-3">
              <div class="mt-1">
                <span class="text-lg">\${getIcon(notification.type)}</span>
              </div>
              <div class="flex-1">
                <h4 class="font-semibold main-text">\${notification.title}</h4>
                <p class="text-p mt-1">\${notification.message}</p>
                <span class="text-xs text-p mt-2 block">\${notification.time}</span>
              </div>
              <button 
                class="text-gray-400 hover:text-red-500 transition-colors duration-200"
                @click="removeNotification(notification.id)"
              >
                ×
              </button>
            </div>
          </div>
        </div>
        <div class="mt-6 flex gap-3">
          <button 
            class="flex-1 px-4 py-2 main-text active-component rounded-md transition-all duration-300"
            @click="addNotification"
          >
            Add Notification
          </button>
          <button 
            class="flex-1 px-4 py-2 main-text active-component rounded-md transition-all duration-300"
            @click="clearAll"
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  </div>
</template>`