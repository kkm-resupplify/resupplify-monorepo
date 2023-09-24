import { defineStore } from 'pinia'
interface UserStoreData {
  email: string
  token: string
}
export const useUserStore = defineStore({
  id: 'userStore',

  state: (): UserStoreData => ({
    email: '',
    token: ''
  }),

  getters: {
    getEmail: (state) => state.email,
    getToken: (state) => state.token
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
    }
  },

  persist: true
})
