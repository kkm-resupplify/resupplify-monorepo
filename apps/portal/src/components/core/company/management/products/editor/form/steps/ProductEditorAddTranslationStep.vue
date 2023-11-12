<template>
  <m-stepper-step-content>
    <template #body>
      <o-form class="product-editor-add-translation-step">
        <template #body>
          <div class="product-editor-add-translation-step__body">
            <a-title
              :title="$t('company.management.products.editor.translationTitle')"
              size="xx-large"
            />

            <m-text-field
              name="name"
              input-type="text"
              :label="$t('company.management.products.editor.productNameLabel')"
              :placeholder="$t('company.management.products.editor.productNamePlaceholder')"
            />

            <m-text-area
              name="description"
              rules="required|min:16|max:255"
              :label="$t('company.management.products.editor.productDescriptionLabel')"
              :placeholder="$t('company.management.products.editor.productDescriptionPlaceholder')"
            />
          </div>
        </template>

        <template #footer>
          <div class="product-editor-add-translation-step__buttons">
            <a-button :text="$t('global.back')" size="x-large" />

            <a-button :text="$t('global.add')" size="x-large" />
          </div>
        </template>
      </o-form>
    </template>
  </m-stepper-step-content>
</template>
<style scoped lang="scss">
.product-editor-add-translation-step {
  max-height: 350px;

  &__body {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-50;
    min-width: 500px;
  }

  &__buttons {
    display: flex;
    gap: $global-spacing-100;
    justify-content: center;
    width: 100%;
  }
}
</style>
