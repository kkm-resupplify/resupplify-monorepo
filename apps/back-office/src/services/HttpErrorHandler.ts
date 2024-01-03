import { useGeneralNotificationStore } from '@sharedStores/notification/useGeneralNotificationStore'
import { useUserStore } from '@/stores/user/useUserStore'
import router, { RouteNames } from '@/routes/index'
import { i18n } from '@/translation/index'

const { t } = i18n.global

interface ApiError {
  message: string
  code: string
  uuid: string
}

class HttpErrorHandler {
  async handleErrorCode401(error: ApiError) {
    this.displayPopupNotification(error)
    this.clearStores()
    await this.rerouteToLogin()
  }

  handleErrorCode403(error: ApiError) {
    this.handleCommonErrorCases(error)
  }

  handleErrorCode404(error: ApiError) {
    this.rerouteToHome()
    this.handleCommonErrorCases(error)
  }

  handleErrorCode422(error: ApiError) {
    this.rerouteToHome()
    this.displayPopupNotification(error)
  }

  handleErrorCode429(error: ApiError) {
    this.handleCommonErrorCases(error)
  }

  handleErrorCode500(error: ApiError) {
    this.handleCommonErrorCases(error)
  }

  handleErrorCode503(error: ApiError) {
    this.handleCommonErrorCases(error)
  }

  handleCommonErrorCases(error: ApiError) {
    this.displayPopupNotification(error)
    this.clearNotificationStore()
  }

  displayPopupNotification(error: ApiError) {
    const generalNotificationStore = useGeneralNotificationStore()

    const notification = {
      title: t('global.errorOccured'),
      text: error.message,
      icon: 'error'
    }

    generalNotificationStore.sendFailNotification(notification)
  }

  clearNotificationStore() {
    const generalNotificationStore = useGeneralNotificationStore()
    generalNotificationStore.clearNotifications()
  }

  clearUserStore() {
    const userStore = useUserStore()
    userStore.$reset()
  }

  clearStores() {
    this.clearNotificationStore()
    this.clearUserStore()
  }

  async rerouteToLogin() {
    await router.push({ name: RouteNames.LOGIN })
  }

  rerouteToHome() {
    router.push({ name: RouteNames.HOME })
  }
}

export default new HttpErrorHandler()
