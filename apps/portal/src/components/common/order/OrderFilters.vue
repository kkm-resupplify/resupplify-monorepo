<template>
  <o-form class="order-filters">
    <template #body>
      <div class="order-filters__inputs">
        <m-text-field
          name="name"
          :label="$t('common.order.filters.nameLabel')"
          :placeholder="$t('common.order.filters.namePlaceholder')"
          :validate="false"
        />

        <m-select
          name="categoryId"
          :label="$t('common.order.filters.categoryLabel')"
          :placeholder="$t('common.order.filters.categoryPlaceholder')"
          :validate="false"
        />

        <m-select
          ref="subcategoryRef"
          name="subcategoryId"
          :label="$t('common.order.filters.subcategoryLabel')"
          :placeholder="$t('common.order.filters.subcategoryPlaceholder')"
          :validate="false"
        />

        <m-select
          name="endedAt"
          :label="$t('common.order.filters.statusLabel')"
          :placeholder="$t('common.order.filters.statusPlaceholder')"
          :validate="false"
        />
      </div>
    </template>

    <template #footer>
      <div class="order-filters__buttons">
        <a-button button-type="submit" :text="$t('global.search')" size="x-large" />

        <a-button :text="$t('global.reset')" size="x-large" />
      </div>
    </template>
  </o-form>
</template>

<style scoped lang="scss">
.order-filters {
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
