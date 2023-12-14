import type { Offer } from '@sharedInterfaces/offer/OfferInterface'
import { useUserStore } from '@/stores/user/useUserStore'
import OfferStatusEnum from '@sharedEnums/offer/OfferStatusEnum'

export function useOfferStatus() {
  return {
    offerStatus(offer: Offer) {
      const { product } = offer
      const userStore = useUserStore()
      const { company } = userStore

      if (
        product.status === 0 ||
        offer.status === 0 ||
        product.verificationStatus === 0 ||
        company?.status === 0
      ) {
        return OfferStatusEnum.DEACTIVATED
      }

      return OfferStatusEnum.ACTIVATED
    }
  }
}
