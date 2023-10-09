import BaseService from '../BaseService'

interface UserDetailsRequest {
  firstName: string
  lastName: string
  phoneNumber: string
  birthDate: string
}

class UserDetailsService extends BaseService {
  static ADD_SUFFIX = 'register'

  async add({ firstName, lastName, phoneNumber, birthDate }: UserDetailsRequest) {
    console.log(firstName, lastName, phoneNumber, birthDate)
  }
}

export default new UserDetailsService('')
