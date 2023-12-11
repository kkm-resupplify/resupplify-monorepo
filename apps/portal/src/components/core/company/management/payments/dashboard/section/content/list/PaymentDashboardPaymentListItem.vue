<template>
  <a-expansion-panel class="payment-dashboard-payment-list-item">
    <template #activator>
      <a-list-item-wrapper class="payment-dashboard-payment-list-item__activator">
        <a-list-item-title-section
          v-for="(activatorSection, idx) in activatorSections"
          :key="idx"
          :title="activatorSection.title"
          :value="activatorSection.value"
        />
      </a-list-item-wrapper>
    </template>

    <template #content>
      <div class="payment-dashboard-payment-list-item__content"></div>
    </template>
  </a-expansion-panel>
</template>

<script setup lang="ts">
import { type PropType, computed } from 'vue'
import type { Payment } from '@sharedInterfaces/balance/CompanyBalanceInterface'
import { useI18n } from 'vue-i18n'
import PaymentTypeEnum from '@sharedEnums/Payment/PaymentTypeEnum'

const props = defineProps({
  payment: {
    type: Object as PropType<Payment>,
    required: true
  }
})

// DTO
class ActivatorSectionDto {
  title: string
  value: string | number | Date

  constructor(title: string, value: string | number | Date) {
    this.title = this.getTranslationValue(title)
    this.value = value
  }

  getTranslationValue(key: string): string {
    return t(`company.management.balance.dashboard.payment.section.${key}`)
  }
}

// Variables
const { t } = useI18n()

// Computed
const activatorSections = computed(() => {
  return [
    new ActivatorSectionDto('amount', props.payment.amount),
    new ActivatorSectionDto('type', getTransactionType(props.payment.type)),
    new ActivatorSectionDto('date', props.payment.date)
  ]
})

const getTransactionType = (key: number) => {
  return t(`payment.type.${PaymentTypeEnum.getFieldName(key)?.toLowerCase()}`)
}
</script>

<style lang="scss" scoped>
.payment-dashboard-payment-list-item {
  &__activator {
    justify-content: space-between;
    max-height: 60px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-30;
  }
}
</style>
