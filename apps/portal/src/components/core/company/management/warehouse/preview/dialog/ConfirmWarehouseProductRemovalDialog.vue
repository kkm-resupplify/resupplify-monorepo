<template>
  <m-dialog ref="dialogRef">
    <template #activator>
      <a-button :text="$t('global.delete')" color="gradient-danger" size="x-large" />
    </template>

    <o-form :submit-callback="handleSubmitRemoveProduct">
      <template #body>
        <div class="confirm-warehouse-product-removal-dialog__content">
          <a-title
            :title="$t('company.management.warehouse.preview.dialog.deleteProduct.title')"
            :subtitle="
              $t('company.management.warehouse.preview.dialog.deleteProduct.subtitle', {
                product: productName
              })
            "
            class="confirm-warehouse-product-removal-dialog__title"
          />

          <div class="confirm-warehouse-product-removal-dialog__buttons">
            <a-button :text="$t('global.cancel')" size="x-large" @click="closeDialog" />

            <a-button
              button-type="submit"
              :text="$t('global.delete')"
              color="gradient-danger"
              size="x-large"
            />
          </div>
        </div>
      </template>
    </o-form>
  </m-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MDialog from '@sharedMolecules/dialog/MDialog.vue'

defineProps({
  productName: {
    type: String,
    required: true
  }
})

// Variables
const dialogRef = ref<null | InstanceType<typeof MDialog>>(null)

// Methods
const closeDialog = () => {
  dialogRef.value?.closeDialog()
}

const handleSubmitRemoveProduct = (formData: Record<string, any>) => {
  console.log(formData)
  closeDialog()
}
</script>

<style scoped lang="scss">
.confirm-warehouse-product-removal-dialog {
  &__content {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-100;
    align-items: center;

    padding: 0 $global-spacing-50 $global-spacing-50 $global-spacing-50;
  }

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
