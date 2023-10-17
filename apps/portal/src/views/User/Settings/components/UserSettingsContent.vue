<template>
  <div class="user-settings-content">
    <div class="user-settings-content__profile">
      <img :src="userImg" :alt="userImgAlt" class="user-settings-content__profile-image" />

      <div class="user-settings-content__profile-name">
        <h2>{{ firstName }} {{ lastName }}</h2>
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
  userImg: {
    type: String,
    required: true
  },
  userImgAlt: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
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
  birthDate: {
    type: String,
    required: true
  },
  sex: {
    type: String,
    required: true
  }
})
</script>

<style scoped lang="scss">
.user-settings-content {
  padding: $global-spacing-100;
  display: flex;
  flex-direction: column;

  &__profile,
  &__profile-name {
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
    padding: $global-spacing-100;
  }
}
</style>
