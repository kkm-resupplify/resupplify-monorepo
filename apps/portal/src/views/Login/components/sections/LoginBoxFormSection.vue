<template>
  <div class="login-box-form-section">
    <v-form class="login-box-form-section__form" @submit="handleFormSubmit">
      <m-text-field
        name="email"
        input-type="email"
        :label="$t('auth.form.emailAddress')"
        :placeholder="$t('auth.form.emailAddressPlaceholder')"
        autocomplete="username"
        rules="required|email"
      />

      <m-text-field
        name="password"
        input-type="password"
        :label="$t('auth.form.password')"
        :placeholder="$t('auth.form.passwordPlaceholder')"
        autocomplete="new-password"
        rules="required|min:8|max:32"
        append-icon-on="visibility"
        append-icon-off="visibility_off"
      />

      <m-text-field
        name="passwordConfirmation"
        input-type="password"
        :label="$t('auth.form.confirmPassword')"
        :placeholder="$t('auth.form.confirmPasswordPlaceholder')"
        autocomplete="new-password"
        rules="required|confirmed:@password"
        append-icon-on="visibility"
        append-icon-off="visibility_off"
      />

      <a-button text="Log in" size="x-large" type="submit" />
    </v-form>
    <div class="login-box-form-section__footer">
      <a-link link="/password/reset" text="Forgot password?" size="xl" />
      <div class="login-box-form-section__footer--sign-up">
        <p>Don't have an account?</p>
        <a-link link="/register" text="Sign up" size="xl" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AuthService from '@/services/auth/AuthService'
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
.login-box-form-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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

  @media (#{map-get($screen-breakpoints, 'md-and-up')}) {
    flex: 1 0 0;
    align-self: stretch;
  }
}
</style>
