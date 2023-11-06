import BaseService from '../BaseService'
import type { Warehouse } from '@interfaces/warehouse/WarehouseInterface'

class WarehouseService extends BaseService {
  async getWarehouses() {
    return await this.get({})
  }

  async getWarehouse(id: number) {
    return await this.get({ id })
  }

  async createWarehouse() {}

  async updateWarehouse() {}

  async deleteWarehouse() {}
}

export default new WarehouseService('company/warehouse')
