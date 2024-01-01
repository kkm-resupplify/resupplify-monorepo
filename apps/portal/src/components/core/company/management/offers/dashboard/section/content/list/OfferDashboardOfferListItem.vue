<template>
  <a-expansion-panel class="offer-dashboard-offer-list-item">
    <template #activator>
      <a-list-item-wrapper class="offer-dashboard-offer-list-item__activator">
        <a-status-indicator :status="offerStatus(offer)" />

        <a-list-item-title-section :value="offer.product.name" />

        <a-list-item-title-section
          v-for="(activatorSection, idx) in activatorSections"
          :key="idx"
          :title="activatorSection.title"
          :value="activatorSection.value"
        />

        <a-currency
          :title="$t('global.pricePerUnit')"
          :value="offer.price"
          vertical
          style="flex-basis: 30%"
          title-size="x-normal"
        />

        <o-confirm-dialog
          type="withdraw"
          :title="t('company.management.offer.dashboard.dialog.titleWithdrawal')"
          :content="t('company.management.offer.dashboard.dialog.contentWithdrawal')"
          :activator-name="t('global.withdraw')"
          activator-size="x-large"
          @click.stop
          @confirmed="handleWithdrawOffer"
        />
      </a-list-item-wrapper>
    </template>

    <template #content>
      <div class="offer-dashboard-offer-list-item__content">
        <a-title
          :title="$t('company.management.offer.dashboard.list.item.productCode')"
          :subtitle="offer.product.code"
          variant="horizontal"
          append-colon
        />

        <a-title
          :title="$t('company.management.offer.dashboard.list.item.productDescription')"
          :subtitle="offer.product.description"
          variant="horizontal"
          append-colon
        />

        <a-title
          :title="$t('company.management.offer.dashboard.list.item.productProducer')"
          :subtitle="offer.product.producer"
          variant="horizontal"
          append-colon
        />

        <div class="offer-dashboard-offer-list-item__content-tags">
          <a-title
            v-if="offer.product.productTags.length"
            :title="$t('company.management.offer.dashboard.list.item.productTags')"
            append-colon
          />

          <product-tag-list :product-tags="offer.product.productTags" />
        </div>
      </div>
    </template>
  </a-expansion-panel>
</template>

<script setup lang="ts">
import type { Offer } from '@sharedInterfaces/offer/OfferInterface'
import type { PropType } from 'vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ProductTagList from '@/components/common/product/ProductTagList.vue'
import { useOfferStatus } from '@/composable/offer/useOfferStatus'
import CompanyOffersService from '@/services/company/CompanyOffersService'
import { useUnitTranslation } from '@sharedComposables/unit/useUnitTranslation'

const props = defineProps({
  offer: {
    type: Object as PropType<Offer>,
    required: true
  }
})

// Emits
const emits = defineEmits(['offer-changed'])

// DTO
class ExpansionPanelSectionDto {
  title: string
  value: string | number

  constructor(title: string, value: string | number) {
    this.title = this.getTranslationValue(title)
    this.value = value
  }

  getTranslationValue(key: string): string {
    return t(`company.management.offer.dashboard.list.item.${key}`)
  }
}

// Variables
const { t } = useI18n()

// Composables
const { offerStatus } = useOfferStatus()
const { translateUnit } = useUnitTranslation()

// Computed
const activatorSections = computed(() => {
  return [
    new ExpansionPanelSectionDto('unit', translateUnit(props.offer.product.productUnit.code)),
    new ExpansionPanelSectionDto('supply', props.offer.warehouseQuantity),
    new ExpansionPanelSectionDto('quantity', props.offer.productQuantity)
  ]
})

// Methods
const handleWithdrawOffer = async () => {
  await CompanyOffersService.deactivateOffer(props.offer.id)

  emits('offer-changed')
}
</script>

<style scoped lang="scss">
.offer-dashboard-offer-list-item {
  &__dropdown-activator {
    display: flex;
    justify-content: flex-end;
    min-width: 120px;
  }

  &__dropdown-content {
    display: flex;
    flex-direction: column;

    :deep(button) {
      width: 100%;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-40;
    white-space: nowrap;
  }

  &__content-tags {
    display: flex;
    gap: $global-spacing-40;
  }
}
</style>
