<template>
  <a-dropdown class="navigation-bar-menu">
    <template #activator>
      <div class="navigation-bar-menu__header">
        <div class="navigation-bar-menu__user-data">
          <span class="navigation-bar-menu__fullname" v-text="fullName" />

          <span class="navigation-bar-menu__email" v-text="userStore.email" />
        </div>

        <div class="navigation-bar-menu__user-avatar">
          <a-icon icon="account_circle" size="xx-large" />
        </div>
      </div>
    </template>

    <template #content>
      <div style="display: flex; flex-direction: column; background-color: var(--primary); flex: 1">
        <div v-for="i in 5" :key="i" style="display: flex" v-text="i" />
      </div>
    </template>
  </a-dropdown>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useUserStore } from '@/stores/user/useUserStore'
import { useFullNameComposable } from '@sharedComposables/user/useUserDataComposable'

// Variables
const userStore = useUserStore()
const { userFullName } = useFullNameComposable()

// Computed
const fullName = computed(() => {
  return userFullName(userStore.getUserDetails?.first_name, userStore.getUserDetails?.last_name)
})
</script>

<style lang="scss" scoped>
.navigation-bar-menu {
  &__header {
    display: flex;
    align-items: center;
    gap: $global-spacing-20;
  }

  &__user-data {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  &__fullname {
    font-size: $global-text-medium-font-size;
  }

  &__email {
    font-size: $global-text-normal-font-size;
  }

  &__user-avatar {
    display: flex;
  }
}
</style>
