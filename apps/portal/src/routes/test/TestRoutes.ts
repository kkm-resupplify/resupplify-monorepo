import type { RouteRecordRaw } from 'vue-router'

import TestView from '@/views/Test/TestView.vue'

const TestRoutes: RouteRecordRaw[] = [{ path: '/test', component: TestView }]

export default TestRoutes
