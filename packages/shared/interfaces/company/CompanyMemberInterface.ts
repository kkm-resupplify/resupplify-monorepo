import type { UserDetails } from '@sharedInterfaces/user/UserStoreDataInterface'

export interface CompanyMember {
  id: number
  email: string
  type: number
  createdAt: string
  userDetails: UserDetails | null
}
