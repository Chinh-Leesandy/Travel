export interface Flight {
  id: string
  numberOfBookableSeats: number
  lastTicketingDate: string
  itineraries: Itinerary[]
  price: Price
  travelerPricings: TravelerPricing[]
}

export interface Itinerary {
  duration: string
  segments: Segment[]
}

export interface Segment {
  departure: {
    iataCode: string
    at: string
  }
  arrival: {
    iataCode: string
    at: string
    terminal?: string
  }
  carrierCode: string
  number: string
  aircraft: {
    code: string
  }
  operating: {
    carrierCode: string
  }
  duration: string
  id: string
  numberOfStops: number
  blacklistedInEU: boolean
}

export interface Price {
  currency: string
  grandTotal: string
}

export interface TravelerPricing {
  travelerId: string
  fareOption: string
  travelerType: string
  price: TravelerPrice
  fareDetailsBySegment: FareDetailsBySegment[]
}

export interface TravelerPrice {
  currency: string
  total: string
  base: string
}

export interface FareDetailsBySegment {
  segmentId: string
  cabin: string
  fareBasis: string
  brandedFare: string
  brandedFareLabel: string
  class: string
  includedCheckedBags: IncludedCheckedBags
  amenities: Amenity[]
}

export interface IncludedCheckedBags {
  weight: number
  weightUnit: string
}

export interface Amenity {
  description: string
  isChargeable: boolean
  amenityType: string
  amenityProvider: {
    name: string
  }
}
