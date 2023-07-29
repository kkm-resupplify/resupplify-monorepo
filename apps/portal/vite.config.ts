import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "../../packages/shared/design-system/tokens/variables.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@sharedAtoms': fileURLToPath(new URL('../../packages/shared/atoms', import.meta.url))
    }
  }
})
