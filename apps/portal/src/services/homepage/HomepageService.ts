import BaseService from '../BaseService'

class HomepageService extends BaseService {
  static COMPANIES_SUFFIX = '/randomCompanies'

  async getFeaturedProducts() {
    return await this.get({})
  }

  async getFeaturedCompanies() {
    return this.get({
      suffix: HomepageService.COMPANIES_SUFFIX
    })
  }
}

export default new HomepageService('homePage')
