<script lang="ts" setup>
definePageMeta({
  layout: 'sidebar',
})

useState('right-sidebar-text').value = 'On this Page'
useState('right-sidebar-items').value = [
  {
    items: [
      { name: 'General Questions', path: '#general' },
      { name: 'Installation & Setup', path: '#installation' },
      { name: 'Components & Usage', path: '#components' },
      { name: 'Customization', path: '#customization' },
      { name: 'Performance', path: '#performance' },
    ],
  },
]

const faqSections = [
  {
    id: 'general',
    title: 'General Questions',
    questions: [
      {
        question: 'What is My UI Library?',
        answer:
          'My UI Library is a modern collection of Vue 3 components and code snippets built with TypeScript and Tailwind CSS. It provides ready-to-use UI components that you can copy and integrate into your projects.',
      },
      {
        question: 'Is this library free to use?',
        answer:
          'Yes, My UI Library is completely free to use in both personal and commercial projects. You can copy, modify, and distribute the components as needed.',
      },
      {
        question: 'Do I need to install anything?',
        answer:
          'No installation required! Simply copy the component code from the documentation and paste it into your project. Make sure you have Vue 3, TypeScript, and Tailwind CSS set up in your project.',
      },
    ],
  },
  {
    id: 'installation',
    title: 'Installation & Setup',
    questions: [
      {
        question: 'What are the requirements?',
        answer:
          'You need Vue 3 with Composition API, TypeScript, and Tailwind CSS. The components are built with <script setup> syntax and require these technologies to work properly.',
      },
      {
        question: 'How do I set up Tailwind CSS?',
        answer:
          'Follow the official Tailwind CSS installation guide for your framework. Make sure to include all necessary utility classes that the components use.',
      },
      {
        question: 'Can I use these components with Nuxt 3?',
        answer:
          'Absolutely! The components are fully compatible with Nuxt 3. Just copy the code and place it in your components directory.',
      },
    ],
  },
  {
    id: 'components',
    title: 'Components & Usage',
    questions: [
      {
        question: 'How do I use a component?',
        answer:
          'Navigate to the component page, copy the code from the "Code" tab, and paste it into your project. Then import and use it like any other Vue component.',
      },
      {
        question: 'Can I modify the components?',
        answer:
          'Yes! The components are designed to be customizable. You can modify the styling, add new props, or extend functionality as needed for your project.',
      },
      {
        question: 'Are the components responsive?',
        answer:
          'Most components include responsive design patterns using Tailwind CSS breakpoints. Check the component code for specific responsive behaviors.',
      },
    ],
  },
  {
    id: 'customization',
    title: 'Customization',
    questions: [
      {
        question: 'How do I change the colors?',
        answer:
          'The components use Tailwind CSS classes for styling. You can modify the color classes in the component code or override them with your own CSS variables and custom Tailwind config.',
      },
      {
        question: 'Can I add custom animations?',
        answer:
          'Yes! The components support custom animations. You can extend the existing animations or add new ones using CSS transitions, Tailwind animate classes, or animation libraries.',
      },
      {
        question: 'How do I customize the component props?',
        answer:
          'You can add new props to the component interface and implement the corresponding logic. The TypeScript definitions make it easy to extend component functionality.',
      },
    ],
  },
  {
    id: 'performance',
    title: 'Performance',
    questions: [
      {
        question: 'Are the components optimized?',
        answer:
          'Yes, the components are built with performance in mind using Vue 3 Composition API, reactive references, and efficient rendering patterns.',
      },
      {
        question: 'Do the components affect bundle size?',
        answer:
          "Since you copy only the components you need, there's no additional bundle overhead. The components are lightweight and use minimal dependencies.",
      },
      {
        question: 'Can I use the components in production?',
        answer:
          'Absolutely! The components are production-ready and follow Vue 3 best practices. Make sure to test them thoroughly in your specific use case.',
      },
    ],
  },
]
</script>

<template>
  <ClientOnly>
    <div class="w-full max-w-7xl mx-auto py-6 flex flex-col  gap-12">
      <!-- Hero Section -->
      <div class="">
        <h1 class="main-text text-4xl mb-4 font-light tracking-tight">
          Frequently Asked Questions
        </h1>
        <p class="text-p text-lg leading-relaxed opacity-80">
          Find answers to common questions about My UI Library. If you can't
          find what you're looking for, check out the
          <RouterLink
            to="/docs/support/troubleshooting"
            class="main-text hover:underline"
            >troubleshooting guide</RouterLink
          >.
        </p>
      </div>

      <div
        v-for="section in faqSections"
        :key="section.id"
        :id="section.id"
        class="space-y-6"
      >
        <div class="main-div rounded-lg shadow-xl p-6">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-8 h-px bg-gray-300"></div>
            <h2 class="main-text text-xl font-medium tracking-wide">
              {{ section.title }}
            </h2>
          </div>

          <div class="space-y-4">
            <div
              v-for="(faq, index) in section.questions"
              :key="index"
              class="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0"
            >
              <h3
                class="main-text text-lg font-medium mb-3 flex items-start gap-3"
              >
                <span class="text-indigo-600 font-bold text-xl leading-none"
                  >Q:</span
                >
                {{ faq.question }}
              </h3>
              <div
                class="ml-6 text-p leading-relaxed opacity-90 flex items-start gap-3"
              >
                <span class="text-green-600 font-bold text-xl leading-none"
                  >A:</span
                >
                <span>{{ faq.answer }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="main-div rounded-lg shadow-xl p-6 active-component"
      >
        <h2 class="main-text text-xl font-medium mb-4">
          Still Have Questions?
        </h2>
        <p class="text-p mb-4">
          If you couldn't find the answer you were looking for, try these
          resources:
        </p>
        <div class="space-y-2">
          <div class="flex items-center gap-3">
            <div class="w-2 h-2 bg-indigo-500 rounded-full"></div>
            <span class="text-p">
              Check the
              <RouterLink
                to="/docs/usage/examples"
                class="tag-class hover:underline"
                >examples page</RouterLink
              >
              for more usage patterns
            </span>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-2 h-2 bg-indigo-500 rounded-full"></div>
            <span class="text-p">
              Visit the
              <RouterLink
                to="/docs/support/troubleshooting"
                class="tag-class hover:underline"
                >troubleshooting guide</RouterLink
              >
              for common issues
            </span>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-2 h-2 bg-indigo-500 rounded-full"></div>
            <span class="text-p">
              Browse the
              <RouterLink
                to="/components"
                class="tag-class hover:underline"
                >components page</RouterLink
              >
              for detailed examples
            </span>
          </div>
        </div>
      </div>
   </div>
  </ClientOnly>
</template>
