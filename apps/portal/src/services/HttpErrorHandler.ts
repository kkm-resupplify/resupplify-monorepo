import { useGeneralNotificationStore } from '@sharedStores/notification/useGeneralNotificationStore'
import { i18n } from '@/translation/index'
const { t } = i18n.global

interface ApiError {
  message: string
  code: string
  uuid: string
}

class HttpErrorHandler {
  handleErrorCode401(error: ApiError): void {
    this.displayPopupNotification(error)
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
