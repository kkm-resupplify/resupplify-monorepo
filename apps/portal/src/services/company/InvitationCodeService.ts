import type { CreateInvitationCodeData } from '@/interfaces/company/InvitationCodeInterface'
import BaseService from '../BaseService'

class InvitationCodeServiceDTO {
  roleId: number
  companyId: number
  expiryDate: string

  constructor({ roleId, companyId, expiryDate }: CreateInvitationCodeData) {
    this.roleId = roleId
    this.companyId = companyId
    this.expiryDate = expiryDate
  }
}

class InvitationCodeService extends BaseService {
  async createInvitationCode(createCodeData: CreateInvitationCodeData) {
    const invitationCode = new InvitationCodeServiceDTO(createCodeData)

    const response = await this.post({
      data: invitationCode,
      notificationTitle: 'company.invitation.notifications.createdInvitationCodeTitle',
      notificationText: 'company.invitation.notifications.createdInvitationCodeSuccess',
      notificationDuration: 3000
    })

    const { data } = response

    return data
  }
}

export default new InvitationCodeService('company/createInvitationCode')
