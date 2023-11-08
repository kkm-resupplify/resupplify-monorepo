<template>
  <m-dialog ref="dialogRef">
    <template #activator>
      <a-button size="large" :text="$t('company.management.warehouse.edit')" />
    </template>

    <o-form
      class="edit-warehouse-dialog__form"
      :initial-values="props"
      :submit-callback="handleEditWarehouse"
    >
      <template #body>
        <div class="edit-warehouse-dialog__body">
          <a-title :title="$t('company.management.warehouse.edit')" size="x-large" />

          <m-text-field
            name="warehouseName"
            input-type="text"
            :label="$t('company.management.warehouse.editor.nameLabel')"
            :placeholder="$t('company.management.warehouse.editor.namePlaceholder')"
            rules="required"
          />

          <m-text-area
            name="warehouseDescription"
            rules="required|min:16|max:255"
            :label="$t('company.management.warehouse.editor.descriptionLabel')"
            :placeholder="$t('company.management.warehouse.editor.descriptionPlaceholder')"
          />

          <a-button
            :text="$t('global.edit')"
            button-type="submit"
            class="edit-warehouse-dialog-form__button"
            size="x-large"
          />
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

const props = defineProps({
  warehouseName: String,
  warehouseDescription: String
})

// Variables
const dialogRef = ref<null | InstanceType<typeof MDialog>>(null)

// Methods
const closeDialog = () => {
  dialogRef.value?.closeDialog()
}

const handleEditWarehouse = async (formData: WarehouseFormData) => {
  await WarehouseService.editWarehouse(formData)
  closeDialog()
}
</script>

<style lang="scss" scoped>
.edit-warehouse-dialog {
  &__body {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-50;
    min-width: 500px;
  }

  &__button {
    display: flex;
    justify-content: center;
  }
}
</style>
