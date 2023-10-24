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
  logo: File | null | string
  phoneNumber: string
  tin: string
}
