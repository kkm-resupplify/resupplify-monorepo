<template>
  <m-dialog ref="dialogRef" title="Test title">
    <template #activator>
      <a-icon icon="more_vert" size="xx-large" hoverable />
    </template>

    <div class="edit-warehouse-product-dialog__content">
      <o-form :submit-callback="handleSubmitAddProduct">
        <template #body>
          <div class="edit-warehouse-product-dialog__input-group">
            <div class="edit-warehouse-product-dialog__quantity-settings">
              <m-text-field
                placeholder="Enter safe quantity"
                label="Safe quantity"
                name="safeQuantity"
                type="number"
                :validate="false"
              />

              <m-text-field
                placeholder="Enter current quantity"
                label="Quantity"
                name="quantity"
                type="number"
                :validate="false"
              />
              <confirm-warehouse-product-removal-dialog :product-name="productName" />
            </div>
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

const props = defineProps({
  productName: {
    type: String,
    required: true
  }
})

// Variables
// https://vuejs.org/guide/typescript/composition-api.html#typing-component-template-refs
const dialogRef = ref<null | InstanceType<typeof MDialog>>(null)

// Methods
const closeDialog = () => {
  dialogRef.value?.closeDialog()
}

const handleSubmitAddProduct = (formData: Record<string, any>) => {
  console.log(formData)
  closeDialog()
}
</script>

<style lang="scss" scoped>
.edit-warehouse-product-dialog {
  &__content {
    @include respond-to('sm-and-up') {
      width: 800px;
      min-height: 600px;
    }

    width: 380px;
  }

  &__input-group {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-20;
  }

  &__quantity-settings {
    display: flex;
    flex-direction: row;
    gap: $global-spacing-50;
  }
}
</style>