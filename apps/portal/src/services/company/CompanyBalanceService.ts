import PaymentMethodEnum from '@sharedEnums/payment/PaymentMethodEnum'
import PaymentTypeEnum from '@sharedEnums/payment/PaymentTypeEnum'
import BaseService from '../BaseService'

class CompanyBalanceService extends BaseService {
  static TRANSACTIONS_SUFFIX = 'transaction'

  async getCompanyBalance() {
    return await this.get({})
  }

  async getCompanyTransactions(params?: { page?: string; type?: string }) {
    return await this.get({
      suffix: CompanyBalanceService.TRANSACTIONS_SUFFIX,
      config: { params }
    })
  }

  async withdrawBalance(amount: string) {
    return await this.post({
      data: {
        type: PaymentTypeEnum.WITHDRAWAL,
        amount,
        status: 1,
        currency: 'Euro',
        paymentMethodId: PaymentMethodEnum.BALANCE
      }
    })
  }

  async depositBalance(amount: string) {
    return await this.post({
      data: {
        type: PaymentTypeEnum.DEPOSIT,
        amount,
        status: 1,
        currency: 'Euro',
        paymentMethodId: PaymentMethodEnum.BALANCE
      }
    })
  }
}

export default new CompanyBalanceService('company/balance')
