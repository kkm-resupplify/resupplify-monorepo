import { defineStore } from 'pinia'

interface Language {
  id: number
  code: string
}

interface LanguageStoreState {
  languages: Language[]
}

export const useLanguageStore = defineStore({
  id: 'languageStore',

  state: (): LanguageStoreState => ({
    languages: [
      { id: 1, code: 'en-US' },
      { id: 2, code: 'pl-PL' }
    ]
  }),

  getters: {
    getLanguages: (state) => state.languages
  }
})
