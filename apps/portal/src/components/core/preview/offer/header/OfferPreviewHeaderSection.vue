<template>
  <a-panel-section>
    <div class="offer-preview-header-section">
      <a-image
        :src="offer.product.image"
        :width="165"
        :height="165"
        :alt="$t('common.offer.list.item.imageAlt')"
        variant="rounded"
        style="align-self: flex-start; border: 2px solid var(--secondary-2); border-radius: 4px"
      />

      <div class="offer-preview-header-section__content-wrapper">
        <div class="offer-preview-header-section__product-information-name">
          <div class="offer-preview-header-section__product-information-title">
            <a-title :title="offer.product.name" size="xx-large" />

            <offer-owner-info-dialog v-if="isCurrentUserCompanyOffer" />
          </div>

          <a-title
            :title="offer.product.code"
            class="offer-preview-header-section__product-information-code"
          />
        </div>

        <div class="offer-preview-header-section__information">
          <div class="offer-preview-header-section__product-information">
            <a-title
              :title="$t('common.offer.list.item.product.name')"
              :subtitle="offer.product.name"
              variant="horizontal"
              append-colon
              class="offer-preview-header-section__title"
            />

            <div class="offer-preview-header-section__product-information-categories">
              <a-title
                :title="$t('common.offer.list.item.product.category')"
                :subtitle="offer.product.productCategory.name"
                variant="horizontal"
                append-colon
                class="offer-preview-header-section__title"
              />

              <span class="offer-preview-header-section__product-information-separator">|</span>

              <a-title
                :title="$t('common.offer.list.item.product.subcategory')"
                :subtitle="offer.product.productSubcategory.name"
                variant="horizontal"
                append-colon
                class="offer-preview-header-section__title"
              />
            </div>

            <a-title
              :title="$t('company.management.offer.preview.productUnit')"
              :subtitle="translateUnit(offer.product.productUnit.code)"
              variant="horizontal"
              append-colon
              class="offer-preview-header-section__title"
            />

            <product-tag-list
              :product-tags="offer.product.productTags"
              class="offer-preview-header-section__product-information-tags"
            />
          </div>

          <div class="offer-preview-header-section__product-order-information">
            <div class="offer-preview-header-section__product-order-price">
              <a-title
                :title="$t('common.offer.list.item.price')"
                variant="horizontal"
                append-colon
                size="large"
              />

              <a-currency :value="offer.price" value-size="large" />
            </div>

            <a-title
              :title="$t('common.offer.list.item.available')"
              :subtitle="offer.productQuantity"
              variant="horizontal"
              append-colon
              class="offer-preview-header-section__title"
              size="large"
            />

            <a-title
              :title="$t('common.offer.list.item.ends')"
              :subtitle="offer.endsAt"
              variant="horizontal"
              append-colon
              class="offer-preview-header-section__title"
              size="large"
            />

            <a-button
              v-if="isNotCurrentUserCompanyOffer"
              :text="buttonText"
              size="x-large"
              @click="handleAddToCart"
            />
          </div>
        </div>
      </div>
    </div>
  </a-panel-section>
</template>

<script setup lang="ts">
import { useUserCartStore } from '@/stores/user/useUserCartStore'
import { useUserStore } from '@/stores/user/useUserStore'
import type { Offer } from '@sharedInterfaces/offer/OfferInterface'
import { computed, type PropType } from 'vue'
import { useI18n } from 'vue-i18n'
import ProductTagList from '@/components/common/product/ProductTagList.vue'
import { useUnitTranslation } from '@sharedComposables/unit/useUnitTranslation'
import OfferOwnerInfoDialog from './modal/OfferOwnerInfoDialog.vue'

const props = defineProps({
  offer: { type: Object as PropType<Offer>, required: true }
})

// Variables
const userCartStore = useUserCartStore()
const { t } = useI18n()
const userStore = useUserStore()

// Composables
const { translateUnit } = useUnitTranslation()

// Computed
const isOfferInCart = computed(() => props.offer && userCartStore.isOfferInCart(props.offer))

const isNotCurrentUserCompanyOffer = computed(() => {
  return userStore.getCompany?.name !== props.offer.company.name
})

const isCurrentUserCompanyOffer = computed(() => {
  return userStore.getCompany?.name == props.offer.company.name
})

const buttonText = computed(() => {
  return isOfferInCart.value ? t('global.removeCartItem') : t('global.addToCart')
})

// Methods
const handleAddToCart = () => {
  if (!props.offer) return
  if (isOfferInCart.value) userCartStore.removeCartItem(props.offer.id)
  else userCartStore.addToCart(props.offer)
}
</script>

<style scoped lang="scss">
.offer-preview-header-section {
  position: relative;
  display: flex;
  gap: $global-spacing-50;
  white-space: nowrap;

  &__title {
    width: max-content;
  }

  &__information {
    display: flex;
  }

  &__content-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  &__product-information {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-20;
    width: 100%;
  }

  &__product-information-name {
    display: flex;
    flex-direction: column;
    margin-bottom: $global-spacing-30;
  }

  &__product-information-title {
    display: flex;
    gap: $global-spacing-30;
    align-items: center;
  }

  &__product-information-code {
    :deep(span) {
      color: gray;
    }
  }

  &__product-information-categories {
    display: flex;
    gap: $global-spacing-40;
  }

  &__product-information-separator {
    color: var(--secondary-2);
  }

  &__product-information-tags {
    display: flex;
    gap: $global-spacing-30;
    margin-top: $global-spacing-20;
  }

  &__product-order-information {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-20;
    align-items: flex-end;

    width: max-content;
  }

  &__product-order-price {
    display: flex;
    gap: $global-spacing-20;
  }
}
</style>
