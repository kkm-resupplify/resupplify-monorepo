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

    <i18n-t class="register-hero-section-footer__new-user" keypath="auth.newUser" tag="span">
      <template #signup>
        <a-link link="/register" :text="$t('auth.signup')" text-color="info" size="medium" />
        <br />
      </template>
    </i18n-t>
  </div>
</template>

<style scoped lang="scss">
.login-form-section-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: $global-spacing-100;

  text-align: center;

  &__forgot-password {
    font-size: $global-font-size-50;
  }

  &__new-user {
    align-self: flex-end;
    font-size: $global-font-size-20;
  }
}
</style>
