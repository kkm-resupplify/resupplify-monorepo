<template>
  <basic-view-layout>
    <template #body>
      <a-panel width="auto">
        <cart-header-section />

        <cart-content-section />
      </a-panel>
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
import CartHeaderSection from '@/components/core/cart/CartHeaderSection.vue'
import CartContentSection from '@/components/core/cart/CartContentSection.vue'
</script>
