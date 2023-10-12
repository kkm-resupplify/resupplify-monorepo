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
  generalData: RegisterCompanyGeneralStep
  detailsData: RegisterCompanyDetailsStep
  contactInfoData: RegisterCompanyContactInfoStep
}

export const useRegisterCompanyStore = defineStore({
  id: 'registerCompany',

  state: (): RegisterCompanyState => ({
    generalData: { name: '', country: '', shortDescription: '', description: '' },
    detailsData: { address: '', tin: '', logo: null },
    contactInfoData: { phoneNumber: '', email: '', contactPerson: '', externalWebsite: '' }
  }),

  getters: {},

  actions: {
    setGeneralData(generalData: RegisterCompanyGeneralStep) {
      this.generalData = generalData
    },

    setDetailsData(detailsData: RegisterCompanyDetailsStep) {
      this.detailsData = detailsData
    },

    setContactInfoData(contactInfoData: RegisterCompanyContactInfoStep) {
      this.contactInfoData = contactInfoData
    }
  }
})
