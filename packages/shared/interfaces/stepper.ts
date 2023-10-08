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
  status: string
  isLast: boolean
}
