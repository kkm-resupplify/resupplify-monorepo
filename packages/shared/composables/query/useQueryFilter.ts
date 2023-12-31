import router from '@/routes/index'
import { type RouteLocationNormalizedLoaded } from 'vue-router'

const setQueryParam = async (route: RouteLocationNormalizedLoaded, filters: any) => {
  if (route.query.page) route.query.page = '1'

  await router.replace({ query: { ...route.query, ...filters } })
}

function checkFilterUsage(keys: string[], route: RouteLocationNormalizedLoaded) {
  const query = route.query
  const page = query['page']
  const otherValues = keys.filter((key) => key !== 'page').map((key) => query[key])

  return !!((page !== undefined && page !== '1') || otherValues.some((value) => Boolean(value)))
}

export function useQueryFilter() {
  return {
    setQueryParam,
    checkFilterUsage
  }
}
