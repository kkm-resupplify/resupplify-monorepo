export interface CompanyData {
  id: number
  status: number
  name: string
  description: string
  ownerId: number
  shortDescription: string
  slug: string
  details: CompanyDetailsData
}

export interface CompanyDetailsData {
  address: string
  companyCategoryId: number | null
  contactPerson: string
  countryId: number
  email: string
  logo: null | string
  phoneNumber: string
  tin: string
  externalWebsite: string
}

export interface CompanyCategory {
  id: number | string
  name: string
}

export interface FeaturedCompany extends CompanyData {
  offersTotal: number
  uniqueClientsCount: number
  productsSold: number
}
