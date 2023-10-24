import BaseService from '../BaseService'
import { useRegisterCompanyStore } from '@/stores/company/useRegisterCompanyStore'
import type { RegisterCompanyData } from '@/interfaces/company/RegisterCompanyInterface'

class RegisterCompanyFormDataDTO {
  name: string
  countryId: number | null
  shortDescription: string
  description: string
  address: string
  tin: string
  logo: File | null | string
  phoneNumber: string
  email: string
  contactPerson: string
  externalWebsite: string
  companyCategoryId: number | null

  constructor({ generalStepData, detailsStepData, contactInfoStepData }: RegisterCompanyData) {
    this.name = generalStepData.name
    this.countryId = generalStepData.countryId
    this.shortDescription = generalStepData.shortDescription
    this.description = generalStepData.description
    this.address = detailsStepData.address
    this.companyCategoryId = detailsStepData.companyCategoryId
    this.tin = detailsStepData.tin
    this.logo = detailsStepData.logo
    this.phoneNumber = contactInfoStepData.phoneNumber
    this.email = contactInfoStepData.email
    this.contactPerson = contactInfoStepData.contactPerson
    this.externalWebsite = contactInfoStepData.externalWebsite
  }
}

class RegisterCompanyService extends BaseService {
  async register({ generalStepData, detailsStepData, contactInfoStepData }: RegisterCompanyData) {
    const response = await this.post({
      data: new RegisterCompanyFormDataDTO({
        generalStepData,
        detailsStepData,
        contactInfoStepData
      }),
      notificationTitle: 'company.register.notification.registerCompanySuccessTitle',
      notificationText: 'company.register.notification.registerCompanySuccessText',
      notificationDuration: 7000
    })

    return response
  }
}

export default new RegisterCompanyService('/company')
