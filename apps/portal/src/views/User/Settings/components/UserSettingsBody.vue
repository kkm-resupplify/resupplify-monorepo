<template>
  <div class="user-settings-body">
    <m-tabs>
      <template #tabs>
        <a-link
          v-for="(item, index) in profileLinks"
          :key="index"
          :link="item.link"
          :text="item.text"
        />
      </template>
      <template #button>
        <a-button :text="$t('userSettings.joinCompany')" />
      </template>
    </m-tabs>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'

// Variables
const { t } = useI18n()
const profileLinks = reactive([
  { text: t('userSettings.profile'), link: '/settings/profile' },
  { text: t('userSettings.preferences'), link: '/settings/preferences' },
  { text: t('userSettings.myCompany'), link: '/settings/mycompany' }
])
</script>

<style scoped lang="scss"></style>
