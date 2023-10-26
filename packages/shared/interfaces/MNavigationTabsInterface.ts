import type { Component } from 'vue'
interface Route {
  name: string
}

export interface MNavigationTabsItemData {
  title: string
  to: string | Route
  icon?: string
  component?: Component
}
