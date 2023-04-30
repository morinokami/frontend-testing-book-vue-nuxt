import { fileURLToPath, URL } from 'node:url'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      imports: ['vue', 'vue-router'],
      dirs: ['./composables'],
      dts: '.storybook/auto-imports.d.ts',
      vueTemplate: true
    }),
    Components({
      dirs: ['./components/'],
      directoryAsNamespace: false,
      dts: '.storybook/components.d.ts'
    })
  ],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./', import.meta.url))
    }
  }
})
