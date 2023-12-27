import OfferPreviewView from '@/views/Preview/OfferPreviewView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import type { RouteRecordRaw } from 'vue-router'

class OfferPreviewRouteEnum extends BaseEnum {
  static readonly OFFER_PREVIEW: string = 'OFFER_PREVIEW'
}

const OfferPreviewRoutes: RouteRecordRaw[] = [
  {
    path: '/preview/offer/:id',
    name: OfferPreviewRouteEnum.OFFER_PREVIEW,
    component: OfferPreviewView
  }
]

export default OfferPreviewRoutes
