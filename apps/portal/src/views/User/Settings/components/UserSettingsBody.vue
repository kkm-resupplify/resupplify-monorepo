<template>
  <div class="user-settings-body">
    <m-tabs class="user-settings-body__tabs">
      <template #tabs>
        <div v-for="(item, idx) in profileLinks" :key="idx" class="user-settings-body__tab">
          <span :class="item.imageClass" v-text="item.imageContent" />
          <a-link :link="item.link" :text="item.text" size="large" />
        </div>
      </template>

      <template #button>
        <a-button :text="$t('userSettings.joinCompany')" size="x-large" />
      </template>
    </m-tabs>
    <user-settings-content
      user-img="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      user-img-alt="profile"
      first-name="Lorem"
      last-name="Ipsum"
      email="loremipsum@gmail.com"
      phone-number="123456789"
      birth-date="10-10-2000"
      sex="Female"
      class="user-settings-body__content"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import UserSettingsContent from './UserSettingsContent.vue'

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
  align-self: center;

  width: 60%;
  height: 760px;

  border-radius: $global-border-radius-10;

  &__tabs {
    width: 30%;
  }

  &__tab {
    display: flex;
    gap: $global-spacing-40;
    align-items: center;
  }

  &__content {
    width: 70%;
  }
}
</style>
