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
      <div class="navigation-bar-menu__dropdown-items">
        <router-link
          v-for="(dropdownItem, idx) in dropdownItems"
          :key="idx"
          :to="{ name: dropdownItem.link }"
          class="navigation-bar-menu__dropdown-item"
        >
          <span v-text="dropdownItem.text" />

          <a-icon :icon="dropdownItem.icon" size="x-large" />
        </router-link>
      </div>
    </template>
  </a-dropdown>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useUserStore } from '@/stores/user/useUserStore'
import { useFullNameComposable } from '@sharedComposables/user/useUserDataComposable'
import { RouteNames } from '@/routes/index'

interface DropdownItemData {
  text: string
  icon: string
  link: string
}
// Variables
const userStore = useUserStore()
const { userFullName } = useFullNameComposable()

// Computed
const fullName = computed(() => {
  return userFullName(userStore.getUserDetails?.firstName, userStore.getUserDetails?.lastName)
})

const dropdownItems = computed(() => {
  return [
    { text: 'My company', icon: 'apartment', link: RouteNames.COMPANY_DASHBOARD },
    { text: 'Settings', icon: 'settings', link: RouteNames.SETTINGS },
    { text: 'Logout', icon: 'logout', link: RouteNames.LOGOUT }
  ]
})
</script>

<style lang="scss" scoped>
.navigation-bar-menu {
  &__header {
    display: flex;
    gap: $global-spacing-20;
    align-items: center;
    align-self: flex-end;

    min-width: 200px;
  }

  &__user-data {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-end;
    align-self: flex-end;
  }

  &__fullname {
    font-size: $global-size-600;
  }

  &__email {
    font-size: $global-text-normal-font-size;
  }

  &__user-avatar {
    display: flex;
  }

  &__dropdown-items {
    @include boxshadow-primary-2;

    display: flex;
    flex: 1;
    flex-direction: column;
    gap: $global-spacing-10;

    padding: $global-spacing-20;

    background-color: var(--primary);
  }

  &__dropdown-item {
    cursor: pointer;

    display: flex;
    gap: $global-spacing-20;
    align-items: center;
    justify-content: space-between;

    padding: $global-spacing-10 $global-spacing-20;

    font-size: $global-text-medium-font-size;
    color: var(--white);
    text-decoration: none;

    border-radius: $global-border-radius-10;

    &:hover {
      background-color: var(--secondary-2);
    }
  }
}
</style>
