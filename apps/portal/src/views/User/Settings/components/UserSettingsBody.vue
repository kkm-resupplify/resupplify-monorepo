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
      user.details.first-name="Lorem"
      user.details.last-name="Ipsum"
      user.details.email="loremipsum@gmail.com"
      user.details.phone-number="123456789"
      user.details.birth-date="10-10-2000"
      user.details.sex="Female"
      class="user-settings-body__content"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
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
const profileLinks: Array<profileLinksData> = computed(() => [
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

const user = useUserStore()

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
