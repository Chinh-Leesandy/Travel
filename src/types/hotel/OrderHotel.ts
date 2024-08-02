import { User } from '../auth/User'
import { Hotel } from './Hotel'
import { SearchHotel } from './SearchHotel'
export interface OrderHotel {
  orderId: string
  user: User
  hotel: Hotel
  hotelDetail: SearchHotel
  bookingDate: string
}
