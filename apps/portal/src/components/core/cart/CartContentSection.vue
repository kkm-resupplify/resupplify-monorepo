<template>
  <a-panel-section class="cart-content-section">
    <a-title :title="$t('cart.main.content.title')" size="large" />

    <a-list v-if="showCartGroups">
      <cart-company-offers-group
        v-for="groupData in userCartStore.cartCompanyGroups"
        :key="groupData.companyName"
        :group-data="groupData"
      />
    </a-list>

    <a-list-no-results v-else :text="$t('cart.main.content.groups.noItems')" />
  </a-panel-section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useUserCartStore } from '@stores/user/useUserCartStore'
import CartCompanyOffersGroup from '@/components/core/cart/CartCompanyOffersGroup.vue'

// Variables
const userCartStore = useUserCartStore()

// Computed
const showCartGroups = computed(() => userCartStore.cartCompanyGroups.length > 0)
</script>
