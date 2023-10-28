import type { CompanyRole } from '@/interfaces/company/CompanyRoleInterface'
import { defineStore } from 'pinia'

interface CompanyRolesState {
  roles: CompanyRole[]
}

export const useCompanyRolesService = defineStore({
  id: 'companyRoles',

  state: (): CompanyRolesState => ({
    roles: []
  }),

  getters: {
    getCompanyRoles: (state) => state.roles
  },

  persist: true
})
