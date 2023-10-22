import type { Component } from 'vue'

export interface MNavigationTabsItemData {
  title: string
  to: string
  icon?: string
  component: Component
}
