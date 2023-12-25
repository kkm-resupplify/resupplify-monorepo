<template>
  <a-panel-section class="cart-content-section">
    <a-title :title="$t('cart.main.content.title')" size="large" />

    <a-list>
      <cart-company-offers-group />
    </a-list>
  </a-panel-section>
</template>

<script setup lang="ts">
import CartCompanyOffersGroup from '@/components/core/cart/CartCompanyOffersGroup.vue'
</script>
