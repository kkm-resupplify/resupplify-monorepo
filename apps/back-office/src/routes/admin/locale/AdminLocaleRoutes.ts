import AdminLocaleView from '@/views/Locale/AdminLocaleView.vue'
import LocaleCountryListPanel from '@/components/core/panel/locale/LocaleCountryListPanel.vue'
import LocaleLanguageListPanel from '@/components/core/panel/locale/LocaleLanguageListPanel.vue'

import BaseEnum from '@sharedEnums/BaseEnum'
import type { RouteRecordRaw } from 'vue-router'

class AdminLocaleRouteEnum extends BaseEnum {
  static readonly ADMIN_LOCALE_TILES: string = 'ADMIN_LOCALE_TILES'
  static readonly ADMIN_LOCALE_COUNTRY: string = 'ADMIN_LOCALE_COUNTRY'
  static readonly ADMIN_LOCALE_LANGUAGE: string = 'ADMIN_LOCALE_LANGUAGE'
}

const AdminLocaleRoutes: RouteRecordRaw[] = [
  {
    path: 'locale',
    name: AdminLocaleRouteEnum.ADMIN_LOCALE_TILES,
    component: AdminLocaleView
  },
  {
    path: 'locale/country',
    name: AdminLocaleRouteEnum.ADMIN_LOCALE_COUNTRY,
    component: LocaleCountryListPanel
  },
  {
    path: 'locale/language',
    name: AdminLocaleRouteEnum.ADMIN_LOCALE_LANGUAGE,
    component: LocaleLanguageListPanel
  }
]

export default AdminLocaleRoutes
