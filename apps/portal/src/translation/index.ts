import { createI18n } from 'vue-i18n'
import en from '@/translation/langs/en.json'
import pl from '@/translation/langs/pl.json'

// localStorage.setItem('marketify-lang', 'en')
// TODO: move it to the store
const userLang = localStorage.getItem('marketify-lang')

export const i18n = createI18n({
  locale: userLang!,
  fallbackLocale: 'en',
  messages: {
    en: en,
    pl: pl
  }
})
