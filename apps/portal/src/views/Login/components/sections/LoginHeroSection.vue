<template>
  <Transition type="animation" name="slide">
    <div class="login-hero-section">
      <div class="login-hero-section__top">
        <span v-text="$t('auth.slogan.welcome')" />
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.login-hero-section {
  $self: &;

  display: flex;
  flex-direction: column;

  width: 50%;
  height: 100%;
  padding: 0 $global-spacing-70;

  background: var(--primary-gradient);
  background-size: 400% 400%;
  border-radius: $global-border-radius-20 0 0 $global-border-radius-20;

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
    transform: translateY(25%);

    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    font-size: 60px;
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
