<template>
  <div class="register-hero-section-footer">
    <i18n-t class="register-hero-section-footer__login" keypath="auth.alreadyRegistered" tag="span">
      <template #login>
        <a-link link="login" :text="$t('auth.login')" text-color="info" size="medium" /> <br />
      </template>
    </i18n-t>

    <i18n-t
      class="register-hero-section-footer__agreement"
      keypath="auth.registerAgreement"
      tag="span"
    >
      <template #tos>
        <a-link link="tos" :text="$t('auth.tos')" text-color="info" />

        <br />
      </template>

      <template #privacyPolicy>
        <a-link link="privacy-policy" text-color="info" :text="$t('auth.privacyPolicy')" />
      </template>
    </i18n-t>
  </div>
</template>

<style scoped lang="scss">
.register-hero-section-footer {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-50;
  align-items: center;
  justify-content: center;

  text-align: center;

  &__login {
    font-size: $global-font-size-40;
  }

  &__agreement {
    align-self: flex-end;
    font-size: $global-font-size-20;
  }
}
</style>
