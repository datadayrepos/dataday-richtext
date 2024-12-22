import fs from 'node:fs'
import { defineConfig } from 'vitepress'

function buildSidebar() {
  return [
    {
      items: [
        { text: 'Home', link: '/' },
        { text: 'Quickstart', link: '/pages/getting-started' },
      ],
    },
    {
      text: 'Components',
      collapsible: true,
      items: [...getComponents()],
    },
    {
      text: 'PLAYGROUND',
      collapsible: true,
      items: [...getPlayground()],
    },
  ]
}

function getComponents() {
  return [
    { text: 'Accordion', link: '/components/accordion' },
    { text: 'Alert', link: '/components/alert' },
  ]
}


function getPlayground() {
  return [
    { text: 'Playground', link: '/components/xplayground.md' },
  ]
}

/**
 * This can be used as an example
 * https://github.com/vuejs/vitepress/blob/master/docs/.vitepress/config.js
 */
export default defineConfig({
  title: 'Ddtw Vue 3',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg', href: '/assets/a_favicon.png' }],

  ],
  themeConfig: {
    sidebar: buildSidebar(),
    logo: '/assets/a_favicon.png',
    socialLinks: [

    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © DataDayRepos',
    },
  },
  // Vite-specific configuration
  vite: {
    server: {
      port: Number.parseInt('5172', 10) || 3000, // Use the environment variable or default to 3000
      host: '0.0.0.0',
      https: {
        key: fs.readFileSync('./.cert/key.pem'),
        cert: fs.readFileSync('./.cert/cert.pem'),
      },
    },
  },
})