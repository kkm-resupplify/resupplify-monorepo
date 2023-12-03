<template>
  <m-dialog ref="dialogRef" :title="$t('company.management.products.dashboard.massActionsTitle')">
    <template #activator>
      <a-button :text="$t('company.management.products.dashboard.massActions')" size="x-large" />
    </template>

    <div class="mass-assign-product-status">
      <span
        v-text="
          $t('company.management.products.dashboard.massActionContent', {
            number: numberOfProducts
          })
        "
      />

      <div class="mass-assign-product-status__buttons">
        <a-button :text="$t('global.activate')" size="x-large" @click="handleActivateProducts" />

        <a-button
          :text="$t('global.deactivate')"
          size="x-large"
          color="gradient-danger"
          @click="handleDeactivateProducts"
        />
      </div>
    </div>
  </m-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MDialog from '@sharedMolecules/dialog/MDialog.vue'
import ProductStatusEnum from '@sharedEnums/product/ProductStatusEnum';

defineProps({
  numberOfProducts: {
    type: Number,
    required: true
  }
})

// Emits
const emits = defineEmits(['product-status-mass-assignment'])

// Variables
const dialogRef = ref<null | InstanceType<typeof MDialog>>(null)

// Methods
const handleActivateProducts = () => {
  emits('product-status-mass-assignment', ProductStatusEnum.ACTIVE)
  closeDialog()
}

const handleDeactivateProducts = () => {
  emits('product-status-mass-assignment', ProductStatusEnum.INACTIVE)
  closeDialog()
}

const closeDialog = () => {
  dialogRef.value?.closeDialog()
}
</script>

<style scoped lang="scss">
.mass-assign-product-status {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-100;
  margin-top: $global-spacing-60;

  &__buttons {
    display: flex;
    gap: $global-spacing-50;
    justify-content: center;
  }
}
</style>
