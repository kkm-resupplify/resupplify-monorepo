import { useStaticProductDescriptorsStore } from '@sharedStores/product/useStaticProductDescriptorsStore'

const getProductategories = () => {
  const staticProductDescriptorsStore = useStaticProductDescriptorsStore()
  return staticProductDescriptorsStore.getProductCategories
}

const getProductSubcategories = (productCategoryId: number) => {
  const staticProductDescriptorsStore = useStaticProductDescriptorsStore()

  return staticProductDescriptorsStore.getProductSubcategories.filter(
    (productSubcategory) => productSubcategory.categoryId === productCategoryId
  )
}

const getProductUnits = () => {
  const staticProductDescriptorsStore = useStaticProductDescriptorsStore()
  return staticProductDescriptorsStore.getProductUnits
}

export function useProductUtility() {
  return {
    getProductategories,
    getProductSubcategories,
    getProductUnits
  }
}
