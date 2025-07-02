// plugins/sidebar.client.ts
export default defineNuxtPlugin(() => {
  // Конфигурация для разных разделов
  const sidebarConfig = {
    '/components': {
      text: 'Components',
      items: [
        {
          text: 'Text Effects',
          items: [
            {
              name: 'Gradient',
              path: '/components/text/gradient',
            },
            {
              name: 'Typing',
              path: '/components/text/typing',
            },
            {
              name: 'Article Highlights',
              path: '/components/text/article',
            },
            {
              name: 'Effect Showcase',
              path: '/components/text/showcase',
            },
          ],
        },
        {
          text: 'Action Toggles',
          items: [
            {
              name: 'Buttons',
              path: '/components/action/buttons',
            },
            {
              name: 'Checkbox',
              path: '/components/action/checkbox',
            },
          ],
        },
        {
          text: 'Form Inputs',
          items: [
            {
              name: 'Input',
              path: '/components/form/input',
            },
            {
              name: 'Textarea',
              path: '/components/form/textarea',
            },
          ],
        },
        {
          text: 'Dialog Triggers',
          items: [
            {
              name: 'Modal',
              path: '/components/dialog/modal',
            },
            {
              name: 'Triggers',
              path: '/components/dialog/triggers',
            },
          ],
        },
        
      ],
    },
    '/docs': {
      text: 'Documentation',
      items: [
        {
          text: 'Getting Started',
          items: [
            {
              name: 'Installation',
              path: '/docs/getting-started/installation',
            },
            {
              name: 'Quick Start',
              path: '/docs/getting-started/quick-start',
            },
            {
              name: 'Configuration',
              path: '/docs/getting-started/configuration',
            },
          ],
        },
        {
          text: 'API Reference',
          items: [
            {
              name: 'Props',
              path: '/docs/api/props',
            },
            {
              name: 'Methods',
              path: '/docs/api/methods',
            },
            {
              name: 'Events',
              path: '/docs/api/events',
            },
          ],
        },
      ],
    },
  }

  const initializeSidebarData = () => {
    const route = useRoute()
    for (const [pathPrefix, config] of Object.entries(sidebarConfig)) {
      if (route.path.startsWith(pathPrefix)) {
        useState('sidebar-text').value = config.text
        useState('sidebar-items').value = config.items
        return
      }
    }
    useState('sidebar-text').value = ''
    useState('sidebar-items').value = []
  }

  // Инициализация на сервере и клиенте
  initializeSidebarData()

  // Для клиентской части слушаем изменения маршрута
  if (process.client) {
    const router = useRouter()
    router.afterEach(() => {
      initializeSidebarData()
    })
  }
  
})

