<template>
  <div class="register-left-section">
    <div class="register-left-section__form">
      <a-text-field
        input-type="email"
        :label="$t('auth.form.emailAddress')"
        :placeholder="$t('auth.form.emailAddressPlaceholder')"
      />

      <a-text-field
        input-type="email"
        :label="$t('auth.form.password')"
        :placeholder="$t('auth.form.passwordPlaceholder')"
      />

      <a-text-field
        input-type="email"
        :label="$t('auth.form.confirmPassword')"
        :placeholder="$t('auth.form.confirmPasswordPlaceholder')"
      />
    </div>

    <div class="register-left-section__footer">
      <div class="register-left-section__footer-tos"></div>

      <div class="register-left-section__footer-login"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
