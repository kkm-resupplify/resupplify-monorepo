<template>
  <m-dialog
    ref="dialogRef"
    :title="$t('company.management.order.item.dialog.title')"
    class="set-order-status-dialog"
  >
    <template #activator>
      <a-button size="x-large" :text="$t('company.management.order.item.dialog.activator')" />
    </template>

    <div class="set-order-status-dialog__content">
      <o-form
        :submit-callback="handleSubmitChangeStatus"
        :initial-values="initialStatus"
        class="set-order-status-dialog__form-body"
      >
        <template #body>
          <m-select
            name="status"
            :label="$t('company.management.order.item.dialog.selectStatusLabel')"
            :placeholder="$t('company.management.order.item.dialog.selectStatusPlaceholder')"
            :options="orderStatusOptions"
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

<script setup lang="ts">
import OrderStatusEnum from '@sharedEnums/order/OrderStatusEnum'
import { computed, ref, type PropType } from 'vue'
import { useI18n } from 'vue-i18n'
import OrderService from '@/services/order/OrderService'
import type MDialogVue from '@sharedMolecules/dialog/MDialog.vue'
import type { Order } from '@sharedInterfaces/order/OrderInterface'

const props = defineProps({
  order: {
    type: Object as PropType<Order>,
    required: true
  }
})

// Emits
const emits = defineEmits(['fetch-orders'])

// Variables
const { t } = useI18n()
const dialogRef = ref<null | InstanceType<typeof MDialogVue>>(null)

// Computed
const orderStatusOptions = computed(() =>
  OrderStatusEnum.getAllFields().map((typeName) => ({
    id: +`${OrderStatusEnum[typeName as keyof OrderStatusEnum]}`,
    text: t(`company.management.order.status.${OrderStatusEnum[typeName as keyof OrderStatusEnum]}`)
  }))
)

const initialStatus = computed(() => {
  return { status: props.order.status }
})

// Methods
const closeDialog = () => {
  dialogRef.value?.closeDialog()
}

const handleSubmitChangeStatus = async (formData: Record<string, any>) => {
  const status = +formData.status

  const { success } = await OrderService.changeOrderStatus(props.order.id, status)

  if (success) {
    closeDialog()

    emits('fetch-orders')
  }
}
</script>

<style scoped lang="scss">
.set-order-status-dialog {
  &__content {
    min-width: 300px;
  }

  &__form-body {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-50;
  }

  &__submit {
    width: 100%;
  }
}
</style>
