import type {
  CreateInvitationCodeData,
  InvitationCodeData
} from '@/interfaces/company/InvitationCodeInterface'
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
  async createInvitationCode(createCodeData: CreateInvitationCodeData): Promise<InvitationCodeData> {
    const invitationCode = new InvitationCodeServiceDTO(createCodeData)

    const response = await this.post({
      data: invitationCode,
      suffix: 'company/createInvitationCode',
      notificationTitle: 'settings.profile.notification.created'
    })

    const { data } = response

    return data
  }
}

export default new InvitationCodeService('')
