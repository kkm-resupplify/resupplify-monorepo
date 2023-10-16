export interface RegisterCompanyGeneralStep {
  name: string
  countryId: string
  shortDescription: string
  description: string
}

export interface RegisterCompanyDetailsStep {
  address: string
  tin: string
  logo: File | null
}

export interface RegisterCompanyContactInfoStep {
  phoneNumber: string
  email: string
  contactPerson: string
  externalWebsite: string
}
