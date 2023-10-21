import BaseService from '../BaseService'
import { DateTime } from 'luxon'
import { useUserStore } from '@/stores/user/useUserStore'

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
    this.birthDate = DateTime.fromISO(`${birthDate}`).toFormat('MM-dd-yyyy')
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
  async saveUserDetails(userDetailsData: UserDetails) {
    const userDetails = new UserDetailsDTO(userDetailsData)

    const response = await this.post({
      data: userDetails,
      suffix: 'user/userDetails',
      notificationTitle: 'auth.notification.registerSuccessTitle',
      notificationText: 'auth.notification.registerSuccessText'
    })

    const { data } = response

    const userStore = useUserStore()
    userStore.setUserDetails(data.userDetails)

    return response
  }
}

export default new UserDetailsService('')
