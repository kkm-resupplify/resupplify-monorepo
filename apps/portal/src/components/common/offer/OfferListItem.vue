<template>
  <a-list-item-wrapper class="offer-list-item">
    <a-image
      :src="offer.product.image"
      :width="150"
      :height="150"
      :alt="offer.product.name"
      variant="rounded"
      style="align-self: flex-start; border: 2px solid var(--secondary-2); border-radius: 10px"
    />

    <div class="offer-list-item__information">
      <div class="offer-list-item__product-information">
        <a-title :title="offer.product.name" variant="horizontal" size="large" />

        <div class="offer-list-item__product-information-specs">
          <a-title
            v-if="showCompanyName"
            :title="$t('common.offer.list.item.company')"
            :subtitle="offer.company.name"
            variant="horizontal"
            class="offer-list-item__product-information-title"
            append-colon
          />

          <div class="offer-list-item__product-information-categories">
            <a-title
              :title="$t('common.offer.list.item.product.category')"
              :subtitle="offer.product.productCategory.name"
              variant="horizontal"
              class="offer-list-item__product-information-title"
              append-colon
            />

            <span class="offer-list-item__product-information-separator">|</span>

            <a-title
              :title="$t('common.offer.list.item.product.subcategory')"
              :subtitle="offer.product.productSubcategory.name"
              variant="horizontal"
              class="offer-list-item__product-information-title"
              append-colon
            />
          </div>

          <a-title
            :title="$t('common.offer.list.item.product.unit')"
            :subtitle="translateUnit(offer.product.productUnit.code)"
            variant="horizontal"
            class="offer-list-item__product-information-title"
            append-colon
          />

          <product-tag-list
            class="offer-list-item__product-information-tags"
            :product-tags="offer.product.productTags"
          />
        </div>
      </div>

      <div class="offer-list-item__order-information">
        <div class="offer-list-item__order-price">
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
        />

        <a-title
          :title="$t('common.offer.list.item.ends')"
          :subtitle="offer.endsAt"
          variant="horizontal"
          append-colon
        />

        <div class="offer-list-item__order-information-buttons">
          <a-button
            v-if="isNotCurrentUserCompanyOffer"
            :text="buttonText"
            size="x-large"
            @click="handleAddToCart"
          />

          <a-button
            :text="$t('global.seeDetails')"
            size="x-large"
            :to="{ name: RouteNames.OFFER_PREVIEW, params: { id: offer.id } }"
          />
        </div>
      </div>
    </div>
  </a-list-item-wrapper>
</template>

<script setup lang="ts">
import { useUserCartStore } from '@stores/user/useUserCartStore'
import type { Offer } from '@sharedInterfaces/offer/OfferInterface'
import ProductTagList from '@/components/common/product/ProductTagList.vue'
import { type PropType, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouteNames } from '@/routes'
import { useUserStore } from '@/stores/user/useUserStore'
import { useUnitTranslation } from '@sharedComposables/unit/useUnitTranslation'

const props = defineProps({
  offer: {
    type: Object as PropType<Offer>,
    required: true
  },
  showCompanyName: {
    type: Boolean,
    default: true
  }
})

// Variables
const userCartStore = useUserCartStore()
const { t } = useI18n()
const userStore = useUserStore()

// Composables
const { translateUnit } = useUnitTranslation()

// Computed
const isOfferInCart = computed(() => userCartStore.isOfferInCart(props.offer))

const buttonText = computed(() => {
  return isOfferInCart.value ? t('global.removeCartItem') : t('global.addToCart')
})

const isNotCurrentUserCompanyOffer = computed(() => {
  return userStore.getCompany?.name !== props.offer.company.name
})

// Methods
const handleAddToCart = () => {
  if (isOfferInCart.value) userCartStore.removeCartItem(props.offer.id)
  else userCartStore.addToCart(props.offer)
}
</script>

<style scoped lang="scss">
.offer-list-item {
  &__information {
    display: flex;
    justify-content: space-between;
    width: 100%;
    white-space: nowrap;
  }

  &__product-information {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-40;
    margin-left: $global-spacing-50;
  }

  &__product-information-specs {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__product-information-tags {
    display: flex;
    gap: $global-spacing-30;
    margin-top: $global-spacing-20;
  }

  &__product-information-title {
    width: max-content;
  }

  &__product-information-categories {
    display: flex;
    gap: $global-spacing-40;
  }

  &__product-information-separator {
    color: var(--secondary-2);
  }

  &__order-information {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-20;
    align-items: flex-end;
  }

  &__order-information-buttons {
    display: flex;
    gap: $global-spacing-50;
    margin-top: $global-spacing-50;
  }

  &__order-price {
    display: flex;
    gap: $global-spacing-20;
  }
}
</style>
