<template>
  <Transition type="animation" name="slide">
    <div class="register-hero-section">
      <div class="register-hero-section__top">
        <span v-text="$t('auth.slogan.createAccount')" />
      </div>

      <div class="register-hero-section__bottom">
        <span v-text="$t('auth.slogan.connectAndGrow')" />
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.register-hero-section {
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
    color: $themes-dark-text-primary;
    transition: transform 0.9s ease-in;
  }

  &__top {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    font-size: 60px;
  }

  &__bottom {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    font-size: $global-title-xx-large-font-size;
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
