import CompanyPreviewRoutes from './company/CompanyPreviewRoutes'
import type { RouteRecordRaw } from 'vue-router'
import OfferPreviewRoutes from './offer/OfferPreviewRoutes'

const PreviewRoutes: RouteRecordRaw[] = [...CompanyPreviewRoutes, ...OfferPreviewRoutes]

export default PreviewRoutes
