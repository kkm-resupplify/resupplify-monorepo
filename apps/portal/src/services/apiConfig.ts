// Axios
import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'

// i18n
import { useI18n } from 'vue-i18n'
const i18nLocale = useI18n()

// Stores
import { useUserStore } from '@/stores/user/useUserStore'

// Inits
const userStore = useUserStore()

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
    req.headers['X-Language'] = i18nLocale.locale.value
    req.headers['Authorization'] = getAuthorizationHeader()
  }

  return req
}

export const axiosInstance = axios.create(axiosConfig)
axiosInstance.interceptors.request.use(requestInterceptorConfig)

// Utility functions
function getBaseUrl() {
  return import.meta.env.base_URL
}

function getAuthorizationHeader() {
  const token = userStore.getToken

  return `Authorization ${token}`
}
