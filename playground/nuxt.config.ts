import { defineNuxtConfig } from 'nuxt'
import MyModule from '..'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    MyModule
  ],
  myModule: {
    addPlugin: true,
    autoImport: true
  }
})
