import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  content: {
    sources: [
      'content',
      {
        name: 'build-with-ben',
        prefix: '/bwb',
        driver: 'fs',
        base: '/Users/bencodezen/Pandan Studio Dropbox/Benjamin Hong/digital-forest/zettelkasten/Build with Ben'
      }
    ]
  }
})
