<template>
  <div class="navigation-bar-main-section">
    <a-link
      v-for="linkItem in linkList"
      :key="linkItem.link"
      :link="linkItem.link"
      :text="linkItem.text"
      size="x-medium"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ALink from '@sharedAtoms/link/ALink.vue'

// Variables
const { t } = useI18n()

// Computed
const linkList = computed(() => [
  { link: '/', text: t('pages.home') },
  { link: '/offers', text: t('pages.offers') },
  { link: '/companies', text: t('pages.companies') },
  { link: '/resources', text: t('pages.resources') }
])
</script>

<style scoped lang="scss">
.navigation-bar-main-section {
  display: flex;
  gap: $global-spacing-50;
  align-items: center;
  align-self: stretch;
}
</style>
