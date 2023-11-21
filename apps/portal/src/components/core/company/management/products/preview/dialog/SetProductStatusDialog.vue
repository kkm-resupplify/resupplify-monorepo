<template>
  <m-dialog
    ref="dialogRef"
    :title="$t('company.management.navigation.products.preview.dialog.update.title')"
    class="edit-product-status-dialog"
  >
    <template #activator>
      <a-button
        :text="$t('company.management.navigation.products.preview.dialog.edit.setStatus')"
        size="x-large"
        class="edit-product-status-dialog__activator"
      />
    </template>

    <div class="edit-product-status-dialog__content">
      <o-form :initial-values="{ ...props.product }">
        <template #body>
          <m-select name="status" :options="statuses" />
        </template>
        <template #footer>
          <div class="edit-product-status-dialog__buttons">
            <a-button :text="$t('global.cancel')" size="x-large" />

            <a-button button-type="submit" :text="$t('global.update')" size="x-large" />
          </div>
        </template>
      </o-form>
    </div>
  </m-dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Product } from '@sharedInterfaces/product/ProductInterface'
import type { PropType } from 'vue'
import { useI18n } from 'vue-i18n'
import MDialog from '@sharedMolecules/dialog/MDialog.vue'

const props = defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true
  }
})

// Variables
const { t } = useI18n()
const statuses = computed(() => [
  { id: 1, text: t('global.active') },
  { id: 2, text: t('global.inactive') }
])
const dialogRef = ref<null | InstanceType<typeof MDialog>>(null)
</script>

<style lang="scss" scoped>
.edit-product-status-dialog {
  &__content {
    display: flex;
    flex-direction: column;

    width: 500px;
    height: 250px;
    margin-top: $global-spacing-60;

    white-space: nowrap;
  }

  &__status {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-50;
  }

  &__buttons {
    display: flex;
    align-self: center;
    gap: $global-spacing-50;
    margin-inline: auto;

    width: min-content;
  }
}
</style>
