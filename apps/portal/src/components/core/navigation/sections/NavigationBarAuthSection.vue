<template>
  <div class="navigation-bar-auth-section">
    <template v-if="!userStore.isAuthenticated">
      <router-link
        v-for="buttonLinkItem in buttonLinkList"
        :key="buttonLinkItem.link"
        :to="buttonLinkItem.link"
        style="text-decoration: none"
      >
        <a-button :text="buttonLinkItem.text" :outlined="buttonLinkItem.outlined" size="x-large" />
      </router-link>
    </template>

    <template v-if="userStore.isAuthenticated">
      <router-link :to="{ name: RouteNames.CART }">
        <m-icon icon="shopping_cart" size="xx-large" hoverable />
      </router-link>

      <navigation-bar-menu />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useUserStore } from '@/stores/user/useUserStore'
import { useI18n } from 'vue-i18n'
import NavigationBarMenu from '../items/NavigationBarMenu.vue'
import { RouteNames } from '@/routes/index'

// Variables
const { t } = useI18n()
const userStore = useUserStore()

// Computed
const buttonLinkList = computed(() => [
  { link: '/login', text: t('auth.login') },
  { link: '/register', text: t('auth.signup'), outlined: true }
])
</script>

<style scoped lang="scss">
.navigation-bar-auth-section {
  display: flex;
  flex: 1 0 0;
  gap: $global-spacing-40;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
}
</style>
