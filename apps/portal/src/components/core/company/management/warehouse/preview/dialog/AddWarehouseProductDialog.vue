<template>
  <m-dialog ref="dialogRef" title="Test title">
    <template #activator>
      <a-button size="large" :text="$t('company.management.warehouse.preview.header.addProduct')" />
    </template>

    <div class="add-warehouse-product-dialog__content">
      <o-form :submit-callback="handleSubmitAddProduct">
        <template #body>
          <div class="add-warehouse-product-dialog__input-group">
            <m-select
              label="Product"
              placeholder="Select product"
              name="productId"
              :options="products"
              :validate="false"
            />

            <div class="add-warehouse-product-dialog__quantity-settings">
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
            </div>
          </div>
        </template>
      </o-form>
    </div>
  </m-dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import MDialog from '@sharedMolecules/dialog/MDialog.vue'

// Variables
// https://vuejs.org/guide/typescript/composition-api.html#typing-component-template-refs
const dialogRef = ref<null | InstanceType<typeof MDialog>>(null)

// Computed
const products = computed(() => {
  return [
    { id: 1, text: 'Product 1' },
    { id: 2, text: 'Product 2' }
  ]
})
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
.add-warehouse-product-dialog {
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
