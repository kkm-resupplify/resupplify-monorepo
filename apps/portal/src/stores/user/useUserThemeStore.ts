import { defineStore } from 'pinia'

interface UserThemeState {
  theme: string
}

export const useUserThemeStore = defineStore({
  id: 'userTheme',

  state: (): UserThemeState => ({
    theme: 'light'
  }),

  actions: {
    initializeTheme() {
      const savedTheme = this.theme ?? 'light'

      this.setUserTheme(savedTheme)
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
