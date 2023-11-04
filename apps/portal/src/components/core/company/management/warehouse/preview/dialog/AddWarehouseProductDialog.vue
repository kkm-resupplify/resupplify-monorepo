<template>
  <m-dialog title="Test title">
    <template #activator>
      <a-button
        size="xx-large"
        :text="$t('company.management.warehouse.preview.header.addProduct')"
      />
    </template>

    <div class="add-warehouse-product-dialog__content">elo melo 320</div>
  </m-dialog>
</template>

<script setup lang="ts"></script>

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
