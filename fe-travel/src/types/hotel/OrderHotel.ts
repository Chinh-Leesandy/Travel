import { User } from '../auth/User'
import { Hotel } from './Hotel'
import { BookingHotel } from './BookingHotel'
export interface OrderHotel {
  orderId: string
  user: User
  hotel: Hotel
  hotelDetail: BookingHotel
  bookingDate: string
}
