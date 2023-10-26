<template>
    <div class="company-member-list">
        <company-member-invitation />
        <p>Members</p>
        <company-member-list-item />
        <company-member-list-item />
    </div>
</template>

<script setup lang="ts">
import CompanyMemberListItem from './CompanyMemberListItem.vue';
import CompanyMemberInvitation from './CompanyMemberInvitation.vue';
</script>
<style scoped lang="scss">
    .company-member-list {
        @include boxshadow-primary-2;
        width: 60%;
        margin-inline: auto;
        display: flex;
        flex-direction: column;
        gap: $global-spacing-80;
        padding: $global-spacing-90;
    }
</style>