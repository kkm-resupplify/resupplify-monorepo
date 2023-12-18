import BaseService from '../BaseService'
import type { OfferFiltersParams } from '@sharedInterfaces/offer/OfferInterface'

class CompanyOfferService extends BaseService {
  async getOffers(params?: OfferFiltersParams) {
    return await this.get({
      config: { params }
    })
  }

  async getStockItems() {
    return {
      data: [
        {
          id: 1,
          warehouseName: 'Warehouse 1',
          warehouseQuantity: 100,
          datesActive: [
            { startDate: '17-12-2023 19:17:21', endDate: '17-12-2023 19:17:21' },
            { startDate: '17-12-2023 19:17:21', endDate: '17-12-2023 19:17:21' },
            { startDate: '17-12-2023 19:17:21', endDate: '17-12-2023 19:17:21' },
            { startDate: '17-12-2023 19:17:21', endDate: '17-12-2023 19:17:21' },
            { startDate: '17-12-2023 19:17:21', endDate: '17-12-2023 19:17:21' },
            { startDate: '17-12-2023 19:17:21', endDate: '17-12-2023 19:17:21' },
            { startDate: '17-12-2023 19:17:21', endDate: '17-12-2023 19:17:21' }
          ],
          product: {
            id: 51,
            name: 'Coffee beans',
            description:
              'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
            producer: 'The Coca-Cola Company',
            code: 'cola/big',
            status: 1,
            verificationStatus: 1,
            companyId: 6,
            productUnit: {
              id: 2,
              code: 'LITRE'
            },
            productCategory: {
              id: 2,
              name: 'Snacks'
            },
            productSubcategory: {
              id: 8,
              name: 'Popcorn',
              categoryId: 2
            },
            productTags: [
              {
                id: 26,
                name: 'White',
                slug: 'white',
                color: '#ff88c0'
              }
            ],
            translations: [
              {
                languageId: 1,
                name: 'Product name',
                description: 'Product description'
              },
              {
                languageId: 2,
                name: 'Nazwa produktu',
                description: 'Opis produktu'
              }
            ]
          }
        },
        {
          id: 2,
          warehouseName: 'Warehouse 2',
          warehouseQuantity: 200,
          datesActive: [
            { startDate: '17-12-2023 19:17:21', endDate: '17-12-2023 19:17:21' },
            { startDate: '17-12-2023 19:17:21', endDate: '17-12-2023 19:17:21' },
            { startDate: '17-12-2023 19:17:21', endDate: '17-12-2023 19:17:21' }
          ],
          product: {
            id: 51,
            name: 'Coffee machine',
            description:
              'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
            producer: 'The Coca-Cola Company',
            code: 'cola/big',
            status: 1,
            verificationStatus: 1,
            companyId: 6,
            productUnit: {
              id: 2,
              code: 'LITRE'
            },
            productCategory: {
              id: 2,
              name: 'Snacks'
            },
            productSubcategory: {
              id: 8,
              name: 'Popcorn',
              categoryId: 2
            },
            productTags: [
              {
                id: 26,
                name: 'White',
                slug: 'white',
                color: '#ff88c0'
              }
            ],
            translations: [
              {
                languageId: 1,
                name: 'Product name',
                description: 'Product description'
              },
              {
                languageId: 2,
                name: 'Nazwa produktu',
                description: 'Opis produktu'
              }
            ]
          }
        }
      ],
      success: true
    }
  }

  async createOffer() {}
}

export default new CompanyOfferService('company/productOffer')
