<template>
  <basic-view-layout>
    <template #body>
      <a-panel width="auto">
        <cart-header-section />

        <div>cart-company-group-list</div>
      </a-panel>
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
import CartHeaderSection from '@/components/core/cart/CartHeaderSection.vue'
</script>
