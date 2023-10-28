<template>
  <a-dropdown class="company-member-invitation">
    <template #activator>
      <div class="company-member-invitation__invite">
        <a-button
          :text="$t('company.invitation.inviteNew')"
          size="x-large"
          class="company-member-invitation__invite-button"
        />
      </div>
    </template>

    <template #content>
      <invitation-token-dropdown-content />
    </template>
  </a-dropdown>
</template>

<script setup lang="ts">
import InvitationTokenDropdownContent from './dropdown/InvitationTokenDropdownContent.vue'
</script>

<style scoped lang="scss">
.company-member-invitation {
  &__invite {
    display: flex;
    align-items: flex-end;
  }
}
</style>
