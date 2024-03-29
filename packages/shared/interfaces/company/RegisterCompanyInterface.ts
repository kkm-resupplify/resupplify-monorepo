export interface RegisterCompanyGeneralStep {
  name: string
  countryId: number | null
  shortDescription: string
  description: string
}

export interface RegisterCompanyDetailsStep {
  address: string
  companyCategoryId: number | null
  tin: string
  image: File | null
  imagePreview?: string | null
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
