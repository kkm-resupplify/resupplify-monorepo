export interface ProductTag extends ProductTagData {
  id: number
  slug: string
}

export interface ProductTagData {
  name: string
  color: string
}
