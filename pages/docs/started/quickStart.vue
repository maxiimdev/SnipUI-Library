<script lang="ts" setup>
import { cyclingTypingCode } from '~/assets/code-examples/text/typing-codes'

definePageMeta({
  layout: 'sidebar',
})

useState('right-sidebar-text').value = 'On This Page'
useState('right-sidebar-items').value = [
  {
    items: [
      { name: 'Installation', path: '#installation' },
      { name: 'First Component', path: '#first-component' },
      { name: 'Project Structure', path: '#project-structure' },
      { name: 'Next Steps', path: '#next-steps' },
    ],
  },
]

const codeCards = [
  {
    title: 'Create a new project',
    codeTitle: 'Terminal',
    code: 'npx nuxi@latest init my-ui-project',
  },
  {
    codeTitle: 'Terminal',
    code: 'cd my-ui-project && npm install',
  },
  {
    title: 'Install Tailwind CSS',
    codeTitle: 'Terminal',
    code: 'npm install -D tailwindcss postcss autoprefixer',
  },
  {
    codeTitle: 'Terminal',
    code: 'npx tailwindcss init -p',
  },
  {
    title: 'Create the component file',
    codeTitle: 'components/CyclingTyping.vue',
    code: cyclingTypingCode,
  },
  {
    title: 'Use it in your page',
    codeTitle: 'pages/index.vue',
    code: `<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-4">
      <CyclingTyping :text="'Welcome to My UI Library!'" :type-speed="80" />
    </h1>
  </div>
</template>`,
  },
  {
    title: 'Recommended Project Structure',
    codeTitle: 'my-ui-project/',
    code: `my-ui-project/
├── components/
│   ├── ui/                    # UI Library components
│   │   ├── animations/
│   │   ├── buttons/
│   │   ├── forms/
│   │   └── text/
│   └── custom/               # Your custom components
├── pages/                    # Your pages
├── assets/
│   └── css/
│       └── main.css         # Tailwind imports
├── types/                   # TypeScript types
├── tailwind.config.js       # Tailwind configuration
└── nuxt.config.ts          # Nuxt configuration`,
  },
]
</script>

