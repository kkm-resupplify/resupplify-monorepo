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

  async handleErrorCode403(error: ApiError) {
    this.handleCommonErrorCases(error)
  }

  async handleErrorCode404(error: ApiError) {
    await this.rerouteToHome()
    this.handleCommonErrorCases(error)
  }

  async handleErrorCode422(error: ApiError) {
    await this.rerouteToHome()
    this.displayPopupNotification(error)
  }

  async handleErrorCode429(error: ApiError) {
    this.handleCommonErrorCases(error)
  }

  async handleErrorCode500(error: ApiError) {
    this.handleCommonErrorCases(error)
  }

  async handleErrorCode503(error: ApiError) {
    this.handleCommonErrorCases(error)
  }

  async handleCommonErrorCases(error: ApiError) {
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
    // Display current error notification and clear the rest
    generalNotificationStore.displayNextNotification()
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

  async rerouteToHome() {
    await router.push({ name: RouteNames.HOME })
  }
}

export default new HttpErrorHandler()
