import { useUserStore } from '@/stores/user/useUserStore'
import BaseService from '../BaseService'
import type { RegisterCompanyData } from '@sharedInterfaces/company/RegisterCompanyInterface'

class RegisterCompanyFormDataDTO {
  name: string
  countryId: number | null
  shortDescription: string
  description: string
  address: string
  tin: string
  logo: null | string
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

    const { data } = response
    const userStore = useUserStore()

    userStore.setUserCompany(data)

    return response
  }

  async edit({ generalStepData, detailsStepData, contactInfoStepData }: RegisterCompanyData) {
    const response = await this.put({
      data: new RegisterCompanyFormDataDTO({
        generalStepData,
        detailsStepData,
        contactInfoStepData
      }),
      notificationTitle: 'company.register.notification.editCompanySuccessTitle',
      notificationText: 'company.register.notification.editCompanySuccessText',
      notificationDuration: 7000
    })

    const { data } = response
    const userStore = useUserStore()

    userStore.setUserCompany(data)

    return response
  }
}

export default new RegisterCompanyService('/company')
