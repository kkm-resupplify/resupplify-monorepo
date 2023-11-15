<template>
  <a-expansion-panel>
    <template #activator>
      <a-list-item-wrapper class="company-verify-company-list-item">
        <a-list-item-title-section title="Company name" :value="company.name" />

        <a-list-item-title-section title="TIN" :value="company.details.tin" />

        <a-list-item-title-section title="Phone number" :value="company.details.phoneNumber" />

        <a-list-item-title-section title="Contact person" :value="company.details.contactPerson" />

        <div class="company-verify-company-list-item__actions">
          <a-button
            text="Reject"
            color="gradient-danger"
            size="large"
            @click.stop="rejectCompany"
          />

          <a-button text="Verify" size="large" @click.stop="verifyCompany" />
        </div>
      </a-list-item-wrapper>
    </template>

    <template #content>
      <div class="company-verify-company-list-item__content">
        <a-title
          v-for="(companyDetail, idx) in companyDetailsContent"
          :key="idx"
          :title="companyDetail.title"
          :subtitle="companyDetail.value"
          append-colon
        />
      </div>
    </template>
  </a-expansion-panel>
</template>

<script setup lang="ts">
import type { CompanyData } from '@sharedInterfaces/company/CompanyInterface'
import { type PropType, computed } from 'vue'
import CompanyVerificationService from '@/services/company/CompanyVerificationService'

const { company } = defineProps({
  company: {
    type: Object as PropType<CompanyData>,
    required: true
  }
})

// Emits
const emits = defineEmits(['update-list'])

// Computed
const companyDetailsContent = computed(() => {
  return [
    { title: 'Short description', value: company.shortDescription },
    { title: 'Description', value: company.description },
    { title: 'Email', value: company.details.email },
    { title: 'Address', value: company.details.address },
    { title: 'Website', value: company.details.externalWebsite }
  ]
})

const companyId = computed(() => company.id)

// Methods
const verifyCompany = async () => {
  const { success } = await CompanyVerificationService.verifyCompany({ companyId: companyId.value })

  if (success) emits('update-list')
}

const rejectCompany = async () => {
  const { success } = await CompanyVerificationService.rejectCompany({ companyId: companyId.value })

  if (success) emits('update-list')
}
</script>

<style lang="scss" scoped>
.company-verify-company-list-item {
  background-color: var(--primary);

  &__actions {
    display: flex;
    flex: 1;
    gap: $global-spacing-70;
    justify-content: flex-end;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-30;
  }
}
</style>
