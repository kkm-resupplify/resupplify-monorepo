<template>
  <div class="user-details-form">
    <v-form class="user-details-form__form">
      <m-text-field
        name="company-name"
        input-type="text"
        :label="$t('auth.userDetails.companyName')"
        :placeholder="$t('auth.userDetails.companyNamePlaceholder')"
        rules="required"
        class="login-box-form-section__text-field"
      />
      <m-text-field
        name="company-slug"
        input-type="text"
        :label="$t('auth.userDetails.companySlug')"
        :placeholder="$t('auth.userDetails.companySlugPlaceholder')"
        rules="required"
        class="login-box-form-section__text-field"
      />
      <m-text-field
        name="company-description"
        input-type="text"
        :label="$t('auth.userDetails.companySlug')"
        :placeholder="$t('auth.userDetails.companySlugPlaceholder')"
        rules="required"
        class="login-box-form-section__text-field"
      />
    </v-form>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.user-details-form {
  @include respond-to('md-and-up') {
    flex: 1 0 0;
    align-self: stretch;
  }

  display: flex;
  flex-direction: column;
  gap: $global-spacing-100;
  align-items: center;
  justify-content: center;

  &__text-field {
    max-width: 292px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-100;
    align-items: center;
    justify-content: center;
  }
}
</style>
