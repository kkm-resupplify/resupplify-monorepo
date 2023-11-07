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
          :subtitle="safeQuantity"
          variant="horizontal"
        />

        <a-title
          :title="
            $t('company.management.warehouse.preview.dialog.addProduct.currentSupplyLabel') + ':'
          "
          :subtitle="quantity"
          variant="horizontal"
        />
      </div>

      <a-line :height="2" color="secondary-2" />

      <a-title :title="$t('global.manage')" size="large" />

      <o-form :submit-callback="handleSubmitEditWarehouseProduct">
        <template #body>
          <div class="edit-warehouse-product-dialog__input-group">
            <m-text-field
              name="quantity"
              type="text"
              label="Current supply"
              :placeholder="
                $t('company.management.warehouse.preview.dialog.editProduct.setQuantity')
              "
              :validate="false"
            />

            <m-text-field
              name="safeQuantity"
              type="text"
              label="Safe quantity"
              :placeholder="
                $t('company.management.warehouse.preview.dialog.editProduct.setQuantity')
              "
              :validate="false"
            />
          </div>
        </template>

        <template #footer>
          <div class="edit-warehouse-product-dialog__actions">
            <confirm-warehouse-product-removal-dialog :product-name="productName" />

            <a-button :text="$t('global.update')" size="x-large" type="submit" />
          </div>
        </template>
      </o-form>
    </div>
  </m-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MDialog from '@sharedMolecules/dialog/MDialog.vue'
import ConfirmWarehouseProductRemovalDialog from './ConfirmWarehouseProductRemovalDialog.vue'

defineProps({
  productName: {
    type: String,
    required: true
  },
  safeQuantity: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
})

// Variables
const dialogRef = ref<null | InstanceType<typeof MDialog>>(null)

// Methods
const closeDialog = () => {
  dialogRef.value?.closeDialog()
}

const handleSubmitEditWarehouseProduct = (formData: Record<string, any>) => {
  console.log(formData)
  closeDialog()
}
</script>

<style lang="scss" scoped>
.edit-warehouse-product-dialog {
  &__content {
    @include respond-to('sm-and-up') {
      width: 350px;

      // min-height: 400px;
    }

    display: flex;
    flex-direction: column;
    gap: $global-spacing-30;

    width: 380px;

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
