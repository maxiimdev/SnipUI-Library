# Snip UI Library

<div align="center">
  <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D" alt="Vue.js">
  <img src="https://img.shields.io/badge/Nuxt-00DC82?style=for-the-badge&logo=nuxtdotjs&logoColor=white" alt="Nuxt">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/MIT-License-green?style=for-the-badge" alt="MIT License">
</div>

<div align="center">
  <h3>🎨 Modern, Minimalist UI Components for Vue 3 & Nuxt 3</h3>
  <p>An open-source collection of reusable UI components and comprehensive documentation, inspired by shadcn/ui</p>
</div>

---

## 🚀 Demo

**[Live Demo](https://ui-components-nuxt3.vercel.app/)** - Explore the interactive component library

## ✨ Features

- **🎯 Responsive Header** - Sticky navigation with burger menu and smooth hover effects
- **🔍 Interactive Search Modal** - Fast search across docs and components (`Ctrl+K` or `⌘+K`)
- **🧩 Customizable Components** - Reusable components with live code previews via CodeCard
- **🎨 Minimalist Design** - Clean, modern aesthetics with custom color palette
- **📚 Comprehensive Documentation** - Structured guides under `/docs`
- **🆓 Open Source** - MIT licensed, free to use and modify

## 🛠️ Installation

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Quick Start

```bash
# Clone the repository
git clone https://github.com/maxiimdev/SnipUI-Library
cd my-nuxt-ui

# Install dependencies
npm install

# Run development server
npm run dev

# Open in browser
# http://localhost:3000
```

## 🎯 Usage

### Navigation
- Use the header to access `/docs` (guides) or `/components` (UI components)
- Press `Ctrl+K` or `⌘+K` to open the search modal

### Exploring Components
- Browse components like `Typing` (`/components/text/typing`) 
- Check out `HoverExpandCard` (`/components/cards/interactive`)
- Copy and customize components for your projects

### Customizing Styles

Edit `assets/css/main.css` to modify the color palette:

```css
/* Custom CSS Variables */
main-text: #333;           /* Primary text color */
text-p: #929292;           /* Secondary text color */
text-indigo-600: #4F46E5;  /* Hover accent color */
active-component-hover: #f5f5f5;  /* Component hover state */
main-bg: #fff;             /* Main background */
```

## 🔧 Creating Components

### Component Structure

```
components/[category]/[ComponentName].vue
pages/components/[category]/[component].vue
assets/code-examples/[category]/[component-codes].ts
```

### Step-by-Step Guide

#### 1. Create Component
```vue
<!-- components/custom/CustomComponent.vue -->
<script lang="ts" setup>
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
```

#### 2. Add Code Example
```typescript
// assets/code-examples/custom/custom-codes.ts
export const customComponentCodes = `<script lang="ts" setup>
// Component code here...
</script>

<template>
  <!-- Template here... -->
</template>`
```

#### 3. Create Demo Page
```vue
<!-- pages/components/custom/component.vue -->
<script lang="ts" setup>
import type { Card } from '~/types'
import CustomComponent from '~/components/custom/CustomComponent.vue'
import { customComponentCodes } from '~/assets/code-examples/custom/custom-codes'

definePageMeta({ layout: 'sidebar' })

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
```

#### 4. Update Sidebar Navigation
```typescript
// plugins/sidebar.client.ts
export default defineNuxtPlugin(() => {
  return {
    provide: {
      sidebarConfig: [
        {
          title: 'Components',
          items: [
            { name: 'Custom', path: '/components/custom/component' },
            // Other components...
          ],
        },
      ],
    },
  }
})
```

## 📁 Project Structure

```
my-nuxt-ui/
├── assets/
│   └── code-examples/          # Code examples for components
│       ├── cards/
│       └── custom/
├── components/
│   ├── cards/
│   │   └── interactive/        # Interactive card components
│   ├── custom/                 # Custom components
│   ├── CodeCard.vue           # Component preview renderer
│   ├── Header.vue             # Responsive header
│   ├── ModalSearch.vue        # Search modal
│   └── ThemeToggle.vue        # Theme switcher
├── pages/
│   ├── docs/                  # Documentation pages
│   │   ├── started/
│   │   ├── usage/
│   │   └── support/
│   └── components/            # Component demo pages
│       ├── cards/
│       ├── custom/
│       └── text/
├── plugins/
│   └── sidebar.client.ts      # Sidebar configuration
├── public/
│   ├── favicon.ico
│   └── og-image.jpg
├── nuxt.config.ts
└── package.json
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Generate static files
npm run generate

# Deploy
vercel deploy --prod
```

### GitHub Pages

```bash
# Generate static files
npm run generate

# Install gh-pages
npm i -D gh-pages

# Deploy
npx gh-pages -d .output/public
```

Update `nuxt.config.ts` for GitHub Pages:
```typescript
export default defineNuxtConfig({
  ssr: false,
  app: { baseURL: '/my-nuxt-ui/' }
})
```

## 🧰 Tech Stack

- **[Nuxt 3](https://nuxt.com/)** - Full-stack framework
- **[Vue 3](https://vuejs.org/)** - Progressive JavaScript framework
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Shiki](https://shiki.matsu.io/)** - Syntax highlighting
- **[Iconify](https://iconify.design/)** - Icon framework

## 🤝 Contributing

This project is in beta and we welcome contributions! 

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

See `CONTRIBUTING.md` for detailed guidelines.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by [shadcn/ui](https://ui.shadcn.com/)
- Thanks to the amazing [Nuxt](https://nuxt.com/), [Vue](https://vuejs.org/), [Tailwind CSS](https://tailwindcss.com/), and [Shiki](https://shiki.matsu.io/) communities

## 💬 Contact

Have questions or suggestions? 

- 🐛 [Open an issue](https://github.com/maxiimdev/SnipUI-Library/issues)
- 💬 Reach out on Telegram: [@maxiimdev](https://t.me/maxiimdev)

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/maxiimdev">@maxiimdev</a></p>
  <p>⭐ Star this repository if you find it helpful!</p>
</div>