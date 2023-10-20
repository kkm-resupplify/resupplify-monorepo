import type { RouteRecordRaw } from 'vue-router'
import TestView from '@/views/Test/TestView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'

class TestRouteEnum extends BaseEnum {
  static readonly TEST: string = 'TEST'
}

const TestRoutes: RouteRecordRaw[] = [
  { path: '/test', name: TestRouteEnum.TEST, component: TestView }
]

export default TestRoutes
