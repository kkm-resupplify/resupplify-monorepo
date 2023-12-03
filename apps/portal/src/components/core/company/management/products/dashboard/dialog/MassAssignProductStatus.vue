<template>
  <m-dialog ref="dialogRef" :title="$t('company.management.products.dashboard.massActionsTitle')">
    <template #activator>
      <a-button :text="$t('company.management.products.dashboard.massActions')" size="x-large" />
    </template>

    <div class="mass-assign-product-status">
      <span
        v-text="
          $t('company.management.products.dashboard.massActionContent', {
            number: products.length
          })
        "
      />

      <div class="mass-assign-product-status__buttons">
        <a-button
          :text="$t('global.activate')"
          size="x-large"
          @click="handleMassAssignProductStatus(ProductStatusEnum.ACTIVE)"
        />

        <a-button
          :text="$t('global.deactivate')"
          size="x-large"
          color="gradient-danger"
          @click="handleMassAssignProductStatus(ProductStatusEnum.INACTIVE)"
        />
      </div>
    </div>
  </m-dialog>
</template>

<script setup lang="ts">
import { ref, type PropType } from 'vue'
import MDialog from '@sharedMolecules/dialog/MDialog.vue'
import ProductStatusEnum from '@sharedEnums/product/ProductStatusEnum'
import type { Product } from '@sharedInterfaces/product/ProductInterface'
import CompanyProductsService from '@/services/product/CompanyProductsService'

const props = defineProps({
  products: {
    type: Array as PropType<Product[]>,
    required: true
  }
})

// Emits
const emits = defineEmits(['fetch-products'])

// Variables
const dialogRef = ref<null | InstanceType<typeof MDialog>>(null)

// Methods

const handleMassAssignProductStatus = async (status: number) => {
  const productIdList = props.products.map((product) => product.id)

  const { success } = await CompanyProductsService.setProductsStatus({
    productIdList: productIdList,
    status: status
  })

  if (success) {
    emits('fetch-products')
    closeDialog()
  }
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
