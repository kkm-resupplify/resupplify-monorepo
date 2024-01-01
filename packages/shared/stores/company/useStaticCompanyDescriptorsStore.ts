import type { CompanyCategory } from '@sharedInterfaces/company/CompanyInterface'
import { defineStore } from 'pinia'

interface Country {
  id: string
  name: string
  code: string
}

interface StaticCompanyDescriptionStore {
  companyCategories: CompanyCategory[]
  countries: Country[]
}

export const useStaticCompanyDescriptorsStore = defineStore({
  id: 'staticCompanyDescriptors',

  state: (): StaticCompanyDescriptionStore => ({
    companyCategories: [],
    countries: []
  }),

  getters: {
    getCompanyCategories: (state) =>
      state.companyCategories.map((item) => ({
        id: item.id,
        text: item.name.toLowerCase().replace(/_([a-z])/g, (_, match) => match.toUpperCase())
      })),
    getCountries: (state) => state.countries
  },

  actions: {
    setCompanyCategories(companyCategories: CompanyCategory[]) {
      this.companyCategories = companyCategories
    },

    setCountries(countries: Country[]) {
      this.countries = countries
    }
  }
})
