import type { AxiosError } from 'axios'
import { useGeneralNotificationStore } from '@sharedStores/notification/useGeneralNotificationStore'

class HttpErrorHandler {
  handleErrorCode401(error: AxiosError): void {
    console.log(error)

    this.displayPopupNotification(error)
  }

  handleErrorCode404(error: AxiosError): void {
    console.log(error)

    this.displayPopupNotification(error)
  }

  displayPopupNotification(error: AxiosError): void {
    const generalNotificationStore = useGeneralNotificationStore()
    const notification = { title: 'Error', variant: 'danger', text: error.message, icon: 'error' }

    generalNotificationStore.sendNotification(notification)
  }
}

export default new HttpErrorHandler()
