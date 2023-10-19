export interface RegisterCompanyGeneralStep {
  name: string
  countryId: string
  shortDescription: string
  description: string
}

export interface RegisterCompanyDetailsStep {
  address: string
  companyCategoryId: number
  tin: string
  logo: File | null | String
}

export interface RegisterCompanyContactInfoStep {
  phoneNumber: string
  email: string
  contactPerson: string
  externalWebsite: string
}

export interface RegisterCompanyData {
  generalStepData: RegisterCompanyGeneralStep
  detailsStepData: RegisterCompanyDetailsStep
  contactInfoStepData: RegisterCompanyContactInfoStep
}
