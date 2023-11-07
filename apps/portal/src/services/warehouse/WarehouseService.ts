import type { WarehouseProductFormData } from '@/interface/warehouse/WarehouseProductInterface'
import BaseService from '../BaseService'
import type { WarehouseFormData } from '@interfaces/warehouse/WarehouseInterface'

class WarehouseService extends BaseService {
  static WAREHOUSE_PRODUCT_SUFFIX = 'product'
  static WAREHOUSE_NOT_ASSIGNED_PRODUCTS = 'productNotAttached'

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

  async addWarehouseProduct(formData: WarehouseProductFormData) {
    return await this.post({
      data: formData,
      suffix: WarehouseService.WAREHOUSE_PRODUCT_SUFFIX,
      notificationTitle: 'company.management.warehouse.product.createSuccessTitle'
    })
  }

  async getWarehouseNotAssignedProducts(id: number) {
    return await this.get({
      id,
      suffix: WarehouseService.WAREHOUSE_NOT_ASSIGNED_PRODUCTS
    })
  }
}

export default new WarehouseService('company/warehouse')
