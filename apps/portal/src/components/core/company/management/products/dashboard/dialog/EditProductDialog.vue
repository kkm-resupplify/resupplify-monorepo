<template>
  <m-dialog ref="dialogRef" :title="product.name">
    <template #activator>
      <a-icon icon="more_vert" size="xx-large" hoverable />
    </template>

    <div class="edit-product-dialog__content">
      <div class="edit-product-dialog__status">
        <a-title
          :title="$t('company.management.products.dialog.status')"
          :subtitle="productStatusName(product)"
          variant="horizontal"
        />
      </div>

      <a-line :height="2" color="secondary-2" />

      <a-title :title="$t('global.manage')" size="large" />

      <div class="edit-product-dialog__buttons">
        <set-product-status-dialog
          :product="product"
          class="edit-product-dialog__buttons-status"
          @product-changed="handleProductChanged"
        />

        <a-button :text="$t('global.update')" size="x-large" />

        <o-confirm-dialog
          :item-name="product.name"
          type="delete"
          :title="
            $t('company.management.products.dialog.delete.title', {
              product: product.name
            })
          "
          :activator-name="$t('global.delete')"
          activator-size="x-large"
          @confirmed="handleDeleteProducts"
        />
      </div>
    </div>
  </m-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MDialog from '@sharedMolecules/dialog/MDialog.vue'
import type { Product } from '@sharedInterfaces/product/ProductInterface'
import type { PropType } from 'vue'
import SetProductStatusDialog from './SetProductStatusDialog.vue'
import { useProductStatus } from '@composables/product/useProductStatus'
import CompanyProductsService from '@/services/product/CompanyProductsService'

const props = defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true
  }
})

// Emits
const emits = defineEmits(['product-changed'])

// Variables
const { productStatusName } = useProductStatus()
const dialogRef = ref<null | InstanceType<typeof MDialog>>(null)

// Methods
const handleDeleteProducts = async () => {
  const { success } = await CompanyProductsService.deleteProduct(props.product.id)

  if (success) handleProductActionSuccess()
}

const handleProductActionSuccess = () => {
  emits('product-changed')
  closeDialog()
}

const handleProductChanged = () => {
  emits('product-changed')
}

const closeDialog = () => {
  dialogRef.value?.closeDialog()
}
</script>

<style lang="scss" scoped>
.edit-product-dialog {
  &__content {
    @include respond-to('sm-and-up') {
      width: 300px;
    }

    display: flex;
    flex-direction: column;
    gap: $global-spacing-70;

    width: 350px;
    margin-top: $global-spacing-60;

    white-space: nowrap;
  }

  &__status {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-50;
  }

  &__buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: $global-spacing-50;
    align-self: center;

    width: min-content;
  }

  &__buttons-status {
    grid-column: 1 / span 2;

    :deep(.m-dialog__activator) {
      width: 100%;
    }

    :deep(button) {
      width: 100%;
    }
  }
}
</style>
