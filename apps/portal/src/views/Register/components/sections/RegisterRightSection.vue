<template>
  <div class="register-right-section">
    <v-form class="register-right-section__form" @submit="handleFormSubmit">
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
      />

      <m-text-field
        name="passwordConfirmation"
        input-type="password"
        :label="$t('auth.form.confirmPassword')"
        :placeholder="$t('auth.form.confirmPasswordPlaceholder')"
        autocomplete="new-password"
        rules="required|confirmed:@password"
      />

      <a-button
        class="register-right-section__form-submit"
        text="Register"
        type="submit"
        size="x-large"
      />
    </v-form>

    <register-right-section-footer />
  </div>
</template>

<script setup lang="ts">
import RegisterRightSectionFooter from './items/RegisterRightSectionFooter.vue'
import AuthService from '@/services/auth/AuthService'

// Methods
const handleFormSubmit = (v: any) => {
  AuthService.register({ ...v })
}
</script>

<style lang="scss" scoped>
.register-right-section {
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
    margin: $global-spacing-40 0;
  }
}
</style>
