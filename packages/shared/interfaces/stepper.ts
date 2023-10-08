import { type Component } from 'vue'

export interface StepInfo {
  title: string
  subtitle: string
  description: string
  icon?: string
}

export interface Step {
  stepInfo: StepInfo
  component: Component
}

export interface ItemState {
  index: number
  status: string
  isLast: boolean
}
