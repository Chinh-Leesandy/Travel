import { OrderFlight } from '../../../types/flight/OrderFlight'
import { db } from '../../../libs/firebaseConfig'
import { query, collection, where, getDocs } from 'firebase/firestore'
export const useOrderFlight = async (userEmail: string): Promise<OrderFlight[]> => {
  try {
    const q = query(collection(db, 'orderFlights'), where('user.email', '==', userEmail))
    const res = await getDocs(q)
    const orderFlight: OrderFlight[] = []
    res.forEach(doc => {
      orderFlight.push(doc.data() as OrderFlight)
    })
    return orderFlight
  } catch (error) {
    console.error('Error fetching order flight:', error)
    throw error
  }
}
