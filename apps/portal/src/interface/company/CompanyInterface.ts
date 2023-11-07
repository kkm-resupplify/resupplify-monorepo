export interface CompanyData {
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
