import HttpErrorHandler from './HttpErrorHandler'
import { axiosInstance } from './apiConfig'
import { useGeneralNotificationStore } from '@sharedStores/notification/useGeneralNotificationStore'
import { i18n } from '@/translation/index'

interface Endpoint {
  id?: number | string
  prefix?: string
  suffix?: string
}

interface Config {
  params?: Record<string, any>
}

interface RequestConfig {
  id?: string | number
  data?: object
  config?: Config
  suffix?: string
  prefix?: string
  notificationTitle?: string
  notificationText?: string
  notificationDuration?: number
}

const { t } = i18n.global

export default class BaseService {
  endpointBase: string

  constructor(endpointBase: string) {
    if (!endpointBase) {
      this.endpointBase = ''
    } else {
      this.endpointBase = endpointBase
    }
  }

  handleErrors(error: any) {
    if (!error.httpCode) return { success: false }

    const httpCode: number = error.httpCode

    const key = `handleErrorCode${httpCode}` as keyof typeof HttpErrorHandler

    HttpErrorHandler[key](error.error)

    return { ...error }
  }

  getEndpoint({ id, prefix, suffix }: Endpoint = {}) {
    let endpoint = this.endpointBase

    if (prefix) endpoint = `${prefix}/${endpoint}`
    if (id) endpoint += `/${id}`
    if (suffix) endpoint += `/${suffix}`

    return endpoint
  }

  mapParamNames(params: any) {
    return Object.entries(params || {}).reduce((result, [key, value]) => {
      if (key === 'page' || key.startsWith('sort')) {
        console.log(key, value)
        result[key] = value
      } else result[`filter[${key}]`] = value

      return result
    }, {} as Record<string, any>)
  }

  async get({
    id = '',
    config = {},
    suffix = '',
    prefix = '',
    notificationTitle = '',
    notificationText = '',
    notificationDuration
  }: RequestConfig): Promise<any> {
    try {
      if (config.params) {
        config.params = this.mapParamNames(config.params)
      }

      const response = await axiosInstance.get(this.getEndpoint({ id, suffix, prefix }), config)

      const generalNotification = useGeneralNotificationStore()

      if (notificationTitle || notificationText) {
        generalNotification.sendSuccessNotification({
          title: t(notificationTitle),
          text: t(notificationText),
          duration: notificationDuration
        })
      }

      return response
    } catch (error) {
      return this.handleErrors(error)
    }
  }

  async post({
    id = '',
    data = {},
    suffix = '',
    prefix = '',
    notificationTitle = '',
    notificationText = '',
    notificationDuration
  }: RequestConfig) {
    try {
      const response = await axiosInstance.post(this.getEndpoint({ id, suffix, prefix }), data)

      const generalNotification = useGeneralNotificationStore()

      if (notificationTitle || notificationText) {
        generalNotification.sendSuccessNotification({
          title: t(notificationTitle),
          text: t(notificationText),
          duration: notificationDuration
        })
      }

      return response
    } catch (error: any) {
      return this.handleErrors(error)
    }
  }

  async put({
    id = '',
    data = {},
    suffix = '',
    prefix = '',
    notificationTitle = '',
    notificationText = '',
    notificationDuration
  }: RequestConfig) {
    try {
      const response = await axiosInstance.put(this.getEndpoint({ id, suffix, prefix }), data)

      const generalNotification = useGeneralNotificationStore()

      if (notificationTitle || notificationText) {
        generalNotification.sendSuccessNotification({
          title: t(notificationTitle),
          text: t(notificationText),
          duration: notificationDuration
        })
      }

      return response
    } catch (error) {
      return this.handleErrors(error)
    }
  }

  async delete({
    id = '',
    config = {},
    suffix = '',
    prefix = '',
    notificationTitle = '',
    notificationText = '',
    notificationDuration
  }: RequestConfig) {
    try {
      const response = await axiosInstance.delete(this.getEndpoint({ id, suffix, prefix }), config)

      const generalNotification = useGeneralNotificationStore()

      if (notificationTitle || notificationText) {
        generalNotification.sendSuccessNotification({
          title: t(notificationTitle),
          text: t(notificationText),
          duration: notificationDuration
        })
      }

      return response
    } catch (error) {
      return this.handleErrors(error)
    }
  }
}
