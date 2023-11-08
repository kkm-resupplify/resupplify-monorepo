<template>
  <m-dialog ref="dialogRef">
    <template #activator>
      <a-button
        :text="$t('company.management.warehouse.delete.title')"
        color="gradient-danger"
        size="x-large"
      />
    </template>

    <o-form :submit-callback="handleSubmitRemoveWarehouse">
      <template #body>
        <div class="confirm-warehouse-removal-dialog__content">
          <a-title
            :title="$t('company.management.warehouse.delete.dialog.title')"
            :subtitle="$t('company.management.warehouse.delete.dialog.subtitle')"
            class="confirm-warehouse-removal-dialog__title"
          />

          <div class="confirm-warehouse-removal-dialog__buttons">
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
import type { WarehouseFormData } from '@/interface/warehouse/WarehouseInterface'
import WarehouseService from '@/services/warehouse/WarehouseService'

// Variables
const dialogRef = ref<null | InstanceType<typeof MDialog>>(null)

// Methods
const closeDialog = () => {
  dialogRef.value?.closeDialog()
}

const handleSubmitRemoveWarehouse = async (formData: WarehouseFormData) => {
  await WarehouseService.deleteWarehouse()
  closeDialog()
}
</script>

<style scoped lang="scss">
.confirm-warehouse-removal-dialog {
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
