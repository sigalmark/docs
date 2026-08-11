import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Sigalmark Docs',
  description: 'Issue, manage, and verify blockchain-backed digital certificates.',
  base: '/docs/',
  // Keep *.html URLs — the dashboard deep-links to them.
  cleanUrls: false,
  srcExclude: ['**/README.md'],
  head: [
    ['link', { rel: 'icon', href: '/docs/favicon.ico' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap' }],
  ],
  themeConfig: {
    siteTitle: 'Sigalmark Docs',
    search: { provider: 'local' },
    nav: [
      { text: 'Guide', link: '/getting-started.html' },
      { text: 'Tutorials', items: [
        { text: 'User (Member)', link: '/tutorial-user.html' },
        { text: 'Admin', link: '/tutorial-admin.html' },
        { text: 'Operator', link: '/tutorial-operator.html' },
      ]},
      { text: 'FAQ', link: '/faq.html' },
      { text: 'Open the app', link: 'https://app.sigalmark.com' },
    ],
    sidebar: [
      { text: 'Guide', items: [
        { text: 'Getting Started', link: '/getting-started.html' },
        { text: 'Certificates', link: '/certificates.html' },
        { text: 'Batch Upload', link: '/batch-upload.html' },
        { text: 'Verification', link: '/verification.html' },
        { text: 'FAQ', link: '/faq.html' },
      ]},
      { text: 'Tutorials by Role', items: [
        { text: 'User (Member)', link: '/tutorial-user.html' },
        { text: 'Admin', link: '/tutorial-admin.html' },
        { text: 'Operator', link: '/tutorial-operator.html' },
      ]},
    ],
    outline: { level: [2, 3] },
    footer: {
      message: 'Secure blockchain-based certification technology.',
      copyright: 'Sigalmark © 2026',
    },
  },
})
