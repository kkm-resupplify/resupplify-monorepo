<template>
  <div class="navigation-bar-auth-section">
    <router-link
      v-for="buttonLinkItem in buttonLinkList"
      :key="buttonLinkItem.link"
      :to="buttonLinkItem.link"
    >
      <a-button :text="buttonLinkItem.text" :outlined="buttonLinkItem.outlined" size="x-large" />
    </router-link>

    <a-button text="Change theme" @click="toggleUserTheme" />

    <a-button text="Change locale" @click="changeLocale" />

    <m-auth-user />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useUserThemeStore } from '@/stores/user/useUserThemeStore'
import { useUserStore } from '@/stores/user/useUserStore'
import { useI18n } from 'vue-i18n'
import MAuthUser from '@sharedMolecules/navbar/MAuthUser.vue'
// Variables
const { t } = useI18n()
const userThemeStore = useUserThemeStore()
const userStore = useUserStore()

const buttonLinkList = computed(() => [
  { link: '/login', text: t('auth.login') },
  { link: '/register', text: t('auth.signup'), outlined: true }
])

// Methods
const toggleUserTheme = () => {
  userThemeStore.toggleUserTheme()
}

const changeLocale = () => {
  if (userStore.language == 'en-US') userStore.setLanguage('pl-PL')
  else userStore.setLanguage('en-US')
}
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
