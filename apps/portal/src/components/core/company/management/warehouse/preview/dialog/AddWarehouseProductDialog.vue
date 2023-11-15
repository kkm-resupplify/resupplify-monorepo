<template>
  <m-dialog
    ref="dialogRef"
    :title="$t('company.management.warehouse.preview.dialog.addProduct.title')"
  >
    <template #activator>
      <a-button size="large" :text="$t('company.management.warehouse.preview.header.addProduct')" />
    </template>

    <div class="add-warehouse-product-dialog__content">
      <o-form :submit-callback="handleSubmitAddProduct">
        <template #body>
          <div class="add-warehouse-product-dialog__form-body">
            <template v-if="isLoading">m-select options loader </template>

            <m-select
              v-else
              :label="$t('company.management.warehouse.preview.dialog.addProduct.selectProduct')"
              :placeholder="
                $t(
                  'company.management.warehouse.preview.dialog.addProduct.selectProductPlaceholder'
                )
              "
              name="productId"
              :options="selectProductOptions"
              :validate="false"
            />

            <div class="add-warehouse-product-dialog__quantity-settings">
              <m-text-field
                :label="
                  $t('company.management.warehouse.preview.dialog.addProduct.safeQuantityLabel')
                "
                :placeholder="
                  $t(
                    'company.management.warehouse.preview.dialog.addProduct.safeQuantityPlaceholder'
                  )
                "
                name="safeQuantity"
                input-type="number"
                :validate="false"
              />

              <m-text-field
                :label="
                  $t('company.management.warehouse.preview.dialog.addProduct.currentSupplyLabel')
                "
                :placeholder="
                  $t(
                    'company.management.warehouse.preview.dialog.addProduct.currentSupplyPlaceholder'
                  )
                "
                name="quantity"
                input-type="number"
                :validate="false"
              />
            </div>
          </div>
        </template>

        <template #footer>
          <a-button
            type="submit"
            :text="$t('company.management.warehouse.preview.dialog.addProduct.submit')"
            size="x-large"
            class="add-warehouse-product-dialog__submit"
          />
        </template>
      </o-form>
    </div>
  </m-dialog>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeMount } from 'vue'
import MDialog from '@sharedMolecules/dialog/MDialog.vue'
import { useRoute } from 'vue-router'
import WarehouseService from '@/services/warehouse/WarehouseService'
import type { WarehouseProductFormData } from '@sharedInterfaces/warehouse/WarehouseProductInterface'
import type { Product } from '@sharedInterfaces/product/ProductInterface'

// Emits
const emits = defineEmits(['fetch-warehouse'])

// Variables
// https://vuejs.org/guide/typescript/composition-api.html#typing-component-template-refs
const dialogRef = ref<null | InstanceType<typeof MDialog>>(null)
const isLoading = ref(false)
const route = useRoute()
const warehouseNotAssignedProducts = ref<Product[]>([])

// Computed
const warehouseId = computed(() => route.params.id)

const selectProductOptions = computed(() => {
  return mapProductsToOptions(warehouseNotAssignedProducts.value)
})

// Methods
const closeDialog = () => {
  dialogRef.value?.closeDialog()
}

const handleSubmitAddProduct = async (formData: Record<string, any>) => {
  const productData: WarehouseProductFormData = {
    productId: formData.productId,
    quantity: formData.quantity,
    safeQuantity: formData.safeQuantity,
    warehouseId: +warehouseId.value,
    status: 1
  }

  const { success } = await WarehouseService.addWarehouseProduct(productData)

  if (success) {
    closeDialog()

    emits('fetch-warehouse')
  }
}

const handleFetchwarehouseNotAssignedProducts = async () => {
  const { success, data } = await WarehouseService.getWarehouseNotAssignedProducts(
    +warehouseId.value
  )

  if (success) warehouseNotAssignedProducts.value = data
}

const mapProductsToOptions = (products: Product[]) => {
  return products.map((product) => ({
    id: product.id,
    text: product.name
  }))
}
// Hooks
onBeforeMount(async () => {
  await handleFetchwarehouseNotAssignedProducts()
})
</script>

<style lang="scss" scoped>
.add-warehouse-product-dialog {
  &__content {
    @include respond-to('sm-and-up') {
      width: 600px;
      min-height: 280px;
    }

    display: flex;
    width: 380px;
  }

  &__form-body {
    overflow: clip;
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: $global-spacing-50;
  }

  &__quantity-settings {
    display: flex;
    flex-direction: row;
    gap: $global-spacing-50;
  }

  &__submit {
    width: 100%;
  }
}
</style>
