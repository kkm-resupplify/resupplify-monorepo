import { useI18n } from 'vue-i18n'

export function useUnitTranslation() {
  const { t } = useI18n()

  return {
    translateUnit(unit: string) {
      return t(
        `product.unit.${unit
          .toLowerCase()
          .replace(/_./g, (match) => match.charAt(1).toUpperCase())}`
      )
    }
  }
}
