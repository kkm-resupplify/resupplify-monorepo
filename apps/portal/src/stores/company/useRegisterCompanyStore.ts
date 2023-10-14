import { defineStore } from 'pinia'
import type {
  RegisterCompanyGeneralStep,
  RegisterCompanyDetailsStep,
  RegisterCompanyContactInfoStep
} from '@interfaces/company/registerCompany'

interface RegisterCompanyState {
  generalStepData: RegisterCompanyGeneralStep
  detailsStepData: RegisterCompanyDetailsStep
  contactInfoStepData: RegisterCompanyContactInfoStep
}

export const useRegisterCompanyStore = defineStore({
  id: 'registerCompany',

  state: (): RegisterCompanyState => ({
    generalStepData: { name: '', countryId: '', shortDescription: '', description: '' },
    detailsStepData: { address: '', tin: '', logo: null },
    contactInfoStepData: { phoneNumber: '', email: '', contactPerson: '', externalWebsite: '' }
  }),

  getters: {},

  actions: {
    setGeneralStepData(generalStepData: RegisterCompanyGeneralStep) {
      this.generalStepData = generalStepData
    },

    setDetailsStepData(detailsStepData: RegisterCompanyDetailsStep) {
      this.detailsStepData = detailsStepData
    },

    setContactStepInfoData(contactInfoStepData: RegisterCompanyContactInfoStep) {
      this.contactInfoStepData = contactInfoStepData
    }
  }
})
