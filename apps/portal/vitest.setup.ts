import { config } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'

// i18n plugin setup
const i18n = createI18n({
  legacy: false,
  allowComposition: true
})

// Global properties setup
config.global.mocks['$t'] = (v: any) => v

// Global plugins setup
config.global.plugins = [i18n]
