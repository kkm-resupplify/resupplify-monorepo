<template>
  <div class="register-form-section">
    <v-form class="register-form-section__form" @submit="handleFormSubmit">
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
        rules="required|min:8|max:32"
        append-icon-on="visibility"
        append-icon-off="visibility_off"
        variant="rounded"
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
        variant="rounded"
      />

      <a-button
        class="register-form-section__form-submit"
        type="submit"
        size="x-large"
        :text="$t('auth.signup')"
      />
    </v-form>

    <register-form-section-footer />
  </div>
</template>

<script setup lang="ts">
import RegisterFormSectionFooter from './items/RegisterFormSectionFooter.vue'
import AuthService from '@/services/auth/AuthService'
import { useRouter } from 'vue-router'

// Interfaces
interface RegisterFormData {
  email: string
  password: string
  passwrodConfirmation: string
}

// Variables
const router = useRouter()

// Methods
const handleFormSubmit = async (formData: RegisterFormData) => {
  await AuthService.register(formData)
}
</script>

<style lang="scss" scoped>
.register-form-section {
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
