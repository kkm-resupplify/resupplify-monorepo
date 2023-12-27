<template>
  <o-form class="companies-filters">
    <template #body>
      <div class="companies-filters__inputs">
        <m-text-field
          name="name"
          :label="$t('companies.filters.nameLabel')"
          :placeholder="$t('companies.filters.namePlaceholder')"
          :validate="false"
        />

        <m-select
          name="categoryId"
          :label="$t('companies.filters.categoryLabel')"
          :placeholder="$t('companies.filters.categoryPlaceholder')"
          :validate="false"
        />
      </div>
    </template>

    <template #footer>
      <div class="companies-filters__buttons">
        <a-button button-type="submit" :text="$t('global.search')" size="x-large" />

        <a-button :text="$t('global.reset')" size="x-large" />
      </div>
    </template>
  </o-form>
</template>

<style scoped lang="scss">
.companies-filters {
  &__inputs {
    display: flex;
    gap: $global-spacing-30;
  }

  &__buttons {
    display: flex;
    gap: $global-spacing-30;
  }
}
</style>
