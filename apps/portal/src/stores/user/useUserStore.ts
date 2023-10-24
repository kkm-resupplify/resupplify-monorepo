import { defineStore } from 'pinia'
import { i18n } from '@/translation/index'
import { setLocale } from '@vee-validate/i18n'
import type { UserDetails, UserData } from '@/interfaces/user/UserStoreDataInterface'

export interface UserStoreData {
  email: string
  token: string | null
  details: UserDetails | null
  type: number
  createdAt: string
  language: 'en-US' | 'pl-PL'
  company: null | Record<string, any>
}

export const useUserStore = defineStore({
  id: 'userStore',

  state: (): UserStoreData => ({
    email: '',
    token: null,
    type: 1,
    details: null,
    createdAt: '',
    language: 'en-US',
    company: null
  }),

  getters: {
    getUserData: (state) => state,
    getEmail: (state) => state.email,
    getToken: (state) => state.token,
    getLanguage: (state) => state.language,
    getUserDetails: (state) => state.details,
    isAuthenticated: (state) => !!state.token,
    hasUserDetails: (state) => !!state.details,
    hasCompany: (state) => !!state.company
  },

  actions: {
    setUserData(userData: UserData, token: string) {
      this.email = userData.email
      this.token = token
      this.type = userData.type
      this.details = userData.details
      this.createdAt = userData.createdAt
    },

    setUserDetails(userDetails: UserDetails) {
      this.details = userDetails
    },

    setUserCompany(company: Record<string, any>) {
      this.company = company
    },

    clearUser() {
      this.$reset()
    },

    setLanguage(language: 'en-US' | 'pl-PL') {
      this.language = language

      this.initializeLocale()
    },

    initializeLocale() {
      i18n.global.locale.value = this.language
      setLocale(this.language)
    }
  },

  persist: true
})
