import type { AxiosError } from 'axios'
import { useGeneralNotificationStore } from '@sharedStores/notification/useGeneralNotificationStore'
import { i18n } from '@/translation/index'
const { t } = i18n.global

class HttpErrorHandler {
  handleErrorCode401(error: AxiosError): void {
    this.displayPopupNotification(error)
  }

  handleErrorCode403(error: AxiosError): void {
    this.displayPopupNotification(error)
  }

  handleErrorCode404(error: AxiosError): void {
    this.displayPopupNotification(error)
  }

  handleErrorCode422(error: AxiosError): void {
    this.displayPopupNotification(error)
  }

  handleErrorCode429(error: AxiosError): void {
    this.displayPopupNotification(error)
  }

  handleErrorCode500(error: AxiosError): void {
    this.displayPopupNotification(error)
  }

  handleErrorCode503(error: AxiosError): void {
    this.displayPopupNotification(error)
  }

  displayPopupNotification(error: AxiosError): void {
    const generalNotificationStore = useGeneralNotificationStore()

    const notification = { title: t('global.errorOccured'), text: error.message, icon: 'error' }

    generalNotificationStore.sendFailNotification(notification)
  }
}

export default new HttpErrorHandler()
