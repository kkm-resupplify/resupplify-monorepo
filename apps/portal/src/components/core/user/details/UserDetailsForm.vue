<template>
  <o-form :submit-callback="handleFormSubmit">
    <template #body>
      <div class="user-details-form__body">
        <a-title :title="$t('settings.profile.details.enterUserDetailsTitle')" size="large" />

        <div class="user-details-form__inputs-wrapper">
          <m-text-field
            name="firstName"
            input-type="text"
            :label="$t('settings.profile.details.firstName')"
            :placeholder="$t('settings.profile.details.firstNamePlaceholder')"
            autocomplete="given-name"
            rules="required"
            :value="userDetails?.firstName"
          />

          <m-text-field
            name="lastName"
            input-type="text"
            :label="$t('settings.profile.details.lastName')"
            :placeholder="$t('settings.profile.details.lastNamePlaceholder')"
            autocomplete="family-name"
            rules="required"
            :value="userDetails?.lastName"
          />

          <m-text-field
            name="phoneNumber"
            input-type="tel"
            :label="$t('settings.profile.details.phoneNumber')"
            :placeholder="$t('settings.profile.details.phoneNumberPlaceholder')"
            autocomplete="tel"
            :rules="{ regex: phoneNumber }"
            :value="userDetails?.phoneNumber"
          />

          <m-text-field
            name="birthDate"
            input-type="date"
            :label="$t('settings.profile.details.birthDate')"
            autocomplete="bday"
            rules="required"
            :value="birthDateYearFormat"
          />

          <m-select
            name="sex"
            :label="$t('settings.profile.details.sex')"
            :options="genderOptions"
            :placeholder="$t('settings.profile.details.genderPlaceholder')"
            rules="required"
            :value="userDetails?.sex"
            class="user-details-form__select"
          />

          <a-button
            :text="$t('global.save')"
            size="x-large"
            type="submit"
            class="user-details-form__button"
          />
        </div>
      </div>
    </template>
  </o-form>
</template>
<script setup lang="ts">
import UserDetailsService from '@/services/user/UserDetailsService'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { useUserStore } from '@/stores/user/useUserStore'
import { DateTime } from 'luxon'
import { phoneNumber } from '@/plugins/vee-validate/veeValidateRulesPlugin'

// Interfaces
interface UserDetailsFormData {
  firstName: string
  lastName: string
  phoneNumber: string
  birthDate: string
  sex: string
}

// Emits
const emits = defineEmits(['updated'])

// Variables
const { t } = useI18n()

const userStore = useUserStore()
const userDetails = userStore.getUserDetails

// Computed
const birthDateYearFormat = computed(() => {
  return userDetails?.birthDate ? DateTime.fromISO(userDetails.birthDate).toISO() : null
})

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

// Methods
const handleFormSubmit = async (formData: UserDetailsFormData) => {
  const method = userStore.hasUserDetails ? 'editUserDetails' : 'saveUserDetails'

  const { success } = await UserDetailsService[method](formData)
  if (success) emits('updated')
}
</script>

<style scoped lang="scss">
.user-details-form {
  &__body {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-30;
  }

  &__select {
    width: 100%;
  }

  &__inputs-wrapper {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-50;
    align-items: center;
    justify-content: center;
  }

  &__form-header {
    margin-left: $global-spacing-100;
  }

  &__button {
    align-self: center;
    width: min-content;
    margin-top: $global-spacing-50;
  }
}
</style>
