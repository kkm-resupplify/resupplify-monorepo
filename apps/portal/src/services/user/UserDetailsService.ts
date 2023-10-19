import { useUserDetailsStore } from '@/stores/user/useUserDetailsStore'
import BaseService from '../BaseService'
import { DateTime } from 'luxon'

class UserDetailsDTO {
  firstName: string
  lastName: string
  phoneNumber: string
  birthDate: string
  sex: string

  constructor({ firstName, lastName, phoneNumber, birthDate, sex }: UserDetails) {
    this.firstName = firstName
    this.lastName = lastName
    this.phoneNumber = phoneNumber
    this.birthDate = DateTime.fromISO(`${birthDate}T13:07:04.054`).toFormat('MM-dd-yyyy')
    this.sex = sex
  }
}

interface UserDetails {
  firstName: string
  lastName: string
  phoneNumber: string
  birthDate: string
  sex: string
}

class UserDetailsService extends BaseService {
  static EDIT_USER_DETAILS_SUFFIX = 'user/userDetails'

  async saveUserDetails(userDetailsData: UserDetails) {
    const userDetails = new UserDetailsDTO(userDetailsData)

    const response = await this.post({
      data: userDetails,
      suffix: UserDetailsService.EDIT_USER_DETAILS_SUFFIX,
      notificationTitle: 'auth.notification.registerSuccessTitle',
      notificationText: 'auth.notification.registerSuccessText'
    })

    const { data } = response

    const userDetailsStore = useUserDetailsStore()
    userDetailsStore.setUserDetails(data)

    return response
  }
}

export default new UserDetailsService('')
