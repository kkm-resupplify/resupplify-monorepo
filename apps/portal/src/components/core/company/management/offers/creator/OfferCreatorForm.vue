<template>
  <o-form class="offer-creator-form">
    <template #body>
      <div class="offer-creator-form__body">
        <a-title :title="$t('company.management.offer.creator.addOffer')" size="x-large" />

        <m-select
          name="product"
          :label="$t('company.management.offer.creator.selectProductLabel')"
          :placeholder="$t('company.management.offer.creator.selectProductPlaceholder')"
          rules="required"
        />

        <m-text-field
          name="quantity"
          input-type="number"
          :label="$t('company.management.offer.creator.selectQuantityLabel')"
          :placeholder="$t('company.management.offer.creator.selectQuantityPlaceholder')"
          rules="required"
        />

        <m-text-field
          name="netPrice"
          input-type="number"
          :label="$t('company.management.offer.creator.selectNetPriceLabel')"
          :placeholder="$t('company.management.offer.creator.selectNetPricePlaceholder')"
          rules="required"
        />
      </div>
    </template>

    <template #footer>
      <a-button
        class="offer-creator-form__button"
        button-type="submit"
        :text="$t('global.add')"
        size="x-large"
      />
    </template>
  </o-form>
</template>

<style scoped lang="scss">
.offer-creator-form {
  padding: $global-spacing-20;

  &__body {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-50;
    min-width: 500px;
  }

  &__button {
    width: 100%;
    margin-top: $global-spacing-30;
  }
}
</style>
