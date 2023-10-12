import { defineStore } from 'pinia'

interface RegisterCompanyGeneralStep {
  name: string
  country: string
  shortDescription: string
  description: string
}

interface RegisterCompanyDetailsStep {
  address: string
  tin: string

  logo: File | null
}
interface RegisterCompanyContactInfoStep {
  phoneNumber: string
  email: string
  contactPerson: string
  externalWebsite: string
}

interface RegisterCompanyState {
  general: RegisterCompanyGeneralStep
  details: RegisterCompanyDetailsStep
  contactInfo: RegisterCompanyContactInfoStep
}

export const useRegisterCompanyStore = defineStore({
  id: 'registerCompany',

  state: (): RegisterCompanyState => ({
    general: { name: '', country: '', shortDescription: '', description: '' },
    details: { address: '', tin: '', logo: null },
    contactInfo: { phoneNumber: '', email: '', contactPerson: '', externalWebsite: '' }
  }),

  actions: {}
})
