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
  date: Date
  sender: PaymentEntity
  receiver: PaymentEntity
}

export interface PaymentEntity {
  name: string
  email: string
  contactPerson: string
}

export interface BalanceOperation {
  type: number
  amount: number
}
