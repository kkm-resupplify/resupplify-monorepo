import type { AxiosError } from 'axios'

class HttpErrorHandler {
  handleErrorCode401(error: AxiosError): void {
    console.log(error)

    this.displayPopupNotification(error)
  }

  displayPopupNotification(error: AxiosError): void {
    console.log(error.message)
  }
}

export default new HttpErrorHandler()
