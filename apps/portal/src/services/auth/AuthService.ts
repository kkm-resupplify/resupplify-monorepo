import BaseService from '../BaseService'

class AuthService extends BaseService {
  static REGISTER_SUFFIX = 'register'
  static LOGIN_SUFFIX = 'login'
  static LOGOUT_SUFFIX = 'logout'

  async login() {
    const data = { email: 'test@test.com', password: 'test_pswd' }
  }

  async test() {
    const response = await this.get({ notificationTitle: 'auth.notification.loginSuccess', id: 5 })

    console.log(response)
  }
}

export default new AuthService()
