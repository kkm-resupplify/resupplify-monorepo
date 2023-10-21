<template>
  <div class="user-details-form">
    <o-form class="user-details-form__form" :submit-callback="handleFormSubmit">
      <template #body>
        <h1 v-text="$t('user.details.enterUserDetailsTitle')" />
        <m-text-field
          name="firstName"
          input-type="text"
          :label="$t('user.details.firstName')"
          :placeholder="$t('user.details.firstNamePlaceholder')"
          autocomplete="given-name"
          rules="required"
          class="user-details-form__text-field"
        />

        <m-text-field
          name="lastName"
          input-type="text"
          :label="$t('user.details.lastName')"
          :placeholder="$t('user.details.lastNamePlaceholder')"
          autocomplete="family-name"
          rules="required"
          class="user-details-form__text-field"
        />

        <m-text-field
          name="phoneNumber"
          input-type="tel"
          :label="$t('user.details.phoneNumber')"
          :placeholder="$t('user.details.phoneNumberPlaceholder')"
          autocomplete="tel"
          :rules="{ regex: /^(?:\+48)?[1-9]\d{8}$/ }"
          class="user-details-form__text-field"
        />

        <m-text-field
          name="birthDate"
          input-type="date"
          :label="$t('user.details.birthDate')"
          autocomplete="bday"
          rules="required"
          class="user-details-form__text-field"
        />

        <m-select
          name="sex"
          :label="$t('user.details.sex')"
          :options="genderOptions"
          :placeholder="$t('user.details.genderPlaceholder')"
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
import { computed } from 'vue'

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
const genderOptions = computed(() => [
  { id: 1, text: t('user.details.gender.male') },
  { id: 2, text: t('user.details.gender.female') },
  { id: 3, text: t('user.details.gender.preferNot') }
])

//Methods
const handleFormSubmit = async (formData: UserDetailsFormData) => {
  await UserDetailsService.saveUserDetails(formData)
}
</script>
<style scoped lang="scss">
@mixin boxshadow-primary-2 {
  box-shadow: #{$global-boxshadow-primary-2-x} #{$global-boxshadow-primary-2-y} #{$global-boxshadow-primary-2-blur}
    #{$global-boxshadow-primary-2-spread} #{$global-boxshadow-primary-2-color};
}

.user-details-form {
  @include respond-to('md-and-up') {
    flex: 1 0 0;
    align-self: stretch;
  }
  @include boxshadow-primary-2;

  display: flex;
  flex-direction: column;
  gap: $global-spacing-100;
  justify-content: center;

  width: 452px;
  margin-inline: auto;
  padding: $global-spacing-80;

  border-radius: $global-border-radius-10;

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
    align-self: center;
    width: min-content;
    margin-top: $global-spacing-50;
  }
}
</style>
