<template>
  <div class="user-settings-my-company-tab">
    <div class="user-settings-my-company-tab__content">
      <template v-if="!userStore.hasCompany">
        <template v-if="!showRegistrationForm">
          <join-company-section />

          <div class="">
            <a-title
              size="large"
              title="Register company"
              subtitle="You might also want to register you company. In that case, you can begin the registration process by clicking the button below - you may cancel it at any time until."
            />

            <a-button
              variant="primary"
              size="x-large"
              text="Begin"
              @click="handleShowRegistrationForm"
            />
          </div>
        </template>

        <register-company v-else />
      </template>

      <my-company-section v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useUserStore } from '@/stores/user/useUserStore'
import JoinCompanySection from '@/components/core/user/settings/myCompany/sections/JoinCompanySection.vue'
import MyCompanySection from '@/components/core/user/settings/myCompany/sections/MyCompanySection.vue'
import RegisterCompany from '@/components/core/company/register/RegisterCompany.vue'

// Variables
const userStore = useUserStore()
const showRegistrationForm = ref(false)

// Methods
const handleShowRegistrationForm = () => {
  showRegistrationForm.value = true
}
</script>

<style scoped lang="scss">
.user-settings-my-company-tab {
  &__content {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-50;
  }
}
</style>
