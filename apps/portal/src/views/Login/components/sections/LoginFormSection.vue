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
        variant="rounded"
      />

      <a-button
        class="login-form-section__form-submit"
        type="submit"
        size="x-large"
        :text="$t('auth.login')"
      />
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 50%;
  padding: $global-spacing-50;

  background: var(--secondary-1);
  border-radius: 0 $global-border-radius-20 $global-border-radius-20 0;

  &__form {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-40;
    align-items: center;

    width: 80%;
  }

  &__form-submit {
    margin-bottom: $global-spacing-40;
  }
}
</style>
