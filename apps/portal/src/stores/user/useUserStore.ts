import { defineStore } from 'pinia'
import { i18n } from '@/translation/index'
import { setLocale } from '@vee-validate/i18n'
import type { UserDetails, UserData } from '@sharedInterfaces/user/UserStoreDataInterface'
import type { CompanyData } from '@sharedInterfaces/company/CompanyInterface'
import UserLanguageEnum from '@sharedEnums/user/UserLanguageEnum'

export interface UserStoreData {
  email: string
  token: string | null
  details: UserDetails | null
  type: number
  createdAt: string
  languageId: number
  company: null | CompanyData
}

export const useUserStore = defineStore({
  id: 'userStore',

  state: (): UserStoreData => ({
    email: '',
    token: null,
    type: 1,
    details: null,
    createdAt: '',
    languageId: 1,
    company: null
  }),

  getters: {
    getUserData: (state) => state,
    getEmail: (state) => state.email,
    getToken: (state) => state.token,
    getLanguageId: (state) => state.languageId,
    getLanguage: (state) =>
      UserLanguageEnum.getAllValues().find((value) => value.id === state.languageId),
    getUserDetails: (state) => state.details,
    isAuthenticated: (state) => !!state.token,
    hasUserDetails: (state) => !!state.details,
    hasCompany: (state) => !!state.company,
    getCompany: (state) => state.company
  },

  actions: {
    setUserData(userData: UserData, token: string) {
      this.email = userData.email
      this.token = token
      this.type = userData.type
      this.details = userData.details
      this.company = userData.company
      this.createdAt = userData.createdAt
    },

    setUserDetails(userDetails: UserDetails) {
      this.details = userDetails
    },

    setUserCompany(company: CompanyData) {
      this.company = company
    },

    clearUser() {
      this.$reset()
    },

    setLanguage(languageId: number) {
      this.languageId = languageId

      this.initializeLocale()
    },

    initializeLocale() {
      const languageKey = this.getLanguage.key

      i18n.global.locale.value = languageKey
      setLocale(languageKey)
    }
  },

  persist: true
})
