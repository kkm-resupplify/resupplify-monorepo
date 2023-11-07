import type { CompanyRole } from '@interfaces/company/CompanyRoleInterface'
import { defineStore } from 'pinia'

interface CompanyRoleState {
  roles: CompanyRole[]
}

export const useCompanyRoleStore = defineStore({
  id: 'companyRoles',

  state: (): CompanyRoleState => ({
    roles: []
  }),

  getters: {
    getCompanyRoles: (state) => state.roles
  },

  actions: {
    setCompanyRoles(companyRoles: CompanyRole[]) {
      this.roles = companyRoles
    }
  },

  persist: true
})
