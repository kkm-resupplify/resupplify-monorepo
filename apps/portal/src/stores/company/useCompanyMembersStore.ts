import type { CompanyMembersData } from '@/interfaces/company/CompanyMembersInterface'
import { defineStore } from 'pinia'

export const useCompanyMembersStore = defineStore({
  id: 'companyMembers',

  state: (): CompanyMembersData => ({
    users: []
  }),

  getters: {
    getCompanyMembers: (state: CompanyMembersData) => state
  },

  actions: {
    setCompanyMembers(companyMembersData: CompanyMembersData) {
      this.users = companyMembersData.users
    }
  },

  persist: true
})
