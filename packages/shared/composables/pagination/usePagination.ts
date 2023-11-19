import type { Pagination } from '@sharedInterfaces/config/PaginationInterface'
import { useRouter } from 'vue-router'

const router = useRouter()

const nextPage = async (pagination: Pagination) => {
  const { currentPage, totalPages } = pagination

  if (currentPage < totalPages) await router.push(`?page=${currentPage + 1}`)
}

const previousPage = async (currentPage: number) => {
  if (currentPage > 1) {
    await router.push(`?page=${currentPage - 1}`)
  }
}

const totalRecords = (pagination: Pagination) => pagination.totalRecords
const currentPage = (pagination: Pagination) => pagination.currentPage

export function usePagination() {
  return {
    nextPage,
    previousPage,
    totalRecords,
    currentPage
  }
}
