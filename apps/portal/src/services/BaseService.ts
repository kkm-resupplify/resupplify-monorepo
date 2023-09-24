import HttpErrorHandler from './HttpErrorHandler'
import { axiosInstance } from './apiConfig'
import type { AxiosError } from 'axios'
import { useGeneralNotificationStore } from '@sharedStores/notification/useGeneralNotificationStore'
import { i18n } from '@/translation/index'

interface Endpoint {
  id?: number | string
  prefix?: string
  suffix?: string
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

  handleErrors(error: any): { success: boolean } | AxiosError {
    if (!error.response) return { success: false }

    const httpCode: number = error.response.status

    const key = `handleErrorCode${httpCode}` as keyof typeof HttpErrorHandler

    HttpErrorHandler[key](error)

    return { ...error, success: true }
  }

  getEndpoint({ id, prefix, suffix }: Endpoint = {}) {
    let endpoint = this.endpointBase

    if (prefix) endpoint = `${prefix}/${endpoint}`
    if (id) endpoint += `/${id}`
    if (suffix) endpoint += `/${suffix}`

    return endpoint
  }

  async get({
    id = '',
    config = {},
    suffix = '',
    prefix = '',
    notificationTitle = '',
    notificationText = ''
  }: {
    id?: string | number
    config?: any
    suffix?: string
    prefix?: string
    notificationTitle?: string
    notificationText?: string
  } = {}) {
    try {
      const response = await axiosInstance.get(this.getEndpoint({ id, suffix, prefix }), config)

      const generalNotification = useGeneralNotificationStore()

      if (notificationTitle || notificationText) {
        generalNotification.sendSuccessNotification({
          title: t(notificationTitle),
          text: t(notificationText)
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
    notificationText = ''
  }: {
    id?: string | number
    data?: object
    config?: any
    suffix?: string
    prefix?: string
    notificationTitle?: string
    notificationText?: string
  } = {}) {
    try {
      const response = await axiosInstance.post(this.getEndpoint({ id, suffix, prefix }), data)

      const generalNotification = useGeneralNotificationStore()

      if (notificationTitle || notificationText) {
        generalNotification.sendSuccessNotification({
          title: t(notificationTitle),
          text: t(notificationText)
        })
      }

      return response
    } catch (error) {
      return this.handleErrors(error)
    }
  }

  async put({
    id = '',
    data = {},
    suffix = '',
    prefix = '',
    notificationTitle = '',
    notificationText = ''
  }: {
    id?: string | number
    data?: object
    config?: any
    suffix?: string
    prefix?: string
    notificationTitle?: string
    notificationText?: string
  } = {}) {
    try {
      const response = await axiosInstance.put(this.getEndpoint({ id, suffix, prefix }), data)

      const generalNotification = useGeneralNotificationStore()

      if (notificationTitle || notificationText) {
        generalNotification.sendSuccessNotification({
          title: t(notificationTitle),
          text: t(notificationText)
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
    notificationText = ''
  }: {
    id?: string | number
    config?: object
    suffix?: string
    prefix?: string
    notificationTitle?: string
    notificationText?: string
  } = {}) {
    try {
      const response = await axiosInstance.delete(this.getEndpoint({ id, suffix, prefix }), config)

      const generalNotification = useGeneralNotificationStore()

      if (notificationTitle || notificationText) {
        generalNotification.sendSuccessNotification({
          title: t(notificationTitle),
          text: t(notificationText)
        })
      }

      return response
    } catch (error) {
      return this.handleErrors(error)
    }
  }
}
