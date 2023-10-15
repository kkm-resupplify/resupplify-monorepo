<template>
  <div class="user-details-form">
    <o-form class="user-details-form__form" @submit="handleFormSubmit">
      <template #body>
        <m-text-field
          name="firstName"
          input-type="text"
          :label="$t('auth.userDetails.firstName')"
          :placeholder="$t('auth.userDetails.firstNamePlaceholder')"
          autocomplete="given-name"
          rules="required"
          class="user-details-form__text-field"
        />

        <m-text-field
          name="lastName"
          input-type="text"
          :label="$t('auth.userDetails.lastName')"
          :placeholder="$t('auth.userDetails.lastNamePlaceholder')"
          autocomplete="family-name"
          rules="required"
          class="user-details-form__text-field"
        />

        <m-text-field
          name="phoneNumber"
          input-type="tel"
          :label="$t('auth.userDetails.phoneNumber')"
          :placeholder="$t('auth.userDetails.phoneNumberPlaceholder')"
          autocomplete="tel"
          :rules="{ regex: /^(?:\+48)?[1-9]\d{8}$/ }"
          class="user-details-form__text-field"
        />

        <m-text-field
          name="birthDate"
          input-type="date"
          :label="$t('auth.userDetails.birthDate')"
          autocomplete="bday"
          rules="required"
          class="user-details-form__text-field"
        />

        <m-select
          name="sex"
          :label="$t('userDetails.sex')"
          :options="genderOptions"
          :placeholder="$t('userDetails.placeholder')"
          rules="required"
          class="user-details-form__select"
        />

        <a-button
          :text="$t('global.save')"
          size="x-large"
          type="submit"
          class="user-details-form__button"
        />
      </template>
    </o-form>
  </div>
</template>
<script setup lang="ts">
import UserDetailsService from '@/services/user/UserDetailsService'
import { useI18n } from 'vue-i18n'
import { reactive } from 'vue'

//Interfaces
interface UserDetailsFormData {
  firstName: string
  lastName: string
  phoneNumber: string
  birthDate: string
  sex: string
}

//Variables
const { t } = useI18n()
const genderOptions = reactive([
  t('userDetails.gender.male'),
  t('userDetails.gender.female'),
  t('userDetails.gender.preferNot')
])

//Methods
const handleFormSubmit = async (formData: UserDetailsFormData) => {
  await UserDetailsService.saveUserDetails(formData)
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

  &__select {
    width: 100%;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-100;
    align-items: center;
    justify-content: center;
  }

  &__button {
    width: min-content;
    align-self: center;
    margin-top: $global-spacing-50;
  }
}
</style>
