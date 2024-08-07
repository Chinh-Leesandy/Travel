export interface FlightOption {
  FlightName: string
  FlightTime: string
  Price: string
}

export interface HotelOption {
  HotelName: string
  HotelAddress: string
  Price: string
  Rating: string
}
export interface PlaceDetails {
  PlaceName: string
  LocationDetails: string
  TicketPrice: string
  TimeToVisit: string
  TravelTimeToLocation: string
}

export interface ItineraryByDay {
  Day: string
  DayDescription: string
  BestTimeToVisit: string
  Place: PlaceDetails[]
}
export interface TravelPlan {
  FlightOptions: FlightOption[]
  HotelOptions: HotelOption[]
  ItinerarySuggestions: ItineraryByDay
}
