Snip UI
Snip UI Library is an open-source collection of reusable UI components and comprehensive documentation, built with Nuxt 3, Vue 3, and Tailwind CSS. Inspired by shadcn/ui, this project offers a modern, minimalist design with a responsive header, an interactive search modal, and customizable components for developers building sleek web applications.
Features

Responsive Header: A sticky navigation bar with a burger menu for mobile, featuring smooth hover effects (text-indigo-600, #f5f5f5).
Interactive Search Modal: Fast search across docs and components (Ctrl+K or ⌘+K) with a polished UI.
Customizable Components: Reusable components (e.g., Typing, HoverExpandCard) with code previews via CodeCard.
Minimalist Design: Custom styles (main-text #333, text-p #929292, active-component-hover #f5f5f5).
Documentation: Structured guides under /docs (Getting Started, Usage, FAQs).
Open Source: Licensed under MIT, free to use and modify.

Demo
Explore the live demo at https://ui-components-nuxt3.vercel.app/

Installation

Clone the repository:
git clone https://github.com/maxiimdev/SnipUI-Library
cd my-nuxt-ui


Install dependencies:
npm install


Run the development server:
npm run dev


Open http://localhost:3000 in your browser.


Usage

Navigation: Use the header to access /docs (guides) or /components (UI components).
Search: Press Ctrl+K or ⌘+K to search documentation and components.
Components: Explore components like Typing (/components/text/typing) or HoverExpandCard (/components/cards/interactive). Copy and customize them.
Styling: Modify styles in assets/css/main.css:
main-text: #333
text-p: #929292
text-indigo-600: Hover accent
active-component-hover: #f5f5f5
main-bg: #fff



Creating Components
Overview
Components are displayed using CodeCard.vue, which shows a preview or code block for each component. Components are organized in components/ and showcased in pages/components/[category]/[component].vue. Code examples are stored in assets/code-examples/[category]/[component-codes].ts.
Structure

Components: Stored in components/[category]/[ComponentName].vue (e.g., components/cards/interactive/HoverExpandCard.vue).
Pages: Component demos live in pages/components/[category]/[component].vue (e.g., pages/components/cards/interactive.vue).
Code Examples: Stored in assets/code-examples/[category]/[component-codes].ts (e.g., assets/code-examples/cards/card-codes.ts).
CodeCard: Renders a component preview (isCodePreview=true) or code block with copy functionality, using Shiki for syntax highlighting.

How It Works

Create a Component:

Add your component to components/[category]/[ComponentName].vue.
Example: components/custom/CustomComponent.vue (a card that expands on hover):<script lang="ts" setup>
import { ref, reactive } from 'vue'

interface Service {
  title: string
  shortDescription: string
  features: string[]
}

const isExpanded = ref<boolean>(false)
const service = reactive<Service>({
  title: 'Web Development',
  shortDescription: 'Building modern web applications.',
  features: ['Vue.js & React', 'TypeScript', 'Responsive design'],
})

const startService = (): void => {
  alert('Starting the project!')
}
</script>

<template>
  <div class="main-div rounded-lg shadow-xl w-full max-w-sm transition-all duration-500">
    <div class="p-4 h-full flex flex-col">
      <h3 class="text-lg font-semibold main-text">{{ service.title }}</h3>
      <p class="text-p text-sm">{{ service.shortDescription }}</p>
      <div :class="{ 'max-h-0 opacity-0': !isExpanded, 'max-h-40 opacity-100': isExpanded }">
        <ul class="space-y-2">
          <li v-for="feature in service.features" class="text-sm text-p">✓ {{ feature }}</li>
        </ul>
      </div>
      <button class="w-full py-1 main-text active-component rounded-md text-sm" @click="startService">
        Start Now
      </button>
    </div>
  </div>
</template>




Add Code Example:

Create a file in assets/code-examples/[category]/[component-codes].ts.
Example: assets/code-examples/custom/custom-codes.ts:export const customComponentCodes = `<script lang="ts" setup>
import { ref, reactive } from 'vue'

interface Service {
  title: string
  shortDescription: string
  features: string[]
}

const isExpanded = ref<boolean>(false)
const service = reactive<Service>({
  title: 'Web Development',
  shortDescription: 'Building modern web applications.',
  features: ['Vue.js & React', 'TypeScript', 'Responsive design'],
})

const startService = (): void => {
  alert('Starting the project!')
}
</script>

<template>
  <div class="main-div rounded-lg shadow-xl w-full max-w-sm transition-all duration-500">
    <div class="p-4 h-full flex flex-col">
      <h3 class="text-lg font-semibold main-text">{{ service.title }}</h3>
      <p class="text-p text-sm">{{ service.shortDescription }}</p>
      <div :class="{ 'max-h-0 opacity-0': !isExpanded, 'max-h-40 opacity-100': isExpanded }">
        <ul class="space-y-2">
          <li v-for="feature in service.features" class="text-sm text-p">✓ {{ feature }}</li>
        </ul>
      </div>
      <button class="w-full py-1 main-text active-component rounded-md text-sm" @click="startService">
        Start Now
      </button>
    </div>
  </div>
</template>`




Create a Page:

Add a page in pages/components/[category]/[component].vue to showcase the component.
Example: pages/components/custom/component.vue:<script lang="ts" setup>
import type { Card } from '~/types'
import CustomComponent from '~/components/custom/CustomComponent.vue'
import { customComponentCodes } from '~/assets/code-examples/custom/custom-codes'

definePageMeta({ layout: 'sidebar' })

useState('right-sidebar-text').value = 'On This Page'
useState('right-sidebar-items').value = [
  { items: [{ name: 'Custom Component', path: '#custom-component' }] }
]

const CustomComponentCard: Card = {
  title: 'Custom Component',
  text: 'A card that expands on hover to show features.',
  codeTitle: 'CustomComponent.vue',
  code: customComponentCodes,
  content: { type: 'text', props: { class: '' }, children: '' },
}
</script>

<template>
  <div class="flex flex-col gap-20">
    <div id="custom-component">
      <CodeCard :card="CustomComponentCard" :component="CustomComponent" :is-code-preview="true" />
    </div>
  </div>
</template>




Update Sidebar:

Add the new component to plugins/sidebar.client.ts for navigation.
Example:export default defineNuxtPlugin(() => {
  return {
    provide: {
      sidebarConfig: [
        {
          title: 'Components',
          items: [
            { name: 'Custom', path: '/components/custom/component' },
            // Other components
          ],
        },
      ],
    },
  }
})





Component Workflow

Create a component in components/[category]/[ComponentName].vue.
Add its code example in assets/code-examples/[category]/[component-codes].ts.
Create a page in pages/components/[category]/[component].vue using CodeCard to display the component and its code.
Update plugins/sidebar.client.ts to include the new component in navigation.
Run npm run dev to test the component at http://localhost:3000/components/[category]/[component].

Project Structure
my-nuxt-ui/
├── assets/
│   └── code-examples/
│       ├── cards/
│       │   └── card-codes.ts     # Code for card components
│       └── custom/
│           └── custom-codes.ts   # Code for custom components
├── components/
│   ├── cards/
│   │   └── interactive/
│   │       ├── HoverExpandCard.vue
│   │       └── FlipCard.vue
│   ├── custom/
│   │   └── CustomComponent.vue   # Custom components
│   ├── CodeCard.vue              # Component for previews and code
│   ├── Header.vue                # Responsive header
│   ├── ModalSearch.vue           # Search modal
│   └── ThemeToggle.vue           # Theme switcher
├── pages/
│   ├── docs/
│   │   ├── started/
│   │   │   └── about.vue
│   │   ├── usage/
│   │   │   └── examples.vue
│   │   └── support/
│   │       └── faq.vue
│   ├── components/
│   │   ├── cards/
│   │   │   └── interactive.vue   # Card component demos
│   │   ├── custom/
│   │   │   └── component.vue     # Custom component demos
│   │   └── text/
│   │       └── typing.vue
├── plugins/
│   └── sidebar.client.ts         # Sidebar navigation config
├── public/
│   ├── favicon.ico              # Favicon
│   └── og-image.jpg             # Social media preview
├── nuxt.config.ts               # Nuxt configuration
├── README.md                    # Project overview
├── LICENSE                      # MIT License
├── .gitignore                   # Ignored files
└── package.json                 # Dependencies

Configuration
Prerequisites

Node.js (v18 or higher)
npm (v9 or higher)

Dependencies

nuxt: Framework for the application.
vue: Core library for components.
@tailwindcss: Styling.
@iconify/vue: Icons.
shiki: Code highlighting for CodeCard.

Install:
npm install nuxt vue @tailwindcss @iconify/vue shiki

Customization

Styles: Edit assets/css/main.css for colors (#333, #929292, #f5f5f5).
Components: Add new components to components/[category]/.
Sidebar: Update plugins/sidebar.client.ts for navigation.

Deployment
Vercel

Install Vercel CLI:npm i -g vercel


Generate static files:npm run generate


Deploy:vercel deploy --prod



GitHub Pages

Generate static files:npm run generate


Deploy to gh-pages:npm i -D gh-pages
npx gh-pages -d .output/public


Update nuxt.config.ts:export default defineNuxtConfig({
  ssr: false,
  app: { baseURL: '/my-nuxt-ui/' }
})



Contributing
This project is in beta. Open issues or submit pull requests to contribute. See CONTRIBUTING.md for details.
License
MIT
Acknowledgments

Inspired by shadcn/ui.
Thanks to Nuxt, Vue, Tailwind CSS, and Shiki communities.

Contact
Questions? Open an issue or reach out on TG: @maxiimdev