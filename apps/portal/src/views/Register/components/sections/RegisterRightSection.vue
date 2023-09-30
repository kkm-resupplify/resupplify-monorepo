<template>
  <div class="register-left-section">
    <v-form class="register-left-section__form" @submit="handleFormSubmit">
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

      <a-button text="Register" type="submit" />
    </v-form>

    <div class="register-left-section__footer">
      <div class="register-left-section__footer-tos"></div>

      <div class="register-left-section__footer-login"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Methods
const handleFormSubmit = (v: any) => {
  console.log(v)
}
</script>

<style lang="scss" scoped>
.register-left-section {
  display: flex;
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
}
</style>
