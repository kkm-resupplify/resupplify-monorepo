function assignPrefix(baseClass: String, name: String) {
  return name ? `${baseClass}--${name}` : ''
}

function assignClassName(baseClass: String, propData: any): String {
  return propData ? assignPrefix(baseClass, propData.newName ?? propData) : ''
}

export function useAtomClassComposable() {
  return {
    generateClassNames(baseClassName: String, propsData: any) {
      const classesArray = [baseClassName]

      for (let i = 0; i < propsData.length; i++) {
        classesArray.push(assignClassName(baseClassName, propsData[i]))
      }

      return classesArray.join(' ')
    }
  }
}
