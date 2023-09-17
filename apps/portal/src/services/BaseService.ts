import HttpErrorHandler from './HttpErrorHandler'
import type { AxiosError } from 'axios'

export default class BaseService {
  endpointBase: String

  constructor(endpointBase: String) {
    if (!endpointBase) throw new Error('Endpoint base url needs to specified.')

    this.endpointBase = endpointBase
  }

  handleErrors(error: AxiosError): { success: boolean } | AxiosError {
    if (!error.response) return { success: false }

    const httpCode: number = error.response.status

    const key = `handleErrorCode${httpCode}` as keyof typeof HttpErrorHandler

    HttpErrorHandler[key](error)

    return { ...error, success: true }
  }
}
