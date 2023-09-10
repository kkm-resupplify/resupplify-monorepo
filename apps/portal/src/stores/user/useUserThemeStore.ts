import { defineStore } from 'pinia'

interface UserThemeState {
  theme: string
}

export const useUserThemeStore = defineStore({
  id: 'userTheme',

  state: (): UserThemeState => ({
    theme: localStorage.getItem('user-theme') || 'light'
  }),

  actions: {
    initializeTheme() {
      const savedTheme = localStorage.getItem('user-theme') || 'light'

      this.setUserTheme(savedTheme)
    },

    setUserTheme(theme: string) {
      this.theme = theme
      localStorage.setItem('user-theme', theme)
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
