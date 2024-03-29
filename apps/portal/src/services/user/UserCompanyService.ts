import BaseService from '../BaseService'
import { useUserStore } from '@/stores/user/useUserStore'

interface JoinCompany {
  invitationToken: string
}

class UserCompanyService extends BaseService {
  async joinCompany({ invitationToken }: JoinCompany) {
    const response = await this.post({
      data: { invitationCode: invitationToken },
      notificationTitle: 'settings.myCompany.joinCompany.notification.joinCompanySuccessTitle'
    })

    const { data } = response

    const userStore = useUserStore()
    userStore.setUserCompany(data)

    return response
  }

  // TODO
  // Implement leave company
  async leaveCompany() {}
}

export default new UserCompanyService('company/join')
