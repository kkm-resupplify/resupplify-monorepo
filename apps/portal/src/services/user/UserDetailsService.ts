import BaseService from '../BaseService'

class UserDetailsDTO {
  fullName: string
  phoneNumber: string
  birthDate: string

  constructor({ firstName, lastName, phoneNumber, birthDate }: UserDetails) {
    this.fullName = `${firstName} ${lastName}`
    this.phoneNumber = phoneNumber
    this.birthDate = birthDate
  }
}

interface UserDetails {
  firstName: string
  lastName: string
  phoneNumber: string
  birthDate: string
}

class UserDetailsService extends BaseService {
  static ADD_SUFFIX = 'register'

  async saveUserDetails(userDetailsData: UserDetails) {
    const userDetails = new UserDetailsDTO(userDetailsData)
    console.log(userDetails)
  }
}

export default new UserDetailsService('')
