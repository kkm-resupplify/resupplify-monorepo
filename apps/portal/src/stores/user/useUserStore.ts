import { defineStore } from 'pinia'

// TODO: theme, token
export const useUserStore = defineStore('useUserStore', {
  state: () => {
    return {
      email: 'user@email.com',
      token: '',
      theme: ''
    }
  },
  getters: {
    getEmail: (state) => state.email,
    getToken: (state) => state.token,
    getTheme: (state) => state.theme
  },
  actions: {
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

    setTheme(theme: string) {
      this.theme = theme
    },

    clearTheme() {
      this.theme = ''
    }
  }
})
