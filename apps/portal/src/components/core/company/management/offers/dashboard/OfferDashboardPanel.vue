<template>
  <a-panel>
    <offer-dashboard-header-section />

    <offer-dashboard-content-section :offers="offers" :is-loading="isLoading" />
  </a-panel>
</template>

<script setup lang="ts">
import OfferDashboardHeaderSection from '@/components/core/company/management/offers/dashboard/section/header/OfferDashboardHeaderSection.vue'
import OfferDashboardContentSection from '@/components/core/company/management/offers/dashboard/section/content/OfferDashboardContentSection.vue'
import { ref } from 'vue'
import type { Offer } from '@sharedInterfaces/offer/OfferInterface'

// Variables
const offers = ref<Offer[]>([
  {
    id: 1,
    status: 0,
    product: {
      id: 1,
      name: 'Product 1',
      description: 'Description for product 1',
      producer: 'Producer 1',
      code: 'Code 1',
      status: 1,
      verificationStatus: 1,
      companyId: 1,
      productUnit: {
        id: 1,
        code: 'Unit Code 1'
      },
      productSubcategory: {
        id: 1,
        name: 'Subcategory 1',
        categoryId: 1
      },
      productCategory: {
        id: 1,
        name: 'Category 1'
      },
      productTags: [
        {
          id: 1,
          slug: 'Slug 1',
          name: 'Tag 1',
          color: 'Color 1'
        },
        {
          id: 2,
          slug: 'Slug 2',
          name: 'Tag 2',
          color: 'Color 2'
        }
      ],
      translations: [
        {
          languageId: 1,
          name: 'Name in Language 1',
          description: 'Description in Language 1'
        },
        {
          languageId: 2,
          name: 'Name in Language 2',
          description: 'Description in Language 2'
        }
      ],
      quantity: 10,
      netPrice: 100,
      supply: 5
    }
  },
  {
    id: 2,
    status: 0,
    product: {
      id: 2,
      name: 'Product 2',
      description: 'Description for product 2',
      producer: 'Producer 2',
      code: 'Code 2',
      status: 2,
      verificationStatus: 2,
      companyId: 2,
      productUnit: {
        id: 2,
        code: 'Unit Code 2'
      },
      productSubcategory: {
        id: 2,
        name: 'Subcategory 2',
        categoryId: 2
      },
      productCategory: {
        id: 2,
        name: 'Category 2'
      },
      productTags: [
        {
          id: 3,
          slug: 'Slug 3',
          name: 'Tag 3',
          color: 'Color 3'
        },
        {
          id: 4,
          slug: 'Slug 4',
          name: 'Tag 4',
          color: 'Color 4'
        }
      ],
      translations: [
        {
          languageId: 3,
          name: 'Name in Language 3',
          description: 'Description in Language 3'
        },
        {
          languageId: 4,
          name: 'Name in Language 4',
          description: 'Description in Language 4'
        }
      ],
      quantity: 20,
      netPrice: 200,
      supply: 10
    }
  },
  {
    id: 3,
    status: 1,
    product: {
      id: 3,
      name: 'Product 3',
      description: 'Description for product 3',
      producer: 'Producer 3',
      code: 'Code 3',
      status: 3,
      verificationStatus: 3,
      companyId: 3,
      productUnit: {
        id: 3,
        code: 'Unit Code 3'
      },
      productSubcategory: {
        id: 3,
        name: 'Subcategory 3',
        categoryId: 3
      },
      productCategory: {
        id: 3,
        name: 'Category 3'
      },
      productTags: [
        {
          id: 5,
          slug: 'Slug 5',
          name: 'Tag 5',
          color: 'Color 5'
        },
        {
          id: 6,
          slug: 'Slug 6',
          name: 'Tag 6',
          color: 'Color 6'
        }
      ],
      translations: [
        {
          languageId: 5,
          name: 'Name in Language 5',
          description: 'Description in Language 5'
        },
        {
          languageId: 6,
          name: 'Name in Language 6',
          description: 'Description in Language 6'
        }
      ],
      quantity: 30,
      netPrice: 300,
      supply: 15
    }
  }
])
const isLoading = ref(false)
</script>
