function assignPrefix(baseClass: string, name: string) {
  return name ? `${baseClass}--${name}` : ''
}

function assignClassName(baseClass: string, propData: any): string {
  return propData ? assignPrefix(baseClass, propData.newName ?? propData) : ''
}

export function useClassComposable() {
  return {
    generateClassNames(baseClass: string, propsData: any) {
      const classesArray = [baseClass]

      for (const element of propsData) {
        classesArray.push(assignClassName(baseClass, element))
      }

      return classesArray.join(' ')
    }
  }
}
