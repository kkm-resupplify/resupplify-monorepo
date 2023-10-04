<template>
  <Transition type="animation" name="slide">
    <div class="login-box-welcome-section">
      <div class="login-box-welcome-section__top">
        <span v-text="$t('auth.slogan.welcome')" />
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.login-box-welcome-section {
  display: flex;
  flex-direction: column;
  align-self: stretch;

  box-sizing: border-box;
  margin-bottom: $global-spacing-70;
  padding-inline: $global-spacing-40;

  background: var(--primary-gradient);
  background-size: 400% 400%;
  border-radius: $global-border-radius-20 $global-border-radius-20 0 0;

  animation: gradient-movement 15s ease infinite;

  &:hover {
    :deep(span) {
      transform: translateX(10px);
      transition: transform 1.5s ease-out;
    }
  }

  :deep(span) {
    transform: translateX(0);

    align-self: stretch;

    font-family: Syne, sans-serif;
    font-size: 64px;
    font-weight: 400;
    font-style: normal;
    line-height: normal;
    color: $themes-dark-text-primary;
    color: var(--themes-light-background-primary-default, #f5f5f5);

    transition: transform 0.9s ease-in;
  }

  &__top {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    justify-content: center;

    height: 298px;

    text-align: center;
  }

  @include respond-to('md-and-up') {
    width: 50%;
    margin-bottom: 0;
    padding-left: $global-spacing-70;

    text-align: left;

    border-radius: $global-border-radius-20 0 0 $global-border-radius-20;

    .login-box-welcome-section__top {
      text-align: left;
    }
  }
}

@keyframes gradient-movement {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>
