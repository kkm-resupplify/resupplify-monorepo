import type { WarehouseProductFormData } from '@/interface/warehouse/WarehouseProductInterface'
import BaseService from '../BaseService'
import type { WarehouseFormData } from '@interfaces/warehouse/WarehouseInterface'
import type { EditWarehouseProductFormData } from '@interfaces/warehouse/WarehouseProductInterface'

class WarehouseService extends BaseService {
  static WAREHOUSE_PRODUCT_SUFFIX = 'product'
  static WAREHOUSE_NOT_ASSIGNED_PRODUCTS = 'productNotAttached'

  async getWarehouses(params?: { name?: string; status?: string }) {
    return await this.get({ config: { params } })
  }

  async getWarehouse(id: number) {
    return await this.get({ id })
  }

  async getWarehouseProducts(id: number, params?: { name?: string; status?: string }) {
    return await this.get({
      id,
      config: { params },
      suffix: WarehouseService.WAREHOUSE_PRODUCT_SUFFIX
    })
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

  async removeWarehouseProduct(warehouseId: number, productId: number) {
    return await this.delete({
      id: warehouseId,
      suffix: `${WarehouseService.WAREHOUSE_PRODUCT_SUFFIX}/${productId}`,
      notificationTitle:
        'company.management.warehouse.preview.dialog.manageProduct.removeSuccessTitle'
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
