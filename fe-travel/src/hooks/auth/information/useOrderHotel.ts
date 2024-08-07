import { OrderHotel } from '../../../types/hotel/OrderHotel'
import { db } from '../../../libs/firebaseConfig'
import { query, collection, where, getDocs } from 'firebase/firestore'
import { useQuery } from '@tanstack/react-query'
const fetchOrderHotel = async (userEmail: string): Promise<OrderHotel[]> => {
  try {
    const q = query(collection(db, 'orderHotels'), where('user.email', '==', userEmail))
    const res = await getDocs(q)
    const orderHotel: OrderHotel[] = []
    res.forEach(doc => {
      orderHotel.push(doc.data() as OrderHotel)
    })
    return orderHotel
  } catch (error) {
    console.error('Error fetching order hotel:', error)
    throw error
  }
}
export const useOrderHotel = (userEmail: string) => {
  return useQuery({
    queryKey: ['orderHotel', userEmail],
    queryFn: () => fetchOrderHotel(userEmail),
    enabled: !!userEmail
  })
}