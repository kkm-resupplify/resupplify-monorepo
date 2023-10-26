<template>
    <div class="company-member-invitation">
        <a-dropdown>
            <template #activator>
                <div class="company-member-invitation__invite">
                    <a-title title="Invite"/>
                </div>
            </template>
    
            <template #content>
                <div class="company-member-invitation__content">
                    <a-title title="Enter how many tokens you want to generate" />

                    <m-text-field />
                </div>
            </template>
        </a-dropdown>
    </div>
</template>

<style scoped lang="scss">
.company-member-invitation {
    width: 300px;
    margin-left: auto;
    
    &__content {
        background-color: var(--primary);
    }
}
</style>