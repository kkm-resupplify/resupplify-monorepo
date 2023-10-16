<template>
  <div class="user-settings-body">
    <m-tabs class="user-settings-body__tabs">
      <template #tabs>
        <div v-for="(item, idx) in profileLinks" class="user-settings-body__tab">
          <span :class="item.imageClass" v-text="item.imageContent" />
          <a-link :key="idx" :link="item.link" :text="item.text" size="large" />
        </div>
      </template>

      <template #button>
        <a-button :text="$t('userSettings.joinCompany')" size="x-large" />
      </template>
    </m-tabs>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'

// Interfaces
interface profileLinksData {
  imageClass: string
  imageContent: string
  text: string
  link: string
}

// Variables
const { t } = useI18n()
const profileLinks: Array<profileLinksData> = reactive([
  {
    imageClass: 'material-symbols-outlined',
    imageContent: 'account_circle',
    text: t('userSettings.profile'),
    link: '/settings/profile'
  },
  {
    imageClass: 'material-symbols-outlined',
    imageContent: 'settings_accessibility',
    text: t('userSettings.preferences'),
    link: '/settings/preferences'
  },
  {
    imageClass: 'material-symbols-outlined',
    imageContent: 'apartment',
    text: t('userSettings.myCompany'),
    link: '/settings/my-company'
  }
])
</script>

<style scoped lang="scss">
@mixin boxshadow-primary-2 {
  box-shadow: #{$global-boxshadow-primary-2-x} #{$global-boxshadow-primary-2-y} #{$global-boxshadow-primary-2-blur}
    #{$global-boxshadow-primary-2-spread} #{$global-boxshadow-primary-2-color};
}
.user-settings-body {
  @include boxshadow-primary-2;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-self: center;
  justify-content: space-between;

  width: 60%;
  height: 760px;

  border-radius: $global-border-radius-10;

  &__tab {
    display: flex;
    align-items: center;
    gap: $global-spacing-40;
  }
}
</style>
