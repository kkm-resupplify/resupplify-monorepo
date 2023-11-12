<template>
  <m-stepper-step-content>
    <template #body>
      <o-form class="product-editor-add-information-step">
        <template #body>
          <div class="product-editor-add-information-step__body">
            <a-title
              :title="$t('company.management.products.editor.informationTitle')"
              size="xx-large"
            />

            <m-text-field
              name="name"
              input-type="text"
              :label="$t('company.management.products.editor.productNameLabel')"
              :placeholder="$t('company.management.products.editor.productNamePlaceholder')"
            />

            <m-select
              name="category"
              :label="$t('company.management.products.editor.productCategoryLabel')"
              :placeholder="$t('company.management.products.editor.productCategoryPlaceholder')"
            />

            <m-select
              name="subcategory"
              :label="$t('company.management.products.editor.productSubcategoryLabel')"
              :placeholder="$t('company.management.products.editor.productSubcategoryPlaceholder')"
            />

            <m-select
              name="unit"
              :label="$t('company.management.products.editor.productUnitLabel')"
              :placeholder="$t('company.management.products.editor.productUnitPlaceholder')"
            />

            <m-select
              name="tags"
              :label="$t('company.management.products.editor.productTagsLabel')"
              :placeholder="$t('company.management.products.editor.productTagsPlaceholder')"
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
          <div class="product-editor-add-information-step__buttons">
            <a-button :text="$t('global.cancel')" size="x-large" color="gradient-danger" />

            <a-button :text="$t('global.next')" size="x-large" />
          </div>
        </template>
      </o-form>
    </template>
  </m-stepper-step-content>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.product-editor-add-information-step {
  max-height: 650px;

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
