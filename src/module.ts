import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { join } from 'pathe'
import { defineNuxtModule, addPlugin, addAutoImportDir } from '@nuxt/kit'

export interface ModuleOptions {
  addPlugin: boolean,
  autoImport: boolean,
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-ukit',
    configKey: 'ukit'
  },
  defaults: {
    addPlugin: true,
    autoImport: true // Set the default option to true.
  },
  setup (options, nuxt) {
    if (options.addPlugin) {
      const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
      nuxt.options.build.transpile.push(runtimeDir)
      addPlugin(resolve(runtimeDir, 'plugin'))

      if (options.autoImport) {
        // Use that magic helper to auto-import your composables.
        addAutoImportDir(resolve(runtimeDir, 'components'))
      }

      nuxt.hook('components:dirs', (dirs) => {
        dirs.push({
          path: join(__dirname, 'components'),
          prefix: 'Uk'
        })
      })
    }
  }
})
