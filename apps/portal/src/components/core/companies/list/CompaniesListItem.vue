<template>
  <a-panel-section class="companies-list-item">
    <template v-if="isLoading">implement-loader-here</template>

    <template v-else>
      <div class="companies-list-item__wrapper">
        <a-image
          :width="120"
          :height="120"
          :src="company.details.logo"
          :alt="$t('common.offer.list.item.imageAlt')"
          variant="rounded"
        />

        <div class="companies-list-item__info">
          <a-title :title="company.name" size="x-large" class="companies-list-item__info-title" />

          <a-title
            :title="$t('company.preview.email')"
            :subtitle="company.details.email"
            variant="horizontal"
            append-colon
            class="companies-list-item__info-title"
          />

          <a-title
            :title="$t('company.preview.phone')"
            :subtitle="company.details.phoneNumber"
            variant="horizontal"
            append-colon
            class="companies-list-item__info-title"
          />

          <a-title
            :title="$t('company.preview.address')"
            :subtitle="company.details.address"
            variant="horizontal"
            append-colon
            class="companies-list-item__info-title"
          />
        </div>
      </div>
    </template>
  </a-panel-section>
</template>

<script setup lang="ts">
import type { CompanyData } from '@sharedInterfaces/company/CompanyInterface'
import type { PropType } from 'vue'
import { ref } from 'vue'

// Variables
const isLoading = ref(false)

defineProps({
  company: {
    type: Object as PropType<CompanyData>,
    required: true
  }
})
</script>

<style scoped lang="scss">
.companies-list-item {
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
