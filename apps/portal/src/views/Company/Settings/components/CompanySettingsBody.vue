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
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRegisterCompanyStore } from '../../../../stores/company/useRegisterCompanyStore'

// Interfaces
interface category {
  imageClass: String
  imageContent: String
  text: String
  link: String
}
// Variables
const { t } = useI18n()
const profileLinks: Array<category> = reactive([
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

const data = ref([])

onMounted(() => {
  const registerCompanyStore = useRegisterCompanyStore().registerCompanyFormData
  data.value = registerCompanyStore
})
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
