import type { Component } from 'vue'

export interface Route {
  path: string
  component: Component
  children?: Route[]
}
