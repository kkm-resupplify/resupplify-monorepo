<template>
  <m-dialog ref="dialogRef" :title="product.name">
    <template #activator>
      <a-icon icon="more_vert" size="xx-large" hoverable />
    </template>

    <div class="edit-product-dialog__content">
      <a-title
        :title="$t('company.management.navigation.products.preview.content.status')"
        subtitle="active"
        variant="horizontal"
      />

      <a-line :height="2" color="secondary-2" />

      <a-title :title="$t('global.manage')" size="large" />

      <div class="edit-product-dialog__buttons">
        <a-button
          :text="$t('company.management.navigation.products.preview.dialog.setStatus')"
          size="x-large"
          class="edit-product-dialog__buttons-status"
        />

        <a-button :text="$t('global.update')" size="x-large" />

        <a-button :text="$t('global.delete')" color="gradient-danger" size="x-large" />
      </div>
    </div>
  </m-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MDialog from '@sharedMolecules/dialog/MDialog.vue'
import type { Product } from '@/interface/product/ProductInterface'
import type { PropType } from 'vue'

defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true
  }
})

// Variables
const dialogRef = ref<null | InstanceType<typeof MDialog>>(null)
</script>

<style lang="scss" scoped>
.edit-product-dialog {
  &__content {
    @include respond-to('sm-and-up') {
      width: 350px;
    }

    display: flex;
    flex-direction: column;
    gap: $global-spacing-70;

    width: 400px;

    white-space: nowrap;
  }

  &__buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: $global-spacing-50;
  }

  &__buttons-status {
    grid-column: 1 / span 2;
  }
}
</style>
