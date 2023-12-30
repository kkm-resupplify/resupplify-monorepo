<template>
  <m-dialog ref="dialogRef" :title="$t('company.management.order.item.dialog.title')">
    <template #activator>
      <a-button size="x-large" :text="$t('company.management.order.item.dialog.activator')" />
    </template>

    <div class="set-order-status-dialog__content">
      <o-form class="set-order-status-dialog__form-body">
        <template #body>
          <m-select
            name="status"
            :label="$t('company.management.order.item.dialog.selectStatusLabel')"
            :placeholder="$t('company.management.order.item.dialog.selectStatusPlaceholder')"
            :validate="false"
          />
        </template>

        <template #footer>
          <a-button
            button-type="submit"
            :text="$t('global.set')"
            size="x-large"
            class="set-order-status-dialog__submit"
          />
        </template>
      </o-form>
    </div>
  </m-dialog>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.set-order-status-dialog {
  &__form-body {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-50;
    min-height: 180px;
  }

  &__submit {
    width: 100%;
  }
}
</style>
