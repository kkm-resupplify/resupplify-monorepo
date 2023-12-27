import BaseService from '@/services/BaseService'

class OfferPreviewService extends BaseService {
  static OFFER_PREVIEW = 'productOffer'

  async getOffer(id: string | number) {
    return await this.get({
      suffix: `${OfferPreviewService.OFFER_PREVIEW}/${id}`
    })
  }
}

export default new OfferPreviewService('preview')
