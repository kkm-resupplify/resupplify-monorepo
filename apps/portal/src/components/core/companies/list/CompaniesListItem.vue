<template>
  <a-list-item-wrapper class="companies-list-item">
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
      <router-link
        :to="{ name: RouteNames.COMPANY_PREVIEW, params: { slug: company.slug } }"
        class="companies-list-item__visit-profile"
      >
        <a-button :text="$t('global.visitProfile')" size="x-large" />
      </router-link>
    </div>
  </a-list-item-wrapper>
</template>

<script setup lang="ts">
import { RouteNames } from '@/routes'
import type { CompanyData } from '@sharedInterfaces/company/CompanyInterface'
import type { PropType } from 'vue'

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
    flex: 1;
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

  &__visit-profile {
    align-self: self-end;
    margin-left: auto;
    text-decoration: none;
  }
}
</style>
