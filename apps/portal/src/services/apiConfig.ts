import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'
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

export const axiosInstance = axios.create(axiosConfig)
axiosInstance.interceptors.request.use(requestInterceptorConfig)

// Utility functions
function getBaseUrl() {
  return import.meta.env.VITE_API_URL
}

function getAuthorizationHeader() {
  const userStore = useUserStore()
  const token = userStore.getToken

  return `Bearer ${token}`
}
