import { createI18n } from 'vue-i18n'
import enUS from '@/translation/langs/en-US.json'
import plPL from '@/translation/langs/pl-PL.json'
import numberFormats from '@/translation/numberFormats'

export const i18n = createI18n({
  allowComposition: true,
  locale: 'en-US',
  fallbackLocale: 'en-US',
  inheriteLocale: true,
  legacy: false,
  messages: {
    'en-US': enUS,
    'pl-PL': plPL
  },
  numberFormats
})
