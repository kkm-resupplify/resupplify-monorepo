<template>
  <div class="user-settings-content">
    <div class="user-settings-content__profile">
      <img :src="logo" :alt="logoAlt" class="user-settings-content__profile-image" />

      <div class="user-settings-content__profile-name">
        <h2>{{ name }}</h2>
      </div>
    </div>
    <div class="user-settings-content__data">
      <a-title :header="$t('auth.userDetails.email')" :sub-header="email" />

      <a-title :header="$t('auth.userDetails.phoneNumber')" :sub-header="phoneNumber" />

      <a-title :header="$t('auth.userDetails.birthDate')" :sub-header="birthDate" />

      <a-title :header="$t('auth.userDetails.sex')" :sub-header="sex" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    externalWebsite: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    logoAlt: {
        type: String,
        required: true
    },
    tin: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    companyCategory: {
        type: String,
        required: true
    }
})
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
