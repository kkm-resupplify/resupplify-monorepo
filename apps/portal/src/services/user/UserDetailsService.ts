import BaseService from '../BaseService'

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
    this.birthDate = birthDate
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
  }
}

export default new UserDetailsService('')
