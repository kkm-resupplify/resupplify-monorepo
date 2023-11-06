<template>
  <o-form class="warehouse-editor-form">
    <template #body>
      <div class="warehouse-editor-form__body">
        <a-title :title="$t('company.management.warehouse.editor.title')" size="x-large" />

        <m-text-field
          name="warehouseName"
          input-type="text"
          :label="$t('company.management.warehouse.editor.nameLabel')"
          :placeholder="$t('company.management.warehouse.editor.namePlaceholder')"
          rules="required"
        />

        <m-text-area
          name="warehouseDescription"
          rules="required|min:16|max:255"
          :label="$t('company.management.warehouse.editor.descriptionLabel')"
          :placeholder="$t('company.management.warehouse.editor.descriptionPlaceholder')"
        />

        <a-button
          :text="$t('global.save')"
          button-type="submit"
          class="warehouse-editor-form__button"
          size="x-large"
        />
      </div>
    </template>
  </o-form>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.warehouse-editor-form {
  &__body {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-50;
    min-width: 500px;
  }

  &__button {
    display: flex;
    justify-content: center;
  }
}
</style>
