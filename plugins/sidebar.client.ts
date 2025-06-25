// plugins/sidebar.client.ts
export default defineNuxtPlugin(() => {
  // Конфигурация для разных разделов
  const sidebarConfig = {
    '/components': {
      text: 'Components',
      items: [
        {
          text: 'Text',
          items: [
            {
              name: 'Gradient',
              path: '/components/text/gradient',
            },
            {
              name: 'Highlight',
              path: '/components/text/highlight',
            },
            {
              name: 'Truncate',
              path: '/components/text/truncate',
            },
            {
              name: 'Text With Badge',
              path: '/components/text/badge',
            },
            {
              name: 'Typing',
              path: '/components/text/typing',
            },
          ],
        },
      ]
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
      ]
    }
  }

  // Инициализируем данные сайдбара глобально
  const initializeSidebarData = () => {
    const route = useRoute()
    
    // Проверяем каждый раздел из конфигурации
    for (const [pathPrefix, config] of Object.entries(sidebarConfig)) {
      if (route.path.startsWith(pathPrefix)) {
        useState('sidebar-text').value = config.text
        useState('sidebar-items').value = config.items
        return // Выходим, как только нашли подходящий раздел
      }
    }
    
    // Если не нашли подходящий раздел, очищаем сайдбар
    useState('sidebar-text').value = ''
    useState('sidebar-items').value = []
  }

  // Инициализируем при загрузке
  initializeSidebarData()

  // Слушаем изменения маршрута и обновляем данные
  const router = useRouter()
  router.afterEach(() => {
    initializeSidebarData()
  })
})