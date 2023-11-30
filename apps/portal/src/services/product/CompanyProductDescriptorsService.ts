import BaseService from '../BaseService'

class CompanyProductDescriptorsService extends BaseService {
  static PRODUCT_TAGS_SUFFIX = 'productTag'

  async getProductTags() {
    return await this.get({
      suffix: CompanyProductDescriptorsService.PRODUCT_TAGS_SUFFIX
    })
  }
}

export default new CompanyProductDescriptorsService('company')
