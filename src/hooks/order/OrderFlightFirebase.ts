import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { OrderFlight } from '../../types/flight/OrderFlight'
import { db } from '../../libs/firebaseConfig'
export const OrderFlightFirebase = async (orderFlight: OrderFlight) => {
  try {
    await addDoc(collection(db, 'orderFlights'), {
      ...orderFlight,
      bookingDate: serverTimestamp()
    })
    console.log('Order flight added to Firebase')
  } catch (error) {
    console.error('order flight firebase error', error)
    throw error
  }
}
