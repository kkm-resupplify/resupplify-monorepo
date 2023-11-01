import { defineStore } from 'pinia'
import { i18n } from '@/translation/index'
import { setLocale } from '@vee-validate/i18n'
import type { UserDetails, UserData } from '@/interfaces/user/UserStoreDataInterface'
import { DateTime } from 'luxon'

export interface UserStoreData {
  email: string
  token: string
  details: UserDetails | null
  type: number
  createdAt: string
  language: 'en-US' | 'pl-PL'
}

export const useUserStore = defineStore({
  id: 'userStore',

  state: (): UserStoreData => ({
    email: '',
    token: '',
    type: 1,
    details: null,
    createdAt: '',
    language: 'en-US'
  }),

  getters: {
    getUserData: (state) => state,
    getEmail: (state) => state.email,
    getToken: (state) => state.token,
    getLanguage: (state) => state.language,
    getUserDetails: (state) => state.details,
    isAuthenticated: (state) => !!state.token
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
