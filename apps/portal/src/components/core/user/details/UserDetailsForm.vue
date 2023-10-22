<template>
  <div class="user-details-form">
    <o-form class="user-details-form__form" :submit-callback="handleFormSubmit">
      <template #body>
        <h1
          class="user-details-form__form--header"
          v-text="$t('user.details.enterUserDetailsTitle')"
        />

        <div class="user-details-form__form--inputs-wrapper">
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
        </div>
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
  { id: t('user.details.gender.male'), text: t('user.details.gender.male') },
  { id: t('user.details.gender.female'), text: t('user.details.gender.female') },
  { id: t('user.details.gender.preferNot'), text: t('user.details.gender.preferNot') }
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
  @include boxshadow-primary-2;

  width: 452px;
  margin-inline: auto;
  padding: $global-spacing-100;
  border-radius: $global-border-radius-10;

  &__select {
    width: 100%;
  }

  &__form--inputs-wrapper {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-50;
    align-items: center;
    justify-content: center;

    padding: $global-spacing-100;
  }

  &__form--header {
    margin-left: $global-spacing-100;
  }

  &__button {
    align-self: center;
    width: min-content;
    margin-top: $global-spacing-50;
  }
}
</style>
