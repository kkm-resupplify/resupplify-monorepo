import { defineStore } from 'pinia'

export const useUserStore = defineStore('useUserStore', {
  state: () => {
    return {
      email: 'user@email.com',
      token: ''
    }
  },

  getters: {
    getEmail: (state) => state.email,
    getToken: (state) => state.token
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
    }
  }
})
