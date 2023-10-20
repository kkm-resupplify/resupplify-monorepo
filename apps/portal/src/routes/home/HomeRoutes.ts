import HomeView from '@/views/Home/HomeView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import type { RouteRecordRaw } from 'vue-router'

class HomeRouteEnum extends BaseEnum {
  static readonly HOME: string = 'HOME'
}

const Routes: RouteRecordRaw[] = [{ path: '/', name: HomeRouteEnum.HOME, component: HomeView }]

export default Routes
