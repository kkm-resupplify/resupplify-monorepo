<template>
  <m-dialog
    ref="dialogRef"
    :title="company.name"
    @open="setCompanyEditorData"
    @close="companyRegisterStore.$reset()"
  >
    <template #activator>
      <a-button
        :text="$t('settings.myCompany.editDetails')"
        size="x-large"
        class="my-company-section__button"
      />
    </template>

    <register-company />
  </m-dialog>
</template>

<script setup lang="ts">
import type { CompanyData } from '@sharedInterfaces/company/CompanyInterface'
import { type PropType } from 'vue'
import RegisterCompany from '@/components/core/company/register/RegisterCompany.vue'
import { computed, ref } from 'vue'
import { useRegisterCompanyStore } from '@/stores/company/useRegisterCompanyStore'
import type MDialogVue from '@sharedMolecules/dialog/MDialog.vue'

const props = defineProps({
  company: {
    type: Object as PropType<CompanyData>,
    required: true
  }
})

// Variables
const dialogRef = ref<null | InstanceType<typeof MDialogVue>>(null)
const companyRegisterStore = useRegisterCompanyStore()

// Computed
const editCompanyGeneralStepData = computed(() => {
  return {
    id: props.company.id,
    name: props.company.name,
    countryId: props.company.details.countryId,
    shortDescription: props.company.shortDescription,
    description: props.company.description
  }
})

const editCompanyDetailsStep = computed(() => {
  return {
    address: props.company.details.address,
    companyCategoryId: props.company.details.companyCategoryId,
    tin: props.company.details.tin,
    logo: props.company.details.logo,
    image: null
  }
})

const editCompanyContactInfoStep = computed(() => {
  return {
    phoneNumber: props.company.details.phoneNumber,
    email: props.company.details.email,
    contactPerson: props.company.details.contactPerson,
    externalWebsite: props.company.details.externalWebsite
  }
})

// Methods
const setCompanyEditorData = () => {
  companyRegisterStore.setGeneralStepData(editCompanyGeneralStepData.value)
  companyRegisterStore.setDetailsStepData(editCompanyDetailsStep.value)
  companyRegisterStore.setContactInfoStepData(editCompanyContactInfoStep.value)
}
</script>
