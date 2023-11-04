<template>
  <m-dialog ref="dialogRef" title="Test title">
    <template #activator>
      <a-button size="large" :text="$t('company.management.warehouse.preview.header.addProduct')" />
    </template>

    <div class="add-warehouse-product-dialog__content">
      <a-button text="test" @click="closeDialog" />
    </div>
  </m-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MDialog from '@sharedMolecules/dialog/MDialog.vue'

// Variables
// https://vuejs.org/guide/typescript/composition-api.html#typing-component-template-refs
const dialogRef = ref<null | InstanceType<typeof MDialog>>(null)

// Methods
const closeDialog = () => {
  dialogRef.value?.closeDialog()
}
</script>

<style lang="scss" scoped>
.add-warehouse-product-dialog {
  &__content {
    @include respond-to('sm-and-up') {
      width: 1000px;
    }

    width: 380px;
  }
}
</style>
