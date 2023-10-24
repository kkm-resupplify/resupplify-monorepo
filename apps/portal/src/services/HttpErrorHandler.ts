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

    const userStore = useUserStore()
    userStore.$reset()

    await router.push({ name: RouteNames.LOGIN })
  }

  handleErrorCode403(error: ApiError): void {
    this.displayPopupNotification(error)
  }

  handleErrorCode404(error: ApiError): void {
    this.displayPopupNotification(error)
  }

  handleErrorCode422(error: ApiError): void {
    this.displayPopupNotification(error)
  }

  handleErrorCode429(error: ApiError): void {
    this.displayPopupNotification(error)
  }

  handleErrorCode500(error: ApiError): void {
    this.displayPopupNotification(error)
  }

  handleErrorCode503(error: ApiError): void {
    this.displayPopupNotification(error)
  }

  displayPopupNotification(error: ApiError): void {
    const generalNotificationStore = useGeneralNotificationStore()

    const notification = {
      title: t('global.errorOccured'),
      text: error.message,
      icon: 'error'
    }

    generalNotificationStore.sendFailNotification(notification)
  }
}

export default new HttpErrorHandler()
