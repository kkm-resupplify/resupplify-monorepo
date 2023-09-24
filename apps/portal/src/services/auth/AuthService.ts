import BaseService from '../BaseService'

interface AuthRequest {
  email: string
  password: string
  passwordConfirmation?: string
}
class AuthService extends BaseService {
  static REGISTER_SUFFIX = 'register'
  static LOGIN_SUFFIX = 'login'
  static LOGOUT_SUFFIX = 'logout'

  async register({ email, password, passwordConfirmation }: AuthRequest) {
    const response = await this.post({
      data: { email, password, passwordConfirmation },
      suffix: AuthService.REGISTER_SUFFIX
    })

    return response
  }

  async login({ email, password }: AuthRequest): Promise<Object> {
    const response = await this.post({
      data: { email, password },
      suffix: AuthService.LOGIN_SUFFIX
    })

    return response
  }

  async logout() {
    const response = await this.get({
      suffix: AuthService.LOGOUT_SUFFIX
    })

    return response
  }

  async test() {
    const response = await this.get({ notificationTitle: 'auth.notification.loginSuccess', id: 5 })

    console.log(response)
  }
}

export default new AuthService('')
