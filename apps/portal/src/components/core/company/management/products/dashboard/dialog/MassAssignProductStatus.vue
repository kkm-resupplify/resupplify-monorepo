<template>
  <m-dialog ref="dialogRef" :title="$t('company.management.products.dashboard.massActionsTitle')">
    <template #activator>
      <a-button :text="$t('company.management.products.dashboard.massActions')" size="x-large" />
    </template>

    <div class="mass-assign-product-status">
      <span v-text="$t('company.management.products.dashboard.massActionContent')" />

      <div class="mass-assign-product-status__buttons">
        <a-button :text="$t('global.activate')" size="x-large" />

        <a-button :text="$t('global.deactivate')" size="x-large" color="gradient-danger" />
      </div>
    </div>
  </m-dialog>
</template>
<style scoped lang="scss">
.mass-assign-product-status {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-100;
  margin-top: $global-spacing-60;

  &__buttons {
    display: flex;
    justify-content: center;
    gap: $global-spacing-50;
  }
}
</style>
