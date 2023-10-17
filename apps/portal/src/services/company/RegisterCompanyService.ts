import BaseService from '../BaseService'
import { useRegisterCompanyStore } from '@/stores/company/useRegisterCompanyStore'
import type { RegisterCompanyData } from '@interfaces/company/registerCompany'

class RegisterCompanyService extends BaseService {
  async register({ generalStepData, detailsStepData, contactInfoStepData }: RegisterCompanyData) {
    const response = await this.post({
      data: { generalStepData, detailsStepData, contactInfoStepData },
      notificationTitle: 'form.notification.registerCompanySuccessTitle',
      notificationText: 'form.notification.registerCompanySuccessText'
    })

    const { data } = response
    console.log(data)

    return response
  }
}

export default new RegisterCompanyService('')
