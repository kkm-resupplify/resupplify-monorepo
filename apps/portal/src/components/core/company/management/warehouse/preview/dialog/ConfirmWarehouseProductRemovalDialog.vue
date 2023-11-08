<template>
  <m-dialog ref="dialogRef">
    <template #activator>
      <a-button :text="$t('global.remove')" color="gradient-danger" size="x-large" />
    </template>

    <div class="confirm-warehouse-product-removal-dialog__content">
      <a-title
        class="confirm-warehouse-product-removal-dialog__title"
        :title="$t('company.management.warehouse.preview.dialog.deleteProduct.title')"
        :subtitle="
          $t('company.management.warehouse.preview.dialog.deleteProduct.subtitle', {
            product: productName
          })
        "
      />

      <div class="confirm-warehouse-product-removal-dialog__buttons">
        <a-button :text="$t('global.cancel')" size="x-large" @click="closeDialog" />

        <a-button
          :text="$t('global.remove')"
          color="gradient-danger"
          size="x-large"
          @click="handleConfirm"
        />
      </div>
    </div>
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
// Emits
const emits = defineEmits(['confirm'])

// Variables
const dialogRef = ref<null | InstanceType<typeof MDialog>>(null)

// Methods
const closeDialog = () => {
  dialogRef.value?.closeDialog()
}

const handleConfirm = () => {
  emits('confirm')

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
