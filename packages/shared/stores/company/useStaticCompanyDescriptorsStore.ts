import type { CompanyCategory } from '@sharedInterfaces/company/CompanyInterface'
import { defineStore } from 'pinia'

interface StaticCompanyDescriptionStore {
  companyCategories: CompanyCategory[]
}

export const useStaticCompanyDescriptorsStore = defineStore({
  id: 'staticCompanyDescriptors',

  state: (): StaticCompanyDescriptionStore => ({
    companyCategories: []
  }),

  getters: {
    getCompanyCategories: (state) =>
      state.companyCategories.map((item) => ({
        id: item.id,
        text: item.name
      }))
  },

  actions: {
    setCompanyCategories(companyCategories: CompanyCategory[]) {
      this.companyCategories = companyCategories
    }
  }
})
