import type { Component } from 'vue'

export interface MTabsItemData {
  title: string
  to: string
  icon?: string
  component: Component
}
