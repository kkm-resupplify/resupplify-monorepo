import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/design-system/tokens/variables.scss";`
      }
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
      '@sharedAtoms': fileURLToPath(new URL('./atoms', import.meta.url)),
      '@sharedMolecules': fileURLToPath(new URL('./molecules', import.meta.url)),
      '@sharedEnums': fileURLToPath(new URL('./enums', import.meta.url)),
      '@sharedTranslations': fileURLToPath(new URL('./translations', import.meta.url)),
      '@sharedInterfaces': fileURLToPath(new URL('./interfaces', import.meta.url)),
      '@sharedComposables': fileURLToPath(new URL('./composables', import.meta.url)),
      '@sharedStores': fileURLToPath(new URL('./stores', import.meta.url))
    }
  }
})
