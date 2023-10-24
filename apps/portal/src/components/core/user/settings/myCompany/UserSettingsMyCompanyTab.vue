<template>
  <div class="user-settings-my-company-tab">
    <div class="user-settings-my-company-tab__header"></div>

    <div class="user-settings-my-company-tab__content">
      <join-company-section v-if="!userStore.hasCompany" />

      <my-company-section v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useUserStore } from '@/stores/user/useUserStore'
import JoinCompanySection from '@/components/core/user/settings/myCompany/sections/JoinCompanySection.vue'
import MyCompanySection from '@/components/core/user/settings/myCompany/sections/MyCompanySection.vue'

// Variables
const userStore = useUserStore()
</script>

<style scoped lang="scss">
.user-settings-my-company-tab {
  display: flex;
  flex-direction: column;

  &__header {
    display: flex;
    align-items: center;
  }
}
</style>
