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
            <m-select
              :label="$t('company.management.warehouse.preview.dialog.addProduct.selectProduct')"
              :placeholder="
                $t(
                  'company.management.warehouse.preview.dialog.addProduct.selectProductPlaceholder'
                )
              "
              name="productId"
              :options="products"
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
import { ref, computed } from 'vue'
import MDialog from '@sharedMolecules/dialog/MDialog.vue'

// Variables
// https://vuejs.org/guide/typescript/composition-api.html#typing-component-template-refs
const dialogRef = ref<null | InstanceType<typeof MDialog>>(null)

// Computed
const products = computed(() => {
  return [
    { id: 1, text: 'Product 1' },
    { id: 1, text: 'Product 1' },
    { id: 1, text: 'Product 1' },
    { id: 1, text: 'Product 1' },
    { id: 1, text: 'Product 1' },
    { id: 1, text: 'Product 1' },
    { id: 1, text: 'Product 1' },
    { id: 1, text: 'Product 1' },
    { id: 1, text: 'Product 1' },
    { id: 1, text: 'Product 1' },
    { id: 1, text: 'Product 1' },
    { id: 1, text: 'Product 1' },
    { id: 1, text: 'Product 1' },
    { id: 1, text: 'Product 1' },
    { id: 1, text: 'Product 1' },
    { id: 1, text: 'Product 1' },
    { id: 1, text: 'Product 1' },
    { id: 1, text: 'Product 1' },
    { id: 1, text: 'Product 1' },
    { id: 1, text: 'Product 1' },
    { id: 1, text: 'Product 1' },
    { id: 1, text: 'Product 1' },
    { id: 1, text: 'Product 1' },
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
  // closeDialog()
}
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
