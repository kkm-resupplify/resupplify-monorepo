<template>
  <m-dialog ref="dialogRef" class="offer-owner-info-dialog">
    <template #activator>
      <m-icon
        icon="info"
        size="x-large"
        color="info"
        gradient
        class="offer-owner-info-dialog__activator"
      />
    </template>

    <div class="offer-owner-info-dialog__content">
      <a-title
        title="This offer belongs to your company. You cannot add it to your cart.
"
        size="large"
      />

      <a-button text="Close" size="x-large" @click="closeDialog" />
    </div>
  </m-dialog>
</template>

<script setup lang="ts">
import type MDialog from '@sharedMolecules/dialog/MDialog.vue'
import { ref } from 'vue'

// Variables
const dialogRef = ref<null | InstanceType<typeof MDialog>>(null)

// Methods
const closeDialog = () => {
  dialogRef.value?.closeDialog()
}
</script>

<style scoped lang="scss">
.offer-owner-info-dialog {
  position: relative;

  &__activator {
    position: absolute;
    transform: translateY(-40%);
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-100;
    align-items: center;

    max-width: 350px;

    text-align: center;
    text-wrap: wrap;
  }
}
</style>
