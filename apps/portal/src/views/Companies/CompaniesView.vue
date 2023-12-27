<template>
  <basic-view-layout>
    <template #body>
      <a-panel-section>
        <a-title :title="$t('companies.header.title')" size="x-large" />

        <a-title :title="$t('companies.header.description')" />
      </a-panel-section>

      <div>companies-filters</div>

      <companies-list :companies="companies" />
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
import CompaniesList from '@/components/core/companies/list/CompaniesList.vue'

const companies = [
  {
    id: 1,
    name: 'Coffe Company',
    shortDescription: 'Coffe Company with 10 years of experience in coffee market',
    description: 'Coffe Company with 10 years of experience in coffee market',
    slug: 'coffe-company',
    ownerId: 1,
    status: 0,
    details: {
      countryId: 42,
      address: 'Al. Niepodległości 61 Szczecin',
      email: 'coofeCompany@gmail.com',
      phoneNumber: '+48604212365',
      externalWebsite: 'https://coofeCompany.com',
      logo: 'logo.png',
      companyId: 1,
      companyCategoryId: 1,
      tin: '1159015689',
      contactPerson: 'Maciej Pokręć'
    }
  },
  {
    id: 3,
    name: 'Java Coffee',
    shortDescription: 'This is Java Coffee',
    description: 'This is Java Coffee selling coffee',
    slug: 'java-coffee',
    ownerId: 3,
    status: 1,
    details: {
      countryId: 12,
      address: 'Helsinki, Finland',
      email: 'javacoffee@gmail.com',
      phoneNumber: '+48123456789',
      externalWebsite: 'https://www.javacoffee.com',
      logo: 'xdd',
      companyId: 3,
      companyCategoryId: 1,
      tin: '1234',
      contactPerson: 'Olivia Anderson'
    }
  }
]
</script>
