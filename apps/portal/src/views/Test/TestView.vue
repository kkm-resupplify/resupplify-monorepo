<template>
  <basic-view-layout class="test-view">
    <template #body>
      <product-list-item :product="products[0]" />
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
import ProductListItem from '@/components/core/company/management/products/dashboard/section/content/list/ProductListItem.vue'
import type { Product } from '@sharedInterfaces/product/ProductInterface'

const products: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description for Product 1',
    producent: 'Producer 1',
    code: 'P001',
    status: 1,
    verificationStatus: 2,
    companyId: 101,
    productUnit: {
      id: 2,
      code: 'KILOGRAMS'
    },
    productSubcategory: {
      id: 301,
      name: 'Subcategory 1',
      categoryId: 401
    },
    productCategory: {
      id: 401,
      name: 'Category 1'
    },
    productTags: [
      {
        id: 1,
        name: 'Sweet',
        color: '#333333'
      },
      {
        id: 2,
        name: 'Bread',
        color: '#555555'
      }
    ]
  }
]
</script>

<style lang="scss" scoped>
.test-view {
  display: flex;
}
</style>
