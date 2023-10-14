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
        additionalData: `@import "../../packages/shared/design-system/tokens/variables.scss"; @import "../../packages/shared/design-system/screen-breakpoints.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@sharedAtoms': fileURLToPath(new URL('../../packages/shared/atoms', import.meta.url)),
      '@sharedMolecules': fileURLToPath(
        new URL('../../packages/shared/molecules', import.meta.url)
      ),
      '@sharedOrganisms': fileURLToPath(
        new URL('../../packages/shared/organisms', import.meta.url)
      ),
      '@sharedEnums': fileURLToPath(new URL('../../packages/shared/enums', import.meta.url)),
      '@sharedComposables': fileURLToPath(
        new URL('../../packages/shared/composables', import.meta.url)
      ),
      '@sharedInterfaces': fileURLToPath(
        new URL('../../packages/shared/interfaces', import.meta.url)
      ),
      '@sharedStores': fileURLToPath(new URL('../../packages/shared/stores', import.meta.url))
    }
  }
})
