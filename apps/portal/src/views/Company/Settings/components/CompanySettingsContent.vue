<template>
  <div class="user-settings-content">
    <div class="user-settings-content__profile">
      <div class="user-settings-content__company-name">
        <!-- <h2>{{ company.name }}</h2> -->
      </div>
    </div>
    <div class="user-settings-content__data">
      <a-title :header="$t('companyDetails.address')" sub-header="name" />
      <div v-for="(item, index) in generalStepData" :key="index">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRegisterCompanyStore } from '../../../../stores/company/useRegisterCompanyStore'

const registerCompanyStore = useRegisterCompanyStore().registerCompanyFormData

const { generalStepData, detailsStepData, contactInfoStepData } = registerCompanyStore
</script>

<style scoped lang="scss">
.user-settings-content {
  display: flex;
  flex-direction: column;
  padding: $global-spacing-100;

  &__profile,
  &__profile-name,
  &__data {
    display: flex;
    gap: $global-spacing-100;
  }

  &__profile {
    align-items: center;
  }

  &__profile-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  &__data {
    flex-direction: column;
    margin-top: $global-spacing-70;
    padding: $global-spacing-100;
  }
}
</style>
