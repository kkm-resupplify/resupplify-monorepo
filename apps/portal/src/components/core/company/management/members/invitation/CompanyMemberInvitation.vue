<template>
  <div class="company-member-invitation">
    <a-dropdown class="company-member-invitation__dropdown">
      <template #activator>
        <div class="company-member-invitation__invite">
          <a-button
            :text="$t('company.invitation.inviteNew')"
            size="x-large"
            class="company-member-invitation__invite-button"
            @click="handleInvitationCode"
          />
        </div>
      </template>

      <template #content>
        <invitation-token-dropdown-content />
      </template>
    </a-dropdown>
  </div>

  <span :v-text="invitationCode" />
</template>

<script setup lang="ts">
import InvitationTokenDropdownContent from './dropdown/InvitationTokenDropdownContent.vue'
import { ref, computed } from 'vue'

const invitationCode = ref<string>()

// Methods
const handleInvitationCode = (newInvitationCode: string) => {
  invitationCode.value = newInvitationCode
}
</script>

<style scoped lang="scss">
.company-member-invitation {
  margin-left: auto;

  &__content {
    position: relative;
  }

  &__invite {
    display: flex;
    align-items: flex-end;
  }
}
</style>
