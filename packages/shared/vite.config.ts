import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
      '@sharedAtoms': fileURLToPath(new URL('./atoms', import.meta.url)),
      '@sharedTranslations': fileURLToPath(new URL('./translations', import.meta.url))
    }
  }
})
