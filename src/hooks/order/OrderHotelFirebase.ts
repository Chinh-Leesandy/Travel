import { OrderHotel } from '../../types/hotel/OrderHotel'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../../libs/firebaseConfig'
export const OrderHotelFirebase = async (orderHotel: OrderHotel) => {
  try {
    await addDoc(collection(db, 'orderHotels'), {
      ...orderHotel,
      bookingDate: serverTimestamp()
    })
    console.log('Order Hotel added to Firebase')
  } catch (error) {
    console.error('order hotel firebase error', error)
    throw error
  }
}
