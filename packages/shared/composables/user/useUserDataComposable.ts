export function useFullNameComposable() {
  return {
    userFullName(firstName?: string, lastName?: string) {
      return `${firstName} ${lastName}`
    }
  }
}
