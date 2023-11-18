<template>
  <m-dialog ref="dialogRef" :title="tag?.name">
    <template #activator>
      <a-icon icon="more_vert" size="xx-large" hoverable />
    </template>

    <div class="edit-tag-dialog__content">
      <span
        v-text="
          $t('company.management.navigation.products.tags.editor.addDialog.modalContent', {
            name: tag?.name
          })
        "
      />
      <div class="edit-tag-dialog__buttons">
        <update-product-tag-dialog :tag="tag" />

        <o-confirm-dialog
          :activator-name="$t('global.delete')"
          activator-size="x-large"
          type="delete"
          color="gradient-danger"
          :item-name="tag?.name"
        />
      </div>
    </div>
  </m-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MDialog from '@sharedMolecules/dialog/MDialog.vue'
import type { ProductTag } from '@sharedInterfaces/product/ProductInterface'
import type { PropType } from 'vue'
import UpdateProductTagDialog from './UpdateProductTagDialog.vue'

defineProps({
  tag: Object as PropType<ProductTag>
})

// Variables
const dialogRef = ref<null | InstanceType<typeof MDialog>>(null)

// Methods
const closeDialog = () => {
  dialogRef.value?.closeDialog()
}
</script>

<style lang="scss" scoped>
.edit-tag-dialog {
  &__content {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-40;
    align-items: center;

    padding: $global-spacing-100;
  }

  &__buttons {
    display: flex;
    gap: $global-spacing-100;
    justify-content: center;
    width: 100%;
  }
}
</style>
