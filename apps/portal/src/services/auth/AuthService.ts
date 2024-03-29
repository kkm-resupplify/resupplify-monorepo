import BaseService from '../BaseService'
import { useUserStore } from '@/stores/user/useUserStore'
import router, { RouteNames } from '@/routes/index'

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
      data: { email, password, password_confirmation: passwordConfirmation },
      suffix: AuthService.REGISTER_SUFFIX,
      notificationTitle: 'auth.notification.registerSuccessTitle',
      notificationText: 'auth.notification.registerSuccessText',
      notificationDuration: 7000
    })

    if (response.success) {
      const { data } = response
      const { token, user } = data

      const userStore = useUserStore()
      userStore.setUserData(user, token)

      await router.push({ name: RouteNames.SETTINGS })
    }

    return response
  }

  async login({ email, password }: AuthRequest) {
    const response = await this.post({
      data: { email, password },
      suffix: AuthService.LOGIN_SUFFIX,
      notificationTitle: 'auth.notification.loginSuccessTitle',
      notificationText: 'auth.notification.loginSuccessText'
    })

    if (response.success) {
      const { data } = response
      const { token, user } = data

      const userStore = useUserStore()
      userStore.setUserData(user, token)

      await router.push({ name: RouteNames.HOME })
    }

    return response
  }

  async logout() {
    const response = await this.post({
      suffix: AuthService.LOGOUT_SUFFIX,
      notificationTitle: 'auth.notification.logoutSuccessTitle',
      notificationText: 'auth.notification.logoutSuccessText'
    })

    if (response.success) {
      const userStore = useUserStore()
      userStore.clearUser()
      await router.push({ name: RouteNames.LOGIN })
    }

    return response
  }
}

export default new AuthService('')
