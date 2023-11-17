<template>
  <m-dialog ref="dialogRef">
    <template #activator>
      <a-button size="large" :text="$t('company.management.warehouse.edit')" />
    </template>

    <o-form
      class="edit-warehouse-dialog__form"
      :initial-values="{ ...props.warehouse }"
      :submit-callback="handleEditWarehouse"
    >
      <template #body>
        <div class="edit-warehouse-dialog__body">
          <a-title :title="$t('company.management.warehouse.edit')" size="x-large" />

          <m-text-field
            name="name"
            input-type="text"
            :label="$t('company.management.warehouse.editor.nameLabel')"
            :placeholder="$t('company.management.warehouse.editor.namePlaceholder')"
            rules="required"
          />

          <m-text-area
            name="description"
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
import { ref, computed } from 'vue'
import MDialog from '@sharedMolecules/dialog/MDialog.vue'
import type { WarehouseFormData } from '@sharedInterfaces/warehouse/WarehouseInterface'
import WarehouseService from '@/services/warehouse/WarehouseService'
import { useRoute } from 'vue-router'
import type { PropType } from 'vue'
import type { Warehouse } from '@sharedInterfaces/warehouse/WarehouseInterface'

const props = defineProps({
  warehouse: Object as PropType<Warehouse>
})

// Variables
const dialogRef = ref<null | InstanceType<typeof MDialog>>(null)
const route = useRoute()
const warehouseId = computed(() => +route.params.id)

// Emits
const emits = defineEmits(['fetch-warehouse'])

// Methods
const closeDialog = () => {
  dialogRef.value?.closeDialog()
}

const handleEditWarehouse = async (formData: WarehouseFormData) => {
  const { success } = await WarehouseService.editWarehouse(warehouseId.value, formData)

  if (success) {
    emits('fetch-warehouse')

    closeDialog()
  }
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
