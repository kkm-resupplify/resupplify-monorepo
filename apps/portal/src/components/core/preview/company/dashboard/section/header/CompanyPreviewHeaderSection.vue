<template>
  <a-panel-section class="company-preview-header-section">
    <div class="company-preview-header-section__wrapper">
      <a-image
        :width="120"
        :height="120"
        :alt="$t('common.offer.list.item.imageAlt')"
        variant="rounded"
      />
      <div class="company-preview-header-section__info">
        <a-title
          title="Company name"
          size="x-large"
          class="company-preview-header-section__info-title"
        />

        <a-title
          :title="$t('company.preview.email')"
          subtitle="company email"
          variant="horizontal"
          append-colon
          class="company-preview-header-section__info-title"
        />

        <a-title
          :title="$t('company.preview.phone')"
          subtitle="phone number"
          variant="horizontal"
          append-colon
          class="company-preview-header-section__info-title"
        />

        <a-title
          :title="$t('company.preview.address')"
          subtitle="address"
          variant="horizontal"
          append-colon
          class="company-preview-header-section__info-title"
        />
      </div>
    </div>
  </a-panel-section>
</template>

<style scoped lang="scss">
.company-preview-header-section {
  white-space: nowrap;

  &__wrapper {
    display: flex;
    gap: $global-spacing-90;
    padding: $global-spacing-30;
  }

  &__info {
    display: flex;
    flex-direction: column;
  }

  &__info-title {
    width: max-content;
  }
}
</style>
