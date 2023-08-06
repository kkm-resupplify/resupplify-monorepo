import { fileURLToPath, URL } from 'node:url'
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8081
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "../../packages/shared/design-system/tokens/variables.scss"; @import "../../packages/shared/design-system/screen-breakpoints.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@sharedAtoms': fileURLToPath(new URL('../../packages/shared/atoms', import.meta.url)),
      '@sharedEnums': fileURLToPath(new URL('../../packages/shared/enums', import.meta.url)),
      '@sharedComposables': fileURLToPath(
        new URL('../../packages/shared/composables', import.meta.url)
      )
    }
  }
})
