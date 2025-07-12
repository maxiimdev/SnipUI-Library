<script lang="ts" setup>
import {
  commonCode,
  reactiveCode,
  tailwindCode,
  tsCode,
} from '~/assets/code-examples/docs/trouble'

definePageMeta({
  layout: 'sidebar',
})

useState('right-sidebar-text').value = 'On This Page'
useState('right-sidebar-items').value = [
  {
    items: [
      { name: 'Common Issues', path: '#common-issues' },
      { name: 'TypeScript Errors', path: '#typescript-errors' },
      { name: 'Styling Problems', path: '#styling-problems' },
      { name: 'Component Not Working', path: '#component-not-working' },
      { name: 'Performance Issues', path: '#performance-issues' },
    ],
  },
]

const troubleshootingSections = [
  {
    id: 'common-issues',
    title: 'Common Issues',
    problem: "Component Doesn't Render",
    solution:
      'Make sure you have properly imported the component and that all required dependencies (Vue 3, TypeScript, Tailwind CSS) are installed and configured.',
    codeCard: {
      title: "Component Doesn't Render",
      codeTitle: 'Common Issues',
      code: commonCode,
    },
  },
  {
    id: 'typescript-errors',
    title: 'TypeScript Errors',
    problem: 'Property Does Not Exist on Type',
    solution:
      'Make sure you’ve defined the correct types for your props and that your component interface matches the expected structure.',
    codeCard: {
      title: 'Property Does Not Exist on Type',
      codeTitle: 'TypeScript Errors',
      code: tsCode,
    },
  },
  {
    id: 'styling-problems',
    title: 'Styling Problems',
    problem: 'Tailwind Classes Not Working',
    solution:
      'Make sure the classes are included in your Tailwind build and that you’re not using arbitrary values incorrectly.',
    codeCard: {
      title: 'Tailwind Classes Not Working',
      codeTitle: 'Styling Problems',
      code: tailwindCode,
    },
  },
  {
    id: 'component-not-working',
    title: 'Component Not Working',
    problem: 'Reactivity Not Working',
    solution:
      'Ensure you’re using ref() or reactive() for reactive data and that you’re accessing .value when needed.',
    codeCard: {
      title: 'Reactivity Not Working',
      codeTitle: 'Component Not Working',
      code: reactiveCode,
    },
  },
  {
    id: 'performance-issues',
    title: 'Performance Issues',
    problem: 'Slow Rendering',
    solution:
      'Use v-memo, v-once, or computed properties to optimize rendering. Consider virtualizing large lists.',
    codeCard: {
      title: 'Slow Rendering',
      codeTitle: 'Performance Issues',
      code: `<!-- Use v-memo for expensive computations -->
<div v-memo="[count, user.name]">
  <ExpensiveComponent :count="count" :user="user" />
</div>

<!-- Use v-once for static content -->
<div v-once>
  <StaticComponent />
</div>

<!-- Use computed for derived values -->
const expensiveValue = computed(() => {
  return heavyComputation(props.data)
})`,
    },
  },
]
</script>

