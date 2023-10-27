import { defineStore } from 'pinia'

export const useInvitationCodeStore = defineStore({
  id: 'invitationCode',

  state: () => ({
    invitationCode: ""
  }),

  getters: {
    getInvitationCode: (state) => state
  },

  actions: {
    setInvitationCode(invitationCode: string) {
      this.invitationCode = invitationCode
    }
  },

  persist: true
})
