<template>
  <company-management-panel class="company-management-members-active-panel">
    <company-member-list />
  </company-management-panel>
</template>

<script setup lang="ts">
import CompanyManagementPanel from '@/components/core/company/panel/CompanyManagementPanel.vue'
import CompanyMemberList from './active/components/CompanyMemberList.vue';
</script>

<style lang="scss" scoped>
.company-management-members-active-panel {
  display: flex;
  flex: 1;
}
</style>
