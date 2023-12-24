<template>
  <basic-view-layout>
    <template #body>
      <div class="offers-view__content">
        <a-panel-section>
          <a-title :title="$t('offers.list.title')" size="x-large" />
          <div>offer-header</div>
        </a-panel-section>

        <a-panel-section>
          <div>offer-filters</div>

          <a-line />

          <template v-if="isLoading">implement-loader-here</template>

          <offer-list v-else :offers="offers" />
        </a-panel-section>
      </div>
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
import OfferList from '@/components/common/offer/OfferList.vue'
import { ref } from 'vue'
import type { Offer } from '@sharedInterfaces/offer/OfferInterface'

// Variables
const offers = ref<Offer[]>([
  {
    id: 1,
    price: 7,
    productQuantity: 31,
    warehouseQuantity: 122,
    status: 1,
    createdAt: '23-12-2023 01:31:02',
    updatedAt: '23-12-2023 01:31:02',
    startsAt: '23-12-2023 01:31:02',
    endsAt: '25-12-2023 01:31:02',
    product: {
      id: 1,
      name: 'Brazil coffee beans',
      description: 'The best coffee beans from Brazil',
      producer: 'Brazil Coffee Company',
      code: 'coffee/grains',
      status: 1,
      verificationStatus: 1,
      companyId: 1,
      productUnit: {
        id: 1,
        code: 'KILOGRAM'
      },
      productCategory: {
        id: 1,
        name: 'Beverages'
      },
      productSubcategory: {
        categoryId: 1,
        id: 2,
        name: 'Coffee and tea'
      },
      logoSrc: 'https://via.placeholder.com/150',
      productTags: [],
      translations: [
        {
          languageId: 1,
          name: 'Brazil coffee beans',
          description: 'The best coffee beans from Brazil'
        },
        {
          languageId: 2,
          name: 'Brazyilska kawa ziarnista',
          description: 'Najlepsza kawa ziarnista z Brazylii'
        }
      ]
    }
  },
  {
    id: 5,
    price: 6,
    productQuantity: 15,
    warehouseQuantity: 60,
    status: 1,
    createdAt: '23-12-2023 01:31:02',
    updatedAt: '23-12-2023 01:31:02',
    startsAt: '23-12-2023 01:31:02',
    endsAt: '25-12-2023 01:31:02',
    product: {
      id: 1,
      name: 'Brazil coffee beans',
      description: 'The best coffee beans from Brazil',
      producer: 'Brazil Coffee Company',
      code: 'coffee/grains',
      status: 1,
      verificationStatus: 1,
      companyId: 1,
      productUnit: {
        id: 1,
        code: 'KILOGRAM'
      },
      productCategory: {
        id: 1,
        name: 'Beverages'
      },
      productSubcategory: {
        categoryId: 1,
        id: 2,
        name: 'Coffee and tea'
      },
      logoSrc: 'https://via.placeholder.com/150',
      productTags: [],
      translations: [
        {
          languageId: 1,
          name: 'Brazil coffee beans',
          description: 'The best coffee beans from Brazil'
        },
        {
          languageId: 2,
          name: 'Brazyilska kawa ziarnista',
          description: 'Najlepsza kawa ziarnista z Brazylii'
        }
      ]
    }
  },
  {
    id: 9,
    price: 7,
    productQuantity: 40,
    warehouseQuantity: 160,
    status: 1,
    createdAt: '23-12-2023 01:31:02',
    updatedAt: '23-12-2023 01:31:02',
    startsAt: '23-12-2023 01:31:02',
    endsAt: '25-12-2023 01:31:02',
    product: {
      id: 1,
      name: 'Brazil coffee beans',
      description: 'The best coffee beans from Brazil',
      producer: 'Brazil Coffee Company',
      code: 'coffee/grains',
      status: 1,
      verificationStatus: 1,
      companyId: 1,
      productUnit: {
        id: 1,
        code: 'KILOGRAM'
      },
      productCategory: {
        id: 1,
        name: 'Beverages'
      },
      productSubcategory: {
        categoryId: 1,
        id: 2,
        name: 'Coffee and tea'
      },
      logoSrc: 'https://via.placeholder.com/150',
      productTags: [],
      translations: [
        {
          languageId: 1,
          name: 'Brazil coffee beans',
          description: 'The best coffee beans from Brazil'
        },
        {
          languageId: 2,
          name: 'Brazyilska kawa ziarnista',
          description: 'Najlepsza kawa ziarnista z Brazylii'
        }
      ]
    }
  }
])
const isLoading = ref(false)
</script>

<style lang="scss" scoped>
.offers-view {
  &__content {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-20;
  }
}
</style>
