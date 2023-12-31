<template>
  <div class="my-company-section">
    <div class="my-company-section__header">
      <a-title
        size="x-large"
        :title="$t('settings.myCompany.title')"
        :subtitle="$t('settings.myCompany.subtitle')"
      />
    </div>

    <div v-if="userStore.getCompany" class="my-company-section__content">
      <template v-if="editDetails">
        <register-company />
      </template>

      <template v-else>
        <company-data-block :company="userStore.getCompany" />

        <edit-my-company-dialog :company="userStore.getCompany" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user/useUserStore'
import CompanyDataBlock from '@/components/core/company/data/CompanyDataBlock.vue'
import RegisterCompany from '@/components/core/company/register/RegisterCompany.vue'
import { ref } from 'vue'
import EditMyCompanyDialog from '../dialog/EditMyCompanyDialog.vue'

// Variables
const userStore = useUserStore()
const editDetails = ref(false)
</script>

<style lang="scss" scoped>
.my-company-section {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-50;

  &__button {
    width: 100%;
    margin-top: $global-spacing-50;
  }
}
</style>
