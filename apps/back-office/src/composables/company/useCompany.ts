import type { CompanyData } from '@sharedInterfaces/company/CompanyInterface'
import CompanyStatusEnum from '@sharedEnums/company/CompanyStatusEnum'

const filterCompaniesByStatus = (
  companies: CompanyData[],
  status: CompanyStatusEnum
): CompanyData[] => {
  return companies.filter((company) => company.status === status)
}

const countCompaniesByStatus = (companies: CompanyData[], status: CompanyStatusEnum) => {
  return filterCompaniesByStatus(companies, status).length
}

export function useCompany() {
  return {
    filterCompaniesByStatus,
    countCompaniesByStatus
  }
}
