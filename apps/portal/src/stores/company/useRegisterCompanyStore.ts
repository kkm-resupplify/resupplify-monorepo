import { defineStore } from 'pinia'
import type {
  RegisterCompanyGeneralStep,
  RegisterCompanyDetailsStep,
  RegisterCompanyContactInfoStep
} from '@sharedInterfaces/company/RegisterCompanyInterface'

interface RegisterCompanyState {
  generalStepData: RegisterCompanyGeneralStep
  detailsStepData: RegisterCompanyDetailsStep
  contactInfoStepData: RegisterCompanyContactInfoStep
}

export const useRegisterCompanyStore = defineStore({
  id: 'registerCompany',

  state: (): RegisterCompanyState => ({
    generalStepData: { name: '', countryId: null, shortDescription: '', description: '' },
    detailsStepData: {
      address: '',
      companyCategoryId: null,
      tin: '',
      image: null,
      imagePreview: null
    },
    contactInfoStepData: { phoneNumber: '', email: '', contactPerson: '', externalWebsite: '' }
  }),

  getters: {
    registerCompanyFormData: (state: RegisterCompanyState) => state
  },

  actions: {
    setGeneralStepData(generalStepData: RegisterCompanyGeneralStep) {
      this.generalStepData = generalStepData
    },

    setDetailsStepData(detailsStepData: RegisterCompanyDetailsStep) {
      this.detailsStepData = detailsStepData
    },

    setContactInfoStepData(contactInfoStepData: RegisterCompanyContactInfoStep) {
      this.contactInfoStepData = contactInfoStepData
    }
  }
})