<template>
  <ClientOnly>
    <div class="w-full max-w-7xl mx-auto py-6 flex flex-col lg:flex-row gap-12">
      <div>
        <!-- Hero Section -->
        <div class="mb-16">
          <h1 class="main-text text-4xl mb-4 font-light tracking-tight">
            Quick Start Guide
          </h1>
          <p class="text-p text-lg leading-relaxed opacity-80">
            Get up and running with My UI Library in minutes. Follow these
            simple steps to start building beautiful interfaces.
          </p>
        </div>

        <!-- Installation Section -->
        <div id="installation" class="group">
          <div class="flex items-center gap-4 mb-6">
            <div
              class="w-8 h-px bg-gray-300 transition-all duration-500 group-hover:bg-gray-500"
            ></div>
            <h2 class="main-text text-2xl font-medium tracking-wide">
              Installation
            </h2>
          </div>

          <div
            class="main-div rounded-xl p-8 border main-border transition-all duration-300"
          >
            <div class="space-y-6">
              <div>
                <h3 class="main-text font-medium mb-4">Prerequisites</h3>
                <p class="text-p leading-relaxed mb-4">
                  Make sure you have the following installed on your system:
                </p>
                <div class="grid md:grid-cols-2 gap-4">
                  <div
                    class="flex items-center gap-3 p-3 rounded-lg active-component-hover"
                  >
                    <div class="w-2 h-2 rounded-full bg-green-500"></div>
                    <span class="text-p">Node.js 18+ or 20+</span>
                  </div>
                  <div
                    class="flex items-center gap-3 p-3 rounded-lg active-component-hover"
                  >
                    <div class="w-2 h-2 rounded-full bg-green-500"></div>
                    <span class="text-p">Vue 3.3+</span>
                  </div>
                  <div
                    class="flex items-center gap-3 p-3 rounded-lg active-component-hover"
                  >
                    <div class="w-2 h-2 rounded-full bg-green-500"></div>
                    <span class="text-p">Tailwind CSS 3.0+</span>
                  </div>
                  <div
                    class="flex items-center gap-3 p-3 rounded-lg active-component-hover"
                  >
                    <div class="w-2 h-2 rounded-full bg-green-500"></div>
                    <span class="text-p">TypeScript (optional)</span>
                  </div>
                </div>
              </div>

              <div class="border-t border-gray-200 pt-6 flex flex-col gap-3">
                <CodeCard :card="codeCards[0]" isCompact />
                <CodeCard :card="codeCards[1]" isCompact />
              </div>

              <div class="border-t border-gray-200 pt-6 flex flex-col gap-3">
                <CodeCard :card="codeCards[2]" isCompact />
                <CodeCard :card="codeCards[3]" isCompact />
              </div>
            </div>
          </div>
        </div>

        <!-- First Component Section -->
        <div id="first-component" class="group mt-12">
          <div class="flex items-center gap-4 mb-6">
            <div
              class="w-8 h-px bg-gray-300 transition-all duration-500 group-hover:bg-gray-500"
            ></div>
            <h2 class="main-text text-2xl font-medium tracking-wide">
              Your First Component
            </h2>
          </div>

          <div
            class="main-div rounded-xl p-8 border main-border transition-all duration-300"
          >
            <div class="space-y-6">
              <p class="text-p leading-relaxed">
                Let's create your first component! We'll start with a simple
                typing animation component.
              </p>

              <div class="space-y-4">
                <CodeCard :card="codeCards[4]" isCompact />
                <CodeCard :card="codeCards[5]" isCompact />
              </div>

              <div class="active-component rounded-lg p-4">
                <div class="flex items-center gap-2 mb-2">
                  <svg
                    class="w-5 h-5 code-class-text"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span class="code-class-text font-medium">Success!</span>
                </div>
                <p class="code-class-text text-sm">
                  You've successfully created your first component! Run
                  <code class="main-bg px-1 rounded">npm run dev</code> to see
                  it in action.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Project Structure Section -->
        <div id="project-structure" class="group mt-12">
          <div class="flex items-center gap-4 mb-6">
            <div
              class="w-8 h-px bg-gray-300 transition-all duration-500 group-hover:bg-gray-500"
            ></div>
            <h2 class="main-text text-2xl font-medium tracking-wide">
              Recommended Project Structure
            </h2>
          </div>

          <div
            class="main-div rounded-xl p-8 border main-border transition-all duration-300"
          >
            <div class="space-y-6">
              <p class="text-p leading-relaxed">
                Here's how we recommend organizing your project when using My UI
                Library components:
              </p>

              <CodeCard :card="codeCards[6]" isCompact />

              <div class="grid md:grid-cols-2 gap-4">
                <div class="space-y-3">
                  <h3 class="main-text font-medium">Best Practices</h3>
                  <ul class="space-y-2 text-p text-sm">
                    <li class="flex items-start gap-2">
                      <div
                        class="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0"
                      ></div>
                      <span
                        >Keep UI components in separate folders by
                        category</span
                      >
                    </li>
                    <li class="flex items-start gap-2">
                      <div
                        class="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0"
                      ></div>
                      <span
                        >Use TypeScript for better development experience</span
                      >
                    </li>
                    <li class="flex items-start gap-2">
                      <div
                        class="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0"
                      ></div>
                      <span>Follow consistent naming conventions</span>
                    </li>
                  </ul>
                </div>

                <div class="space-y-3">
                  <h3 class="main-text font-medium">Pro Tips</h3>
                  <ul class="space-y-2 text-p text-sm">
                    <li class="flex items-start gap-2">
                      <div
                        class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"
                      ></div>
                      <span>Create a types folder for shared interfaces</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <div
                        class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"
                      ></div>
                      <span
                        >Use auto-imports for frequently used components</span
                      >
                    </li>
                    <li class="flex items-start gap-2">
                      <div
                        class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"
                      ></div>
                      <span>Leverage Nuxt's component auto-discovery</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Next Steps Section -->
        <div id="next-steps" class="group mt-12">
          <div class="flex items-center gap-4 mb-6">
            <div
              class="w-8 h-px bg-gray-300 transition-all duration-500 group-hover:bg-gray-500"
            ></div>
            <h2 class="main-text text-2xl font-medium tracking-wide">
              Next Steps
            </h2>
          </div>

          <div
            class="main-div rounded-xl p-8 border main-border transition-all duration-300"
          >
            <div class="space-y-6">
              <p class="text-p leading-relaxed">
                Now that you have the basics set up, here are some next steps to
                explore:
              </p>

              <div class="grid md:grid-cols-2 gap-6">
                <div class="group/card">
                  <div
                    class="p-6 rounded-lg border main-border transition-all duration-300 active-component-hover"
                  >
                    <div class="flex items-center gap-3 mb-3">
                      <h3 class="main-text font-medium">Explore Components</h3>
                    </div>
                    <p class="text-p text-sm mb-4">
                      Browse our extensive collection of ready-to-use components
                      with live examples and code snippets.
                    </p>
                    <RouterLink
                      to="/components"
                      class="main-text text-sm font-medium hover:underline"
                    >
                      View Components →
                    </RouterLink>
                  </div>
                </div>

                <div class="group/card">
                  <div
                    class="p-6 rounded-lg border main-border transition-all duration-300 active-component-hover"
                  >
                    <div class="flex items-center gap-3 mb-3">
                      <h3 class="main-text font-medium">Configuration</h3>
                    </div>
                    <p class="text-p text-sm mb-4">
                      Learn how to customize themes, colors, and global settings
                      for your project.
                    </p>
                    <RouterLink
                      to="/docs/started/configuration"
                      class="main-text text-sm font-medium hover:underline"
                    >
                      Configuration Guide →
                    </RouterLink>
                  </div>
                </div>

                <div class="group/card">
                  <div
                    class="p-6 rounded-lg border main-border transition-all duration-300 active-component-hover"
                  >
                    <div class="flex items-center gap-3 mb-3">
                      <h3 class="main-text font-medium">Usage Examples</h3>
                    </div>
                    <p class="text-p text-sm mb-4">
                      See real-world examples and learn best practices for
                      implementing components.
                    </p>
                    <RouterLink
                      to="/docs/usage/examples"
                      class="main-text text-sm font-medium hover:underline"
                    >
                      View Examples →
                    </RouterLink>
                  </div>
                </div>

                <div class="group/card">
                  <div
                    class="p-6 rounded-lg border main-border transition-all duration-300 active-component-hover"
                  >
                    <div class="flex items-center gap-3 mb-3">
                      <h3 class="main-text font-medium">Need Help?</h3>
                    </div>
                    <p class="text-p text-sm mb-4">
                      Check our FAQ section or troubleshooting guide for common
                      issues and solutions.
                    </p>
                    <RouterLink
                      to="/docs/support/faq"
                      class="main-text text-sm font-medium hover:underline"
                    >
                      Get Support →
                    </RouterLink>
                  </div>
                </div>
              </div>

              <div class="active-component rounded-lg p-6">
                <div class="flex items-start gap-3">
                  <div>
                    <h3 class="tag-class font-medium mb-2">Quick Tip</h3>
                    <p class="tag-class text-sm">
                      All components are designed to be copy-paste ready. You
                      can directly copy the code from our examples and use it in
                      your project without any additional setup.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
