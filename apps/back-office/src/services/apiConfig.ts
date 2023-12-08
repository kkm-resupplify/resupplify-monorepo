import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import { i18n } from '@/translation/index'
import { useUserStore } from '@/stores/user/useUserStore'

// Axios setup
const axiosConfig = {
  baseURL: getBaseUrl(),
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
}

const requestInterceptorConfig = (req: AxiosRequestConfig<any>) => {
  if (req.headers) {
    req.headers['X-Language'] = i18n.global.locale.value
    req.headers['Authorization'] = getAuthorizationHeader()
  }

  return req
}

//@ts-ignore
const rejectedResponseInterceptorConfig = async ({ response }: AxiosResponse) => {
  const { data } = response

  if (!data.httpCode) return { success: false }

  throw data
}

const responseOnFulfilledServiceInterceptor = async (response: AxiosResponse) => {
  const { data } = response

  if (data === '') return { success: true, data: [] }

  return data
}

export const axiosInstance = axios.create(axiosConfig)
axiosInstance.interceptors.request.use(requestInterceptorConfig)
axiosInstance.interceptors.response.use(
  responseOnFulfilledServiceInterceptor,
  rejectedResponseInterceptorConfig
)

// Utility functions
function getBaseUrl() {
  return import.meta.env.VITE_API_URL ?? 'https://api.resupplify.com/api/back-office'
}

function getAuthorizationHeader() {
  const userStore = useUserStore()
  const token = userStore.getToken

  return `Bearer ${token}`
}
