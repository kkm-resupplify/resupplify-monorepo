<template>
  <router-link :to="companyRoute">
    <a-card class="company-card" :header-image="data.details.logo" :header-image-alt="data.name">
      <template #title>{{ data.name }}</template>

      <template #content>
        <div class="company-card__content">
          <span class="company-card__content-description">{{ data.shortDescription }}</span>

          <company-card-stats :company-stats="companyStats" />
        </div>
      </template>
    </a-card>
  </router-link>
</template>

<script setup lang="ts">
import { type PropType, computed } from 'vue'
import type { FeaturedCompany } from '@sharedInterfaces/company/CompanyInterface'
import CompanyCardStats from '@/components/core/company/card/sections/CompanyCardStats.vue'
import { RouteNames } from '@/routes/index'

const props = defineProps({
  data: {
    type: Object as PropType<FeaturedCompany>,
    required: true
  }
})

// Computed
const companyStats = computed(() => ({
  productsSold: props.data.productsSold ?? 0,
  productsTotal: props.data.productsTotal ?? 0,
  uniqueClients: props.data.uniqueClients ?? 0
}))

const companyRoute = computed(() => ({
  name: RouteNames.COMPANY_PREVIEW,
  params: { slug: props.data.slug }
}))
</script>

<style scoped lang="scss">
.company-card {
  :hover {
    cursor: pointer;
  }

  &__content {
    display: flex;
    flex: 1 0 0;
    gap: $global-spacing-30;
    align-items: flex-start;
    align-self: stretch;

    max-height: 84px;
    padding: 0 $global-spacing-20 $global-spacing-20 $global-spacing-20;

    border-radius: 0 0 $global-border-radius-10 $global-border-radius-10;
  }

  &__content-description {
    overflow: hidden;
    display: flex;
    flex: 1 0 0;
    flex-direction: column;
    gap: 2px;
    align-items: flex-start;
    align-self: stretch;

    line-height: 28px;
    text-align: justify;
    text-overflow: ellipsis;
  }
}
</style>
