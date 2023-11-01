<template>
  <div class="user-details-form">
    <o-form class="user-details-form__form" :submit-callback="handleFormSubmit">
      <template #body>
        <h1
          class="user-details-form__form--header"
          v-text="$t('settings.profile.details.enterUserDetailsTitle')"
        />

        <div class="user-details-form__form--inputs-wrapper">
          <m-text-field
            name="firstName"
            input-type="text"
            :label="$t('settings.profile.details.firstName')"
            :placeholder="$t('settings.profile.details.firstNamePlaceholder')"
            autocomplete="given-name"
            rules="required"
            :value="userDetails?.firstName"
            class="user-details-form__text-field"
          />

          <m-text-field
            name="lastName"
            input-type="text"
            :label="$t('settings.profile.details.lastName')"
            :placeholder="$t('settings.profile.details.lastNamePlaceholder')"
            autocomplete="family-name"
            rules="required"
            :value="userDetails?.lastName"
            class="user-details-form__text-field"
          />

          <m-text-field
            name="phoneNumber"
            input-type="tel"
            :label="$t('settings.profile.details.phoneNumber')"
            :placeholder="$t('settings.profile.details.phoneNumberPlaceholder')"
            autocomplete="tel"
            :rules="{ regex: /^(?:\+48)?[1-9]\d{8}$/ }"
            :value="userDetails?.phoneNumber"
            class="user-details-form__text-field"
          />

          <m-text-field
            name="birthDate"
            input-type="date"
            :label="$t('settings.profile.details.birthDate')"
            autocomplete="bday"
            rules="required"
            :value="birthDateYearFormat"
            class="user-details-form__text-field"
          />

          <m-select
            name="sex"
            :label="$t('settings.profile.details.sex')"
            :options="genderOptions"
            :placeholder="$t('settings.profile.details.genderPlaceholder')"
            rules="required"
            :value="userDetails?.sex"
            class="user-details-form__select"
            variant="sharp"
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
import { useUserStore } from '@/stores/user/useUserStore'
import { DateTime } from 'luxon'

// Interfaces
interface UserDetailsFormData {
  firstName: string
  lastName: string
  phoneNumber: string
  birthDate: string
  sex: string
}

// Variables
const { t } = useI18n()

const genderOptions = computed(() => [
  {
    id: t('settings.profile.details.gender.male'),
    text: t('settings.profile.details.gender.male')
  },
  {
    id: t('settings.profile.details.gender.female'),
    text: t('settings.profile.details.gender.female')
  },
  {
    id: t('settings.profile.details.gender.preferNot'),
    text: t('settings.profile.details.gender.preferNot')
  }
])

const userDetails = useUserStore().getUserDetails

// Transforming date to YYYY-mm-dd format
// Computed
const birthDateYearFormat = computed(() => {
  return userDetails?.birthDate
    ? DateTime.fromFormat(userDetails.birthDate, 'dd-MM-yyyy').toFormat('yyyy-MM-dd')
    : null
})

// Methods
const handleFormSubmit = async (formData: UserDetailsFormData) => {
  if (userDetails === null) await UserDetailsService.saveUserDetails(formData)
  else await UserDetailsService.editUserDetails(formData)
}
</script>

<style scoped lang="scss">
.user-details-form {
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
