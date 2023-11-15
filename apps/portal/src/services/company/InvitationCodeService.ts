import type { CreateInvitationCodeData } from '@sharedInterfaces/company/InvitationCodeInterface'
import BaseService from '../BaseService'

class InvitationCodeServiceDTO {
  roleId: number

  constructor({ roleId }: CreateInvitationCodeData) {
    this.roleId = roleId
  }
}

class InvitationCodeService extends BaseService {
  async createInvitationCode(createCodeData: CreateInvitationCodeData) {
    const invitationCode = new InvitationCodeServiceDTO(createCodeData)

    const response = await this.post({
      data: invitationCode,
      notificationTitle: 'company.invitation.notification.createdInvitationTokenTitleSuccess',
      notificationDuration: 3000
    })

    return response
  }
}

export default new InvitationCodeService('company/createInvitationCode')
