<template>
  <m-dialog ref="dialogRef" :title="productName">
    <template #activator>
      <a-icon icon="more_vert" size="xx-large" hoverable />
    </template>

    <div class="edit-warehouse-product-dialog__content">
      <div class="edit-warehouse-product-dialog__quantity-information">
        <a-title
          :title="
            $t('company.management.warehouse.preview.dialog.addProduct.safeQuantityLabel') + ':'
          "
          :subtitle="warehouseProduct.safeQuantity"
          variant="horizontal"
        />

        <a-title
          :title="
            $t('company.management.warehouse.preview.dialog.addProduct.currentSupplyLabel') + ':'
          "
          :subtitle="warehouseProduct.quantity"
          variant="horizontal"
        />
      </div>

      <a-line :height="2" color="secondary-2" />

      <a-title :title="$t('global.manage')" size="large" />

      <o-form :submit-callback="handleSubmitEditWarehouseProduct" :initial-values="initialValues">
        <template #body>
          <div class="edit-warehouse-product-dialog__input-group">
            <m-text-field
              name="quantity"
              type="number"
              label="Current supply"
              :placeholder="
                $t('company.management.warehouse.preview.dialog.manageProduct.setQuantity')
              "
              :validate="false"
            />

            <m-text-field
              name="safeQuantity"
              type="number"
              label="Safe quantity"
              :placeholder="
                $t('company.management.warehouse.preview.dialog.manageProduct.setQuantity')
              "
              :validate="false"
            />

            <m-select
              :label="$t('company.management.warehouse.preview.dialog.addProduct.selectProduct')"
              :placeholder="
                $t(
                  'company.management.warehouse.preview.dialog.addProduct.selectProductPlaceholder'
                )
              "
              name="status"
              :options="productStatusOptions"
              :validate="false"
            />
          </div>
        </template>

        <template #footer>
          <div class="edit-warehouse-product-dialog__actions">
            <confirm-warehouse-product-removal-dialog
              :product-name="productName"
              @confirm="handleSubmitRemoveWarehouseProduct"
            />

            <a-button :text="$t('global.update')" size="x-large" type="submit" />
          </div>
        </template>
      </o-form>
    </div>
  </m-dialog>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import MDialog from '@sharedMolecules/dialog/MDialog.vue'
import ConfirmWarehouseProductRemovalDialog from './ConfirmWarehouseProductRemovalDialog.vue'
import type {
  EditWarehouseProductFormData,
  WarehouseProduct
} from '@sharedInterfaces/warehouse/WarehouseProductInterface'
import WarehouseService from '@/services/warehouse/WarehouseService'
import { useRoute } from 'vue-router'
import type { PropType } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  warehouseProduct: {
    type: Object as PropType<WarehouseProduct>,
    required: true
  }
})

// Emits
const emits = defineEmits(['product-changed'])

// Variables
const dialogRef = ref<null | InstanceType<typeof MDialog>>(null)
const route = useRoute()
const { t } = useI18n()

// Computed
const warehouseId = computed(() => +route.params.id)

const productName = computed(() => props.warehouseProduct.product.name)

const productId = computed(() => props.warehouseProduct.id)

const productStatusOptions = computed(() => {
  return [
    { id: 0, text: t('global.inactive') },
    { id: 1, text: t('global.active') }
  ]
})

const initialValues = computed(() => {
  const { status, quantity, safeQuantity } = props.warehouseProduct

  return {
    quantity: quantity,
    safeQuantity: safeQuantity,
    status
  }
})

// Methods
const closeDialog = () => {
  dialogRef.value?.closeDialog()
}

const handleSubmitEditWarehouseProduct = async (formData: EditWarehouseProductFormData) => {
  const { success } = await WarehouseService.editWarehouseProduct(
    warehouseId.value,
    productId.value,
    formData
  )

  if (success) handleWarehouseProductActionSuccess()
}

const handleSubmitRemoveWarehouseProduct = async () => {
  const { success } = await WarehouseService.removeWarehouseProduct(
    warehouseId.value,
    productId.value
  )
  if (success) handleWarehouseProductActionSuccess()
}

const handleWarehouseProductActionSuccess = () => {
  emits('product-changed')
  closeDialog()
}
</script>

<style lang="scss" scoped>
.edit-warehouse-product-dialog {
  &__content {
    @include respond-to('sm-and-up') {
      width: 350px;
    }

    display: flex;
    flex-direction: column;
    gap: $global-spacing-30;

    width: 400px;

    white-space: nowrap;
  }

  &__quantity-information {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-20;
  }

  &__input-group {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-40;
  }

  &__actions {
    display: flex;
    flex: 1;
    justify-content: space-around;
  }
}
</style>
