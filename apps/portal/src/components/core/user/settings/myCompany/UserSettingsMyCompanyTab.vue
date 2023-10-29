<template>
  <div class="user-settings-my-company-tab">
    <div class="user-settings-my-company-tab__content">
      <template v-if="!userStore.hasCompany">
        <join-company-section
          v-if="!showRegistrationForm"
          @show-registration-form="handleShowRegistrationForm"
        />

        <register-company v-else @cancel="handleShowRegistrationForm(false)" />
      </template>

      <my-company-section v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/stores/user/useUserStore'
import JoinCompanySection from '@/components/core/user/settings/myCompany/sections/JoinCompanySection.vue'
import MyCompanySection from '@/components/core/user/settings/myCompany/sections/MyCompanySection.vue'
import RegisterCompany from '@/components/core/company/register/RegisterCompany.vue'

// Variables
const userStore = useUserStore()
const showRegistrationForm = ref(false)

// Methods
const handleShowRegistrationForm = (value: boolean) => {
  showRegistrationForm.value = value
}
</script>

<style scoped lang="scss">
.user-settings-my-company-tab {
  &__content {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-50;
    max-width: 1200px;

    &__register-wrapper {
      display: flex;
      gap: $global-spacing-50;
    }
  }
}
</style>
