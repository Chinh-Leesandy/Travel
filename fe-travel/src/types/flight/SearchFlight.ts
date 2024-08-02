export interface SearchFlight {
  originCity: string
  destinationCity: string
  departureDate: string
  returnDate: string
  adults: number
  children?: number
  travelClass: string
  includedAirlineCodes?: string[]
}
