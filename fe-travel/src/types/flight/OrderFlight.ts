import { User } from '../auth/User'
import { Flight } from './Fight'
import { SearchFlight } from './SearchFlight'
export interface OrderFlight {
  orderId: string
  user: User
  flight: Flight
  flightDetails: SearchFlight
  bookingDate: string
}

