import BaseService from '../BaseService'

class AuthService extends BaseService {
  constructor() {
    super('test')
  }

  async login() {
    const data = { email: 'test@test.com', password: 'test_pswd' }
  }

  async test() {
    const id = 5
    const response = await this.get({ id, prefix: 'elo', suffix: 'melo' })

    console.log(response)
  }
}

export default new AuthService()
