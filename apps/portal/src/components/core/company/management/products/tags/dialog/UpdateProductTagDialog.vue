<template>
  <m-dialog ref="dialogRef" :title="$t('company.management.products.tags.dialog.update.title')">
    <template #activator>
      <a-icon icon="more_vert" size="xx-large" hoverable />
    </template>

    <div class="update-product-tag-dialog__content">
      <o-form :initial-values="productTag" :submit-callback="handleEditProductTag">
        <template #body>
          <div class="update-product-tag-dialog__form-body">
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
          <div class="update-product-tag-dialog__form-buttons">
            <o-confirm-dialog
              :activator-name="$t('global.delete')"
              activator-size="x-large"
              type="delete"
              color="gradient-danger"
              :item-name="productTag.name"
              @confirmed="handleDeleteProductTag"
            />

            <a-button button-type="submit" :text="$t('global.save')" size="x-large" />
          </div>
        </template>
      </o-form>
    </div>
  </m-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MDialog from '@sharedMolecules/dialog/MDialog.vue'
import type { PropType } from 'vue'
import type { ProductTag, ProductTagData } from '@sharedInterfaces/product/ProductTagInterface'
import CompanyProductDescriptorsService from '@/services/product/CompanyProductDescriptorsService'

const props = defineProps({
  productTag: { type: Object as PropType<ProductTag>, required: true }
})
// Emits
const emits = defineEmits(['fetch-product-tags'])

// Variables
const isLoading = ref(false)

// Variables
const dialogRef = ref<null | InstanceType<typeof MDialog>>(null)

// Methods
const handleEditProductTag = async (ProductTagData: ProductTagData) => {
  isLoading.value = true

  const { success } = await CompanyProductDescriptorsService.editProductTag(ProductTagData)

  if (success) emits('fetch-product-tags')

  isLoading.value = false

  closeDialog()
}

const handleDeleteProductTag = async () => {
  isLoading.value = true

  const { success } = await CompanyProductDescriptorsService.deleteProductTag(props.productTag.id)

  if (success) emits('fetch-product-tags')

  isLoading.value = false

  closeDialog()
}

const closeDialog = () => {
  dialogRef.value?.closeDialog()
}
</script>

<style lang="scss" scoped>
.update-product-tag-dialog {
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
