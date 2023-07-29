// For VSC only
declare module 'vue' {
  interface ComponentCustomProperties {
    $t: Record
    $d: Record
    $n: Record
  }
}

export {}
