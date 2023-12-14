export interface CompanyBalance {
  amount: number
  currency: string
}

export interface Payment {
  id: number
  amount: number
  currency: string
  type: number
  status: number
  date: string
  sender: PaymentEntity
  receiver: PaymentEntity
}

export interface PaymentEntity {
  name: string
  email: string
  phoneNumber: string
  contactPerson: string
  address: string
}

export interface BalanceOperation {
  type: number
  amount: number
}
