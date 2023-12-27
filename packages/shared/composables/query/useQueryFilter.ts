import router from '@/routes/index'

const setQueryParam = async (route: any, filters: any) => {
  if (route.query.page) route.query.page = '1'

  await router.replace({ query: { ...route.query, ...filters } })
}

export function useQueryFilter() {
  return {
    setQueryParam
  }
}
