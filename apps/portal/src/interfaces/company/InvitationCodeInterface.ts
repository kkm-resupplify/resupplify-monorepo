export interface CreateInvitationCodeData {
  roleId: number
  companyId: number
  expiryDate: string
}

export interface InvitationCodeData {
    data: string[]
}