import { type Component } from 'vue'

export interface StepInfo {
  title: string
  subtitle: string
  description: string
}

export interface Step {
  stepInfo: StepInfo
  component: Component
}
