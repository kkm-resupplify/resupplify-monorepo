<template>
  <div class="offers-filters">
    <m-text-field
      class="offer-filters__name-search"
      name="name"
      :placeholder="$t('offers.filters.namePlaceholder')"
      :validate="false"
      append-icon-on="close"
    />

    <m-select
      name="categoryId"
      :placeholder="$t('offers.filters.categoryPlaceholder')"
      :validate="false"
    />

    <m-select
      name="subcategoryId"
      :placeholder="$t('offers.filters.subcategoryPlaceholder')"
      :validate="false"
    />
  </div>
</template>

<style scoped lang="scss">
.offers-filters {
  display: flex;
}
</style>
