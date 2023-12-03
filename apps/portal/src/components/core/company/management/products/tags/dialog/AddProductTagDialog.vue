<template>
  <m-dialog ref="dialogRef" :title="$t('company.management.products.tags.dialog.add.title')">
    <template #activator>
      <a-button
        size="x-large"
        :text="$t('company.management.products.tags.dialog.add.activator')"
      />
    </template>

    <div class="add-product-tag-dialog__content">
      <o-form :submit-callback="handleAddProductTag">
        <template #body>
          <div class="add-product-tag-dialog__form-body">
            <m-text-field
              name="name"
              input-type="text"
              rules="required"
              :label="$t('company.management.products.tags.editor.productTagLabel')"
              :placeholder="$t('company.management.products.tags.editor.productTagPlaceholder')"
            />

            <m-text-field
              name="color"
              input-type="color"
              rules="required"
              :label="$t('company.management.products.tags.editor.productTagColorLabel')"
            />
          </div>
        </template>

        <template #footer>
          <div class="add-product-tag-dialog__form-buttons">
            <a-button
              button-type="submit"
              :text="$t('global.save')"
              size="x-large"
              full-width
              :is-loading="isLoading"
            />
          </div>
        </template>
      </o-form>
    </div>
  </m-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MDialog from '@sharedMolecules/dialog/MDialog.vue'
import CompanyProductDescriptorsService from '@/services/product/CompanyProductDescriptorsService'
import type { ProductTagData } from '@sharedInterfaces/product/ProductTagInterface'

// Emits
const emits = defineEmits(['fetch-product-tags'])

// Variables
const isLoading = ref(false)
const dialogRef = ref<null | InstanceType<typeof MDialog>>(null)

// Methods
const handleAddProductTag = async (ProductTagData: ProductTagData) => {
  isLoading.value = true

  const { success } = await CompanyProductDescriptorsService.addProductTag(ProductTagData)

  if (success) emits('fetch-product-tags')

  isLoading.value = false

  closeDialog()
}

const closeDialog = () => {
  dialogRef.value?.closeDialog()
}
</script>

<style lang="scss" scoped>
.add-product-tag-dialog {
  &__form-body {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-40;
    align-items: center;

    min-width: 450px;
  }

  &__form-buttons {
    display: flex;
    gap: $global-spacing-100;
    justify-content: center;
    width: 100%;
  }
}
</style>
