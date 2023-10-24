<template>
  <div class="my-company-section">
    <div class="my-company-section__header">
      <a-title
        size="x-large"
        title="My company"
        subtitle="Settings and information related to the company you are a member of."
      />

      <div v-if="userStore.getCompany?.details.logo">
        <img
          :src="companyAvatarUrl"
          alt="Company logo"
          class="my-company-section__company-avatar"
        />
      </div>
      <div v-else>Image placholder</div>
    </div>

    <div v-if="userStore.getCompany" class="my-company-section__content">
      <company-data-block :company="userStore.getCompany" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useUserStore } from '@/stores/user/useUserStore'
import CompanyDataBlock from '@/components/core/company/data/CompanyDataBlock.vue'

// Variables
const userStore = useUserStore()

// Computed
const companyAvatarUrl = computed(() => {
  return userStore.getCompany?.details.logo ?? ''
})
</script>

<style lang="scss" scoped>
.my-company-section {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-50;

  &__company-avatar {
    max-width: 200px;
    max-height: 200px;
    border: 2px solid var(--secondary-2);
    border-radius: $global-border-radius-10;
  }
}
</style>
