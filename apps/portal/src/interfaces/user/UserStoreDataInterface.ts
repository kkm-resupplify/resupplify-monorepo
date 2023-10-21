export interface UserData {
  type: number
  createdAt: string
  email: string
  token: string
  details: UserDetails | null
}

export interface UserDetails {
  id: number
  first_name: string
  last_name: string
  phone_number: string
  birth_date: string
  sex: string
  created_at: string
  updated_at: string
}
