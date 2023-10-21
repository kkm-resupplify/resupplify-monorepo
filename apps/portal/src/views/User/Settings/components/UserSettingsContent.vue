<template>
  <div class="user-settings-content">
    <div class="user-settings-content__profile">
      <img v-if="userImg" :src="userImg" :alt="userImgAlt" class="user-settings-content__profile-image" />

      <div v-if="firstName && lastName" class="user-settings-content__profile-name">
        <h2>{{ firstName }} {{ lastName }}</h2>
      </div>
    </div>
    <div class="user-settings-content__data">
      <a-title v-if="email" :header="$t('user.details.email')" :sub-header="email" />

      <a-title v-if="phoneNumber" :header="$t('user.details.phoneNumber')" :sub-header="phoneNumber" />

      <a-title v-if="birthDate" :header="$t('user.details.birthDate')" :sub-header="birthDate" />

      <a-title v-if="sex" :header="$t('user.details.sex')" :sub-header="sex" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  userImg: String,
  userImgAlt: String,
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  birthDate: String,
  sex: String
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
