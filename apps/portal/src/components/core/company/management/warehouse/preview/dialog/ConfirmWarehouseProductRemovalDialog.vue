<template>
  <m-dialog ref="productRemovalDialogRef">
    <template #activator>
      <a-button :text="$t('global.delete')" color="gradient-danger" />
    </template>
    <div class="delete-warehouse-product-dialog">
      <a-title
        :title="$t('company.management.warehouse.preview.dialog.deleteProduct.title')"
        :subtitle="
          $t('company.management.warehouse.preview.dialog.deleteProduct.subtitle', {
            product: productName
          })
        "
        class="delete-warehouse-product-dialog__title"
      />
      <div class="delete-warehouse-product-dialog__buttons">
        <a-button :text="$t('global.cancel')" size="x-large" />
        <a-button :text="$t('global.delete')" color="gradient-danger" size="x-large" />
      </div>
    </div>
  </m-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MDialog from '@sharedMolecules/dialog/MDialog.vue'

const props = defineProps({
  productName: {
    type: String,
    required: true
  }
})

//Variables
const productRemovalDialogRef = ref<null | InstanceType<typeof MDialog>>(null)
</script>

<style scoped lang="scss">
.delete-warehouse-product-dialog {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $global-spacing-100;
  padding: 0 $global-spacing-50 $global-spacing-50 $global-spacing-50;

  &__title {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__buttons {
    display: flex;
    gap: $global-spacing-50;
  }
}
</style>
