<template>
  <div class="company-member-invitation">
    <a-dropdown class="company-member-invitation__dropdown">
      <template #activator>
        <div class="company-member-invitation__invite">
          <a-button
            text="Invite new members"
            size="x-large"
            class="company-member-invitation__invite--button"
          />
        </div>
      </template>

      <template #content>
        <div class="company-member-invitation__dropdown--content">
          <a-title title="Enter how many tokens you want to generate" size="medium"/>

          <m-text-field />

          <a-button text="Invite" class="company-member-invitation__dropdown--content__submit"/>
        </div>
      </template>
    </a-dropdown>
  </div>
</template>

<style scoped lang="scss">
.company-member-invitation {
  margin-left: auto;

  &__dropdown {
    position: relative;

    &--content {
      position: absolute;
      z-index: 9999;
      top: $global-spacing-50;
      right: 0;
      
      display: flex;
      flex-direction: column;
      gap: $global-spacing-60;
      
      width: 400px;
      padding: $global-spacing-50;
      
      background-color: var(--secondary-1);

      &__submit {
        width: min-content;
        margin-top: $global-spacing-30;
        margin-left: auto;
      }
    }
  }

  &__invite {
    display: flex;
    align-items: end;
  }
}
</style>