<template>
  <ClientOnly>
    <div class="w-full max-w-7xl mx-auto py-6 flex flex-col lg:flex-row gap-12">
      <div>
        <!-- Hero Section -->
        <div class="mb-16">
          <h1 class="main-text text-4xl font-light tracking-tight mb-4">
            Troubleshooting Guide
          </h1>
          <p class="text-p text-lg leading-relaxed opacity-80">
            Common issues and solutions when working with My UI Library
            components. If you're still having problems, check the
            <RouterLink to="/docs/support/faq" class="main-text hover:underline"
              >FAQ section</RouterLink
            >
            for additional help.
          </p>
        </div>

        <!-- Troubleshooting Sections -->
        <div
          v-for="section in troubleshootingSections"
          :key="section.id"
          :id="section.id"
          class="group mb-12"
        >
          <div class="main-div rounded-lg shadow-xl p-6">
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-8 h-px bg-gray-300 transition-all duration-500 group-hover:bg-gray-500"
              ></div>
              <h2 class="main-text text-2xl font-medium tracking-wide">
                {{ section.title }}
              </h2>
            </div>

            <h3
              class="main-text text-lg font-medium mb-3 flex items-start gap-3"
            >
              <span class="text-red-600 text-xl">⚠️</span>
              {{ section.problem }}
            </h3>
            <p class="text-p leading-relaxed opacity-90 mb-4">
              {{ section.solution }}
            </p>
            <CodeCard :card="section.codeCard" isCompact />
          </div>
        </div>

        <!-- Debug Checklist -->
        <div class="group mt-12">
          <div class="main-div rounded-lg shadow-xl p-6">
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-8 h-px bg-gray-300 transition-all duration-500 group-hover:bg-gray-500"
              ></div>
              <h2 class="main-text text-2xl font-medium tracking-wide">
                Debug Checklist
              </h2>
            </div>
            <p class="text-p mb-6">
              When troubleshooting issues, follow this systematic approach:
            </p>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <div
                  class="w-8 h-8 active-component rounded-full flex items-center justify-center text-white text-sm font-bold mt-1"
                >
                  1
                </div>
                <div>
                  <h3 class="main-text font-medium">Check the console</h3>
                  <p class="text-p text-sm opacity-80">
                    Look for any error messages or warnings in the browser
                    console
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div
                  class="w-8 h-8 active-component rounded-full flex items-center justify-center text-white text-sm font-bold mt-1"
                >
                  2
                </div>
                <div>
                  <h3 class="main-text font-medium">Verify dependencies</h3>
                  <p class="text-p text-sm opacity-80">
                    Ensure Vue 3, TypeScript, and Tailwind CSS are properly
                    installed
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div
                  class="w-8 h-8 active-component rounded-full flex items-center justify-center text-white text-sm font-bold mt-1"
                >
                  3
                </div>
                <div>
                  <h3 class="main-text font-medium">Check import paths</h3>
                  <p class="text-p text-sm opacity-80">
                    Make sure all imports are correct and files exist at the
                    specified paths
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div
                  class="w-8 h-8 active-component rounded-full flex items-center justify-center text-white text-sm font-bold mt-1"
                >
                  4
                </div>
                <div>
                  <h3 class="main-text font-medium">Validate component code</h3>
                  <p class="text-p text-sm opacity-80">
                    Compare your code with the documentation examples
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div
                  class="w-8 h-8 active-component rounded-full flex items-center justify-center text-white text-sm font-bold mt-1"
                >
                  5
                </div>
                <div>
                  <h3 class="main-text font-medium">Test in isolation</h3>
                  <p class="text-p text-sm opacity-80">
                    Try the component in a minimal setup to isolate the issue
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Still Need Help -->
        <div class="group mt-12">
          <div class="main-div rounded-lg shadow-xl p-6 active-component">
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-8 h-px bg-gray-300 transition-all duration-500 group-hover:bg-gray-500"
              ></div>
              <h2 class="main-text text-2xl font-medium tracking-wide">
                Still Need Help?
              </h2>
            </div>
            <p class="text-p mb-4">
              If you're still experiencing issues after following this guide:
            </p>
            <div class="space-y-2">
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span class="text-p">
                  Review the
                  <RouterLink
                    to="/docs/support/faq"
                    class="tag-class hover:underline"
                    >FAQ section</RouterLink
                  >
                  for common questions
                </span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span class="text-p">
                  Check the
                  <RouterLink
                    to="/docs/usage/examples"
                    class="tag-class hover:underline"
                    >examples page</RouterLink
                  >
                  for working implementations
                </span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span class="text-p">
                  Browse the
                  <RouterLink to="/components" class="tag-class hover:underline"
                    >components page</RouterLink
                  >
                  for detailed code examples
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
