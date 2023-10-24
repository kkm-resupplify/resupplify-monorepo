<template>
    <div class="company-member-list-item">
        <a-dropdown class="company-member-list-item__dropdown">
            <template #activator>
                <div class="company-member-list-item__header">
                    <a-title title="email" />
                </div>
            </template>
            <template #content>
                <div class="company-member-list-item__details">
                    <a-title title="firstName" size="medium"/>
                    
                    <a-title title="lastName" size="medium"/>
                    
                    <a-title title="phoneNumber" size="medium"/>
                    
                    <a-title title="birthDate" size="medium"/>
                    
                    <a-title title="sex" size="medium"/>
                </div>
            </template>
        </a-dropdown>
    </div>
</template>

<style scoped lang="scss">
.company-member-list-item {
    &__header, &__details {
        padding: $global-spacing-50;
        width: 100%;
    }

    &__header {
        background-color: var(--secondary-2);
    }

    &__details {
        display: flex;
        flex-direction: column;
        gap: $global-spacing-50;
        background-color: var(--secondary-1);
    }
}
</style>
