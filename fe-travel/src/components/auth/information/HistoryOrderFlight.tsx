import { useAppSelector } from '../../../app/store/hooks'
import { useOrderFlight } from '../../../hooks/auth/information/useOrderFlight'
import { OrderFlight } from '../../../types/flight/OrderFlight'
import { formatBookingDate } from '../../../utils/formatTime'
import Loading from '../../ui/loading/Loading'

export const HistoryOrderFlight = () => {
  const user = useAppSelector((state) => state.auth.Iuser)
  const { data, isLoading, error } = useOrderFlight(user?.email as string)
  if (isLoading) return <Loading />
  if (error) return <div>Error: {error.message}</div>
  console.log(data)
  return (
    <div className='mt-10 mx-10 rounded-md shadow-lg shadow-slate-500'>
      <h2 className='text-center text-xl font-bold'>History Order Flight</h2>
      {data?.map((item: OrderFlight) => (
        <div className='flex justify-center items-center gap-5 p-3'>
          <table className='w-full'>
            <thead>
              <tr className='bg-gray-100'>
                <th className='border'>Order Id</th>
                <th className='border'>Origin City</th>
                <th className='border'>Destination City</th>
                <th className='border'>Name</th>
                <th className='border'>Travel Class</th>
                <th className='border'>Ticket</th>
                <th className='border'>Booking Date</th>
              </tr>
            </thead>
            <tbody>
              <tr key={item.orderId} className='text-center'>
                <td className='border'>{item.orderId}</td>
                <td className='border'>{item.flightDetails.originCity}</td>
                <td className='border'>{item.flightDetails.destinationCity}</td>
                <td className='border'>{item.flight.itineraries[0].segments[0].carrierCode}</td>
                <td className='border'>{item.flightDetails.travelClass}</td>
                <td className='border'>
                  {item.flightDetails.adults} adults{' '}
                  {item.flightDetails.children !== 0 && <> and {item.flightDetails.children} children</>}
                </td>
                <td className='border'>{formatBookingDate(item.bookingDate)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}
