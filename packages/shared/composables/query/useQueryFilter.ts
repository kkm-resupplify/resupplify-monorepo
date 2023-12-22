import router from '@/routes/index'

const setQueryParam = async (route: any, data: any) => {
  await router.replace({ query: { ...route.query, ...data } })
}

export function useQueryFilter() {
  return {
    setQueryParam
  }
}
