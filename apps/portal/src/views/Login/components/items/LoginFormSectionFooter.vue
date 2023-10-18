<template>
  <div class="login-form-section-footer">
    <a-link
      link="/password/reset"
      :text="$t('auth.forgotPassword')"
      text-color="info"
      size="medium"
      class="login-form-section-footer__forgot-password"
    />
    <br />

    <i18n-t class="login-form-section-footer__sign-up" keypath="auth.newUser" tag="span">
      <template #signup>
        <a-link link="/register" :text="$t('auth.signup')" text-color="info" size="medium" />
      </template>
    </i18n-t>
  </div>
</template>

<style scoped lang="scss">
.login-form-section-footer {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-20;
  align-items: center;
  justify-content: center;

  text-align: center;

  &__forgot-password {
    font-size: $global-font-size-50;
  }

  &__sign-up {
    align-self: flex-end;
    font-size: $global-font-size-60;
  }
}
</style>
