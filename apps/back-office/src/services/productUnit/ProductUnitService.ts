import BaseService from '../BaseService'

class ProductUnitService extends BaseService {
  async getAllProductUnits() {
    return this.get({})
  }
}

export default new ProductUnitService('productUnit')
