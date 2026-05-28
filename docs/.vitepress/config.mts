import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ru-RU',
  title: 'Мозаика',
  description: 'Пошаговая документация по созданию приложения учета материалов',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Мозаика Docs',
    nav: [
      { text: 'Руководство', link: '/stages/' },
      { text: 'Модули ДЭ', link: '/stages/modules-map' },
      { text: 'Справочник', link: '/reference/data-appendices' },
      { text: 'Чек-лист', link: '/reference/final-checklist' }
    ],
    search: { provider: 'local' },
    outline: { level: [2, 3], label: 'На странице' },
    docFooter: { prev: 'Назад', next: 'Далее' },
    sidebar: {
      '/stages/': [
        {
          text: 'Маршрут разработки',
          items: [
            { text: 'Обзор этапов', link: '/stages/' },
            { text: 'Карта модулей ДЭ', link: '/stages/modules-map' },
            { text: '0. Что получится · все модули', link: '/stages/00-product-goal' },
            { text: '1. Структура проекта · подготовка', link: '/stages/01-project-structure' },
            { text: '2. Индивидуальные данные · М1', link: '/stages/02-data-appendices' },
            { text: '3. MySQL и phpMyAdmin · М1', link: '/stages/03-mysql-docker' },
            { text: '4. Схема базы данных · М1', link: '/stages/04-database-schema' },
            { text: '5. Импорт данных · М1', link: '/stages/05-import-data' },
            { text: '6. Контроль БД · М1', link: '/stages/06-database-checks' },
            { text: '7. Python-окружение · М2', link: '/stages/07-python-env' },
            { text: '8. Подключение к БД · М2', link: '/stages/08-db-layer' },
            { text: '9. Расчёты · М2/М4', link: '/stages/09-calculations' },
            { text: '10. Интерфейс PyQt6 · М2/М3/М4', link: '/stages/10-pyqt-ui' },
            { text: '11. Проверка продукта · М2/М3/М4', link: '/stages/11-product-checks' },
            { text: '12. Git и артефакты · М1/М4', link: '/stages/12-git-export' },
            { text: '13. Сборка EXE · финал', link: '/stages/13-build-exe' },
            { text: '14. Финальная сдача · финал', link: '/stages/14-final-package' }
          ]
        }
      ],
      '/reference/': [
        {
          text: 'Справочник',
          items: [
            { text: 'Индивидуальные приложения', link: '/reference/data-appendices' },
            { text: 'Типовые ошибки', link: '/reference/troubleshooting' },
            { text: 'Финальный чек-лист', link: '/reference/final-checklist' }
          ]
        }
      ]
    },
    socialLinks: []
  }
})
