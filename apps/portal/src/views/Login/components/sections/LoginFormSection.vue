<template>
  <div class="login-form-section">
    <v-form class="login-form-section__form" @submit="handleFormSubmit">
      <m-text-field
        name="email"
        input-type="email"
        :label="$t('auth.form.emailAddress')"
        :placeholder="$t('auth.form.emailAddressPlaceholder')"
        autocomplete="username"
        rules="required|email"
        class="login-form-section__text-field"
        variant="rounded"
      />

      <m-text-field
        name="password"
        input-type="password"
        :label="$t('auth.form.password')"
        :placeholder="$t('auth.form.passwordPlaceholder')"
        autocomplete="new-password"
        rules="required"
        append-icon-on="visibility"
        append-icon-off="visibility_off"
        class="login-form-section__text-field"
        variant="rounded"
      />

      <a-button text="Log in" size="x-large" type="submit" />
    </v-form>
    <login-form-section-footer />
  </div>
</template>

<script setup lang="ts">
import AuthService from '@/services/auth/AuthService'
import LoginFormSectionFooter from '../items/LoginFormSectionFooter.vue'
import { useRouter } from 'vue-router'

// Interfaces
interface LoginFormData {
  email: string
  password: string
  passwordConfirmation: string
}

// Variables
const router = useRouter()

// Methods
const handleFormSubmit = async (formData: LoginFormData) => {
  const response = await AuthService.login(formData)
  const { status } = response

  if (status == 200) router.push('/')
}
</script>

<style scoped lang="scss">
.login-form-section {
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
  }

  &__footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: $global-spacing-100;

    &--sign-up {
      display: flex;
      gap: $global-spacing-30;
      align-items: center;
    }
  }
}
</style>
