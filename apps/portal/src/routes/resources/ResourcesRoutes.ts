import type { RouteRecordRaw } from 'vue-router'
import ResourcesView from '@/views/Resources/ResourcesView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'

class ResourcesRouteEnum extends BaseEnum {
  static readonly RESOURCES: string = 'RESOURCES'
}

const ResourcesRoutes: RouteRecordRaw[] = [
  { path: '/resources', name: ResourcesRouteEnum.RESOURCES, component: ResourcesView }
]

export default ResourcesRoutes
