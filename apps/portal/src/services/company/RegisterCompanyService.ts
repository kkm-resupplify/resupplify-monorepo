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
  logo: File | null
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
    this.logo = detailsStepData.image
    this.phoneNumber = contactInfoStepData.phoneNumber
    this.email = contactInfoStepData.email
    this.contactPerson = contactInfoStepData.contactPerson
    this.externalWebsite = contactInfoStepData.externalWebsite
  }
}

class RegisterCompanyService extends BaseService {
  async register({ generalStepData, detailsStepData, contactInfoStepData }: RegisterCompanyData) {
    const formData = convertToFormData(
      new RegisterCompanyFormDataDTO({
        generalStepData,
        detailsStepData,
        contactInfoStepData
      })
    )

    const response = await this.post({
      data: formData,
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

const convertToFormData = (storeData: any) => {
  const formData = new FormData()

  Object.keys(storeData).forEach((key) => {
    if (storeData[key] instanceof File) {
      formData.append(key, storeData[key])
    } else if (Array.isArray(storeData[key])) {
      storeData[key].forEach((item: { [x: string]: any }, index: any) => {
        for (const prop in item) {
          formData.append(`${key}[${index}][${prop}]`, String(item[prop]))
        }
      })
    } else {
      formData.append(key, String(storeData[key]))
    }
  })

  return formData
}
