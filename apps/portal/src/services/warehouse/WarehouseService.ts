import BaseService from '../BaseService'

class WarehouseService extends BaseService {
  async getWarehouses() {
    const response = await this.get({
      notificationTitle:
        'company.management.navigation.warehouses.notification.warehouseCreatedTitle'
    })

    return response
  }

  async getWarehouse(id: number) {
    return await this.get({ id })
  }

  async createWarehouse() {}

  async updateWarehouse() {}

  async deleteWarehouse() {}
}

export default new WarehouseService('company/warehouse')
