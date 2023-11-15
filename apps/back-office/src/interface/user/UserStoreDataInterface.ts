export interface UserData {
  type: number
  createdAt: string
  email: string
  token: string
  details: UserDetails | null
}

export interface UserDetails {
  id: number
  firstName: string
  lastName: string
  phoneNumber: string
  birthDate: string
  sex: string
  createdAt: string
  updatedAt: string
}
