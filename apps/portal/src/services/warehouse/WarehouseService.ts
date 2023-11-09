import type { WarehouseProductFormData } from '@/interface/warehouse/WarehouseProductInterface'
import BaseService from '../BaseService'
import type { WarehouseFormData } from '@interfaces/warehouse/WarehouseInterface'
import type { EditWarehouseProductFormData } from '@interfaces/warehouse/WarehouseProductInterface'

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

  async editWarehouse(id: number, formData: WarehouseFormData) {
    return await this.put({
      id: id,
      data: formData,
      notificationTitle: 'company.management.warehouse.editor.editSuccessTitle'
    })
  }

  async deleteWarehouse(id: number) {
    return await this.delete({
      id: id,
      notificationTitle: 'company.management.warehouse.editor.deleteSuccessTitle'
    })
  }

  async addWarehouseProduct(formData: WarehouseProductFormData) {
    return await this.post({
      data: formData,
      suffix: WarehouseService.WAREHOUSE_PRODUCT_SUFFIX,
      notificationTitle: 'company.management.warehouse.preview.dialog.addProduct.addSuccessTitle'
    })
  }

  async editWarehouseProduct(
    warehouseId: number,
    productId: number,
    data: EditWarehouseProductFormData
  ) {
    return await this.put({
      id: warehouseId,
      data: data,
      suffix: `${WarehouseService.WAREHOUSE_PRODUCT_SUFFIX}/${productId}`,
      notificationTitle:
        'company.management.warehouse.preview.dialog.manageProduct.editSuccessTitle'
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
