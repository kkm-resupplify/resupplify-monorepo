<template>
  <div class="user-details-form">
    <v-form class="user-details-form__form">
      <m-text-field
        name="first-name"
        input-type="text"
        :label="$t('auth.userDetails.firstName')"
        :placeholder="$t('auth.userDetails.firstNamePlaceholder')"
        rules="required"
        class="login-box-form-section__text-field"
      />
      <m-text-field
        name="last-name"
        input-type="text"
        :label="$t('auth.userDetails.lastName')"
        :placeholder="$t('auth.userDetails.lastNamePlaceholder')"
        rules="required"
        class="login-box-form-section__text-field"
      />
      <m-text-field
        name="phone-number"
        input-type="tel"
        :label="$t('auth.userDetails.phoneNumber')"
        :placeholder="$t('auth.userDetails.phoneNumberPlaceholder')"
        :rules="{ regex: /^(?:\+48)?[1-9]\d{8}$/ }"
        class="login-box-form-section__text-field"
      />
      <m-text-field
        name="birth-date"
        input-type="date"
        :label="$t('auth.userDetails.birthDate')"
        :placeholder="$t('auth.userDetails.birthDatePlaceholder')"
        rules="required"
        class="login-box-form-section__text-field"
      />
      <div class="user-details-form__form--buttons">
        <a-button text="Previous" size="x-large" type="submit" outlined />
        <a-button text="Next" size="x-large" type="submit" />
      </div>
    </v-form>
  </div>
</template>
<script setup lang="ts"></script>
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
