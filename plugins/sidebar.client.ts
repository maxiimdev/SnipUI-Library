export const sidebarConfig = {
  '/components': {
    text: 'Components',
    items: [
      {
        text: 'Text Effects',
        items: [
          { name: 'Gradient', path: '/components/text/gradient' },
          { name: 'Typing', path: '/components/text/typing' },
          { name: 'Article Highlights', path: '/components/text/article' },
          { name: 'Effect Showcase', path: '/components/text/showcase' },
        ],
      },
      {
        text: 'Action Toggles',
        items: [
          { name: 'Buttons', path: '/components/action/buttons' },
          { name: 'Input Toggles', path: '/components/action/toggles' },
        ],
      },
      {
        text: 'Form Inputs',
        items: [
          { name: 'Input', path: '/components/form/input' },
          { name: 'Textarea', path: '/components/form/textarea' },
        ],
      },
      {
        text: 'Dialog Triggers',
        items: [
          { name: 'Modal', path: '/components/dialog/modal' },
          { name: 'Triggers', path: '/components/dialog/triggers' },
        ],
      },
      {
        text: 'Cards',
        items: [
          { name: 'Static Cards', path: '/components/cards/static' },
          { name: 'Interactive Cards', path: '/components/cards/interactive' },
        ],
      },
    ],
  },
  '/docs': {
    text: 'Documentation',
    items: [
      {
        text: 'Get Started',
        items: [
          { name: 'About', path: '/docs/started/about' },
          { name: 'Quick Start', path: '/docs/started/quickStart' },
          { name: 'Configuration', path: '/docs/started/configuration' },
        ],
      },
      {
        text: 'Usage',
        items: [
          { name: 'Examples', path: '/docs/usage/examples' },
          { name: 'How It Works', path: '/docs/usage/howItWorks' },
        ],
      },
      {
        text: 'Support',
        items: [
          { name: 'FAQ', path: '/docs/support/faq' },
          { name: 'Troubleshooting', path: '/docs/support/troubleshooting' },
        ],
      },
    ],
  },
}

export default defineNuxtPlugin((nuxtApp) => {
  const route = useRoute()

  const updateSidebarData = () => {
    const path = route.path
    if (path === '/' || path === '') {
      useState('sidebar-text').value = ''
      useState('sidebar-items').value = []
      return
    }

    for (const [pathPrefix, config] of Object.entries(sidebarConfig)) {
      if (path.startsWith(pathPrefix)) {
        useState('sidebar-text').value = config.text
        useState('sidebar-items').value = config.items
        return
      }
    }

    // Если маршрут не соответствует, очищаем сайдбар
    useState('sidebar-text').value = ''
    useState('sidebar-items').value = []
  }

  // Инициализация при загрузке
  updateSidebarData()

  // Реактивное обновление при изменении маршрута
  nuxtApp.hook('page:finish', () => {
    updateSidebarData()
  })

  // Реактивное наблюдение за маршрутом
  watch(
    () => route.path,
    () => {
      updateSidebarData()
    }
  )
})