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
}

export default new CompanyBalanceService('company/balance')
