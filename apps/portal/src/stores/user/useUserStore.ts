import { defineStore } from 'pinia'
import { i18n } from '@/translation/index'
interface UserStoreData {
  email: string
  token: string
  language: 'en-US' | 'pl-PL'
}
export const useUserStore = defineStore({
  id: 'userStore',

  state: (): UserStoreData => ({
    email: '',
    token: '',
    language: 'en-US'
  }),

  getters: {
    getEmail: (state) => state.email,
    getToken: (state) => state.token,
    getLanguage: (state) => state.language
  },

  actions: {
    isLoggedIn() {
      return !!this.token
    },

    setUser({ email, token }: { email: string; token: string }) {
      this.setEmail(email)
      this.setToken(token)
    },

    clearUser() {
      this.clearEmail()
      this.clearToken()
    },

    setEmail(token: string) {
      this.email = token
    },

    clearEmail() {
      this.email = ''
    },

    setToken(token: string) {
      this.token = token
    },

    clearToken() {
      this.token = ''
    },

    setLanguage(language: 'en-US' | 'pl-PL') {
      this.language = language

      this.initializeLocale()
    },

    initializeLocale() {
      i18n.global.locale.value = this.language
    }
  },

  persist: true
})
