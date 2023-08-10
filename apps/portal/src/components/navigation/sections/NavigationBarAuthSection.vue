<template>
  <div class="navigation-bar-auth-section">
    <router-link
      v-for="buttonLinkItem in buttonLinkList"
      :key="buttonLinkItem.link"
      :to="buttonLinkItem.link"
    >
      <a-button :text="buttonLinkItem.text" :outlined="buttonLinkItem.outlined" size="x-large" />
    </router-link>
  </div>
</template>

<script setup lang="ts">
// Vue
import { ref } from 'vue'

// i18n
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

// Components
import AButton from '@sharedAtoms/button/AButton.vue'

const buttonLinkList = ref([
  { link: '/login', text: t('auth.login') },
  { link: '/register', text: t('auth.signup'), outlined: true }
])
</script>

<style scoped lang="scss">
.navigation-bar-auth-section {
  display: flex;
  flex: 1 0 0;
  gap: $global-spacing-90;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
}
</style>
