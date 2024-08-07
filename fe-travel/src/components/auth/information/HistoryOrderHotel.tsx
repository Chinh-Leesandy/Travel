import { useAppSelector } from '../../../app/store/hooks'
import { useOrderHotel } from '../../../hooks/auth/information/useOrderHotel'
import { OrderHotel } from '../../../types/hotel/OrderHotel'
import { formatBookingDate } from '../../../utils/formatTime'
import Loading from '../../ui/loading/Loading'

export const HistoryOrderHotel = () => {
  const user = useAppSelector((state) => state.auth.Iuser)
  const { data, isLoading, error } = useOrderHotel(user?.email as string)
  if (isLoading) return <Loading />
  if (error) return <div>Error: {error.message}</div>
  console.log(data)
  return (
    <div className='mt-10 mx-10 rounded-md shadow-lg shadow-slate-500'>
      <h2 className='text-center text-xl font-bold'>History Order Hotel</h2>
      {data?.map((item: OrderHotel) => (
        <div className='flex justify-center items-center gap-5 p-3'>
          <table className='w-full'>
            <thead>
              <tr className='bg-gray-100'>
                <th className='border'>Order Id</th>
                <th className='border'>Hotel Name</th>
                <th className='border'>Check In</th>
                <th className='border'>Check Out</th>
                <th className='border'>Room Number</th>
                <th className='border'>Booking Date</th>
              </tr>
            </thead>
            <tbody>
              <tr key={item.orderId} className='text-center'>
                <td className='border'>{item.orderId}</td>
                <td className='border'>{item.hotel.name}</td>
                <td className='border'>{item.hotelDetail.checkIn}</td>
                <td className='border'>{item.hotelDetail.checkOut}</td>
                <td className='border'>{item.hotelDetail.roomNumber}</td>
                <td className='border'>{formatBookingDate(item.bookingDate)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}
