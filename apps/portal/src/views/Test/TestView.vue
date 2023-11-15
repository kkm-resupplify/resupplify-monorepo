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
import type { Product } from '../../interface/product/ProductInterface'

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
    productUnitId: 201,
    productSubcategory: {
      id: 301,
      name: 'Subcategory 1'
      // Add other subcategory properties as needed
    },
    productCategory: {
      id: 401,
      name: 'Category 1'
      // Add other category properties as needed
    }
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description for Product 2',
    producent: 'Producer 2',
    code: 'P002',
    status: 1,
    verificationStatus: 1,
    companyId: 102,
    productUnitId: 202,
    productSubcategory: {
      id: 302,
      name: 'Subcategory 2'
      // Add other subcategory properties as needed
    },
    productCategory: {
      id: 402,
      name: 'Category 2'
      // Add other category properties as needed
    }
  }
  // Add more objects as needed
]
</script>

<style lang="scss" scoped>
.test-view {
  display: flex;
}
</style>
