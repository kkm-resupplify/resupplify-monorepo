<template>
  <div class="user-settings-profile-tab">
    <div class="user-settings-profile-tab__header">
      <a-icon icon="account_circle" size="xx-large" />

      <span class="user-settings-profile-tab__name">
        <template v-if="hasUserDetails">
          <a-title
            :title="`${userStore.getUserDetails?.firstName} ${userStore.getUserDetails?.lastName}`"
          />
        </template>

        <template v-else>{{ userStore.getEmail }}</template>
      </span>
    </div>

    <user-details-form v-if="showUserDetailsForm" />

    <div v-else class="user-settings-profile-tab__user-data">
      <a-title
        :title="$t('user.details.phoneNumber')"
        :sub-title="userStore.getUserDetails?.phoneNumber"
      />

      <a-title
        :title="$t('user.details.birthDate')"
        :sub-title="userStore.getUserDetails?.birthDate"
      />

      <a-title :title="$t('user.details.sex')" :sub-title="userStore.getUserDetails?.sex" />

      <a-button :text="$t('user.settings.edit')" size="large" @click="toggleEditUserDetails" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useUserStore } from '@/stores/user/useUserStore'
import UserDetailsForm from '@/components/core/user/details/UserDetailsForm.vue'

// Variables
const userStore = useUserStore()

const editUserDetails = ref(false)

// Computed
const hasUserDetails = computed(() => {
  return userStore.getUserDetails != null
})

const showUserDetailsForm = computed(() => {
  return !hasUserDetails.value || editUserDetails.value
})

// Methods
const toggleEditUserDetails = () => {
  editUserDetails.value = !editUserDetails.value
}
</script>

<style scoped lang="scss">
.user-settings-profile-tab {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-50;

  &__header {
    display: flex;
    align-items: center;
  }

  &__name {
    font-size: $global-title-large-font-size;
  }

  &__user-data {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-30;
  }
}
</style>