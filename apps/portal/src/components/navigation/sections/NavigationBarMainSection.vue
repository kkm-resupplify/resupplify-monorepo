<template>
  <div class="navigation-bar-main-section">
    <a-link
      v-for="linkItem in linkList"
      :key="linkItem.link"
      :link="linkItem.link"
      :text="linkItem.text"
      size="medium"
    />
  </div>
</template>

<script setup lang="ts">
// Vue
import { ref } from 'vue'

// i18n
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

// Components
import ALink from '@sharedAtoms/link/ALink.vue'

const linkList = ref([
  { link: '/', text: t('pages.home') },
  { link: '/browse', text: t('pages.browse') },
  { link: '/resources', text: t('pages.resources') }
])
</script>

<style scoped lang="scss">
.navigation-bar-main-section {
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: stretch;
}
</style>
