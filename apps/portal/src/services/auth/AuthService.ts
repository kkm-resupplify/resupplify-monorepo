import BaseService from '../BaseService'
import { i18n } from '@/translation/index'
import { useUserStore } from '@/stores/user/useUserStore'

const { t } = i18n.global

interface AuthRequest {
  email: string
  password: string
  passwordConfirmation?: string
}
class AuthService extends BaseService {
  static REGISTER_SUFFIX = 'register'
  static LOGIN_SUFFIX = 'login'
  static LOGOUT_SUFFIX = 'logout'

  async register({ email, password, passwordConfirmation }: AuthRequest): Promise<Object> {
    const response = await this.post({
      data: { email, password, password_confirmation: passwordConfirmation },
      suffix: AuthService.REGISTER_SUFFIX,
      notificationTitle: t('auth.notification.registerSuccessTitle'),
      notificationText: t('auth.notification.registerSuccessText')
    })

    const { data } = response
    const { token, user } = data

    const userStore = useUserStore()
    userStore.setUser({ email: user.email, token })

    return response
  }

  async login({ email, password }: AuthRequest): Promise<Object> {
    const response = await this.post({
      data: { email, password },
      suffix: AuthService.LOGIN_SUFFIX,
      notificationTitle: t('auth.notification.loginSuccessTitle'),
      notificationText: t('auth.notification.loginSuccessText')
    })

    const { data } = response
    const { token, user } = data
    const userStore = useUserStore()
    userStore.setUser({ email: user.email, token })

    return response
  }

  async logout(): Promise<Object> {
    const response = await this.get({
      suffix: AuthService.LOGOUT_SUFFIX,
      notificationTitle: t('auth.notification.logoutSuccessTitle'),
      notificationText: t('auth.notification.logoutSuccessText')
    })

    const userStore = useUserStore()
    userStore.clearUser()

    return response
  }
}

export default new AuthService('')
