export interface CompanyBalance {
  amount: number
  currency: string
}

export interface Transaction {
  id: number
  amount: number
  currency: string
  type: number
  status: number
  data: Date
  sender: TransactionEntity
  receiver: TransactionEntity
}

export interface TransactionEntity {
  name: string
  email: string
  contactPerson: string
}

export interface BalanceOperation {
  type: number
  amount: number
}
