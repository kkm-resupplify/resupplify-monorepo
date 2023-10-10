<template>
  <m-stepper-step-content class="register-company-general-step">
    <template #body>
      <v-form class="register-company-general-step__body">
        <m-text-field
          name="name"
          rules="required|min:3"
          :label="$t('company.register.form.companyNameLabel')"
          :placeholder="$t('company.register.form.companyNamePlaceholder')"
        />

        <m-text-field
          name="countryId"
          rules="required"
          :label="$t('company.register.form.companyCountryLabel')"
          :placeholder="$t('company.register.form.companyCountryPlaceholder')"
        />

        <m-text-field
          name="description"
          rules="required|min:32"
          :label="$t('company.register.form.companyDescriptionLabel')"
          :placeholder="$t('company.register.form.companyDescriptionPlaceholder')"
        />

        <m-text-field
          name="short_description"
          rules="required|min:16"
          :label="$t('company.register.form.companyShortDescriptionLabel')"
          :placeholder="$t('company.register.form.companyShortDescriptionPlaceholder')"
        />
      </v-form>
    </template>

    <template #footer>Melo</template>
  </m-stepper-step-content>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.register-company-general-step {
  &__body {
    display: flex;
    flex-direction: column;
  }
}
</style>
