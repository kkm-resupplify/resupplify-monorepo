import { defineStore } from 'pinia'

interface UserThemeState {
  theme: string
}

export const useUserThemeStore = defineStore({
  id: 'userTheme',

  state: (): UserThemeState => ({
    theme: 'light'
  }),

  getters: {
    getUserTheme: (state) => state.theme
  },

  actions: {
    initializeTheme() {
      document.documentElement.dataset.theme = this.theme
    },

    setUserTheme(theme: string) {
      this.theme = theme
      document.documentElement.dataset.theme = theme
    },

    toggleUserTheme() {
      if (this.theme === 'light') {
        this.setUserTheme('dark')
      } else {
        this.setUserTheme('light')
      }
    }
  },

  persist: true
})
