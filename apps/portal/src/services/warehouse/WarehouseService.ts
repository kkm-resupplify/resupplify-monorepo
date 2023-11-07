import BaseService from '../BaseService'
import type { WarehouseFormData } from '@interfaces/warehouse/WarehouseInterface'

class WarehouseService extends BaseService {
  async getWarehouses() {
    return await this.get({})
  }

  async getWarehouse(id: number) {
    return await this.get({ id })
  }

  async createWarehouse(formData: WarehouseFormData) {
    return await this.post({
      data: formData,
      notificationTitle: 'company.management.warehouse.editor.createSuccessTitle'
    })
  }

  async editWarehouse(formData: WarehouseFormData) {
    return await this.put({
      data: formData,
      notificationTitle: 'company.management.warehouse.editor.editSuccessTitle'
    })
  }

  async deleteWarehouse() {}
}

export default new WarehouseService('company/warehouse')
