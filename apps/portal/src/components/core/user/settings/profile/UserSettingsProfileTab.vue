<template>
  <div class="user-settings-profile-tab">
    <div class="user-settings-profile-tab__header">
      <a-icon icon="account_circle" size="xx-large" />

      <span class="user-settings-profile-tab__name">
        <a-title
          v-if="hasUserDetails"
          size="xx-large"
          :title="`${userStore.getUserDetails?.firstName} ${userStore.getUserDetails?.lastName}`"
        />

        <template v-else>{{ userStore.getEmail }}</template>
      </span>
    </div>

    <user-details-form v-if="showUserDetailsForm" @updated="handleUserDetailsFormUpdated" />

    <div v-else class="user-settings-profile-tab__user-data">
      <a-title
        size="large"
        variant="horizontal"
        append-colon
        :title="$t('settings.profile.details.phoneNumber')"
        :subtitle="userStore.getUserDetails?.phoneNumber"
      />

      <a-title
        size="large"
        variant="horizontal"
        append-colon
        :title="$t('settings.profile.details.birthDate')"
        :subtitle="userStore.getUserDetails?.birthDate"
      />

      <a-title
        size="large"
        variant="horizontal"
        append-colon
        :title="$t('settings.profile.details.sex')"
        :subtitle="userStore.getUserDetails?.sex"
      />

      <a-button :text="$t('global.edit')" size="large" @click="toggleEditUserDetails" />
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

const handleUserDetailsFormUpdated = () => {
  editUserDetails.value = false
}
</script>

<style scoped lang="scss">
.user-settings-profile-tab {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-50;
  min-width: 400px;

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
