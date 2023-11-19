<template>
  <a-panel-section>
    <div class="product-header-section">
      <div class="product-header-section__titles">
        <a-title title="Company name" size="x-large" />

        <a-title title="Total products" size="x-large" />
      </div>

      <a-button text="Add product" size="x-large" class="product-header-section__button" />
    </div>
  </a-panel-section>
</template>
<style scoped lang="scss">
.product-header-section {
  display: flex;
  justify-content: space-between;
  padding: $global-spacing-40;
}
</style>
