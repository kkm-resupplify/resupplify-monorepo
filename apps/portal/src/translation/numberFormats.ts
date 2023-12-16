type Notation = 'standard' | 'scientific' | 'engineering' | 'compact'

const numberFormats: {
  [locale: string]: {
    currency: {
      style: string
      currency: string
      notation: Notation
    }
    decimal: {
      style: string
      minimumFractionDigits: number
      maximumFractionDigits: number
    }
    percent: {
      style: string
      useGrouping: boolean
    }
  }
} = {
  'en-US': {
    currency: {
      style: 'currency',
      currency: 'EUR',
      notation: 'standard'
    },
    decimal: {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    },
    percent: {
      style: 'percent',
      useGrouping: false
    }
  },
  'pl-PL': {
    currency: {
      style: 'currency',
      currency: 'EUR',
      notation: 'standard'
    },
    decimal: {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    },
    percent: {
      style: 'percent',
      useGrouping: false
    }
  }
}

export default numberFormats
