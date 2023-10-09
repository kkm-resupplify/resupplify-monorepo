<template>
  <div class="user-details-form">
    <v-form class="user-details-form__form" @submit="handleFormSubmit">
      <m-text-field
        name="firstName"
        input-type="text"
        :label="$t('auth.userDetails.firstName')"
        :placeholder="$t('auth.userDetails.firstNamePlaceholder')"
        rules="required"
        class="login-box-form-section__text-field"
      />
      <m-text-field
        name="lastName"
        input-type="text"
        :label="$t('auth.userDetails.lastName')"
        :placeholder="$t('auth.userDetails.lastNamePlaceholder')"
        rules="required"
        class="login-box-form-section__text-field"
      />
      <m-text-field
        name="phoneNumber"
        input-type="tel"
        :label="$t('auth.userDetails.phoneNumber')"
        :placeholder="$t('auth.userDetails.phoneNumberPlaceholder')"
        :rules="{ regex: /^(?:\+48)?[1-9]\d{8}$/ }"
        class="login-box-form-section__text-field"
      />
      <m-text-field
        name="birthDate"
        input-type="date"
        :label="$t('auth.userDetails.birthDate')"
        rules="required"
        class="login-box-form-section__text-field"
      />
      <a-button :text="$t('global.save')" size="x-large" type="submit" />
    </v-form>
  </div>
</template>
<script setup lang="ts">
import UserDetailsService from '@/services/user/UserDetailsService'
interface UserDetailsFormData {
  firstName: string
  lastName: string
  phoneNumber: string
  birthDate: string
}

const handleFormSubmit = async (formData: UserDetailsFormData) => {
  await UserDetailsService.add(formData)
}
</script>
<style scoped lang="scss">
.user-details-form {
  @include respond-to('md-and-up') {
    flex: 1 0 0;
    align-self: stretch;
  }

  display: flex;
  flex-direction: column;
  gap: $global-spacing-100;
  align-items: center;
  justify-content: center;

  &__text-field {
    max-width: 292px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-100;
    align-items: center;
    justify-content: center;

    &--buttons {
      display: flex;
      gap: $global-spacing-100;
    }
  }
}
</style>
