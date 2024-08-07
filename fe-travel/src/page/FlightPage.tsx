import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { SearchFlight } from '../types/flight/SearchFlight'
import useSearchFlight from '../hooks/flight/useSearchFlight'
import BgDetail from '../assets/Bg_Detail.png'
import { Flight } from '../types/flight/Fight'
import Button from '../components/ui/button/Button'
import { formatDateTime, formatTime } from '../utils/formatTime'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import Loading from '../components/ui/loading/Loading'
import { OrderFlight } from '../types/flight/OrderFlight'
import { OrderFlightFirebase } from '../hooks/order/OrderFlightFirebase'
import { useAppSelector } from '../app/store/hooks'
const FlightPage: React.FC = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const params: SearchFlight = {
    originCity: searchParams.get('originCity') || '',
    destinationCity: searchParams.get('destinationCity') || '',
    departureDate: searchParams.get('departureDate') || '',
    returnDate: searchParams.get('returnDate') || '',
    adults: Number(searchParams.get('adults')) || 1,
    children: Number(searchParams.get('children')) || 0,
    travelClass: searchParams.get('travelClass') || 'ECONOMY'
  }
  const IUser = useAppSelector((state) => state.auth.Iuser)
  const navigate = useNavigate()
  const { data, isLoading, error } = useSearchFlight(params)
  if (error) return <div>Error: {error.message}</div>
  const handleBooking = async (item: Flight) => {
    if (IUser) {
      const orderFlight: OrderFlight = {
        orderId: `${Date.now()}`,
        user: IUser,
        flight: item,
        flightDetails: params,
        bookingDate: new Date().toISOString()
      }
      await OrderFlightFirebase(orderFlight)
    } else {
      navigate('/auth/login')
    }
  }
  return (
    <>
      <div className='relative'>
        <img src={BgDetail} alt='bg_Home' className='w-full h-full object-cover' />
        <div className='absolute top-0 left-0 flex justify-center items-center h-full w-full'>
          <h1 className='text-white text-4xl capitalize py-5'>Landscaper</h1>
        </div>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='mx-4 lg:mx-20 mt-6'>
          <h2 className='text-center text-4xl text-primary mb-4'>
            Chuyến bay từ thành phố {params.originCity} đến thành phố {params.destinationCity}
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {data.map((item: Flight) => (
              <div key={item.id} className='bg-white shadow-md rounded-lg p-4'>
                <div className='mb-4'>
                  <p className='font-semibold'>Hãng hàng không: {item.itineraries[0].segments[0].carrierCode}</p>
                  <p className='font-semibold'>Số vé: {item.numberOfBookableSeats}</p>
                  <p className='font-semibold'>Thời gian bay: {formatTime(item.itineraries[0].duration)}</p>
                  <p>
                    Giá vé: {item.price.grandTotal} {item.price.currency}
                  </p>
                </div>
                <Menu>
                  <MenuButton
                    px={4}
                    py={2}
                    transition='all 0.2s'
                    borderRadius='md'
                    borderWidth='1px'
                    _hover={{ bg: 'primary' }}
                  >
                    Chi tiết hành trình <ChevronDownIcon />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      {item.itineraries.map((itinerary, index) => (
                        <div key={index}>
                          <p>Thời gian hành trình: {formatTime(itinerary.duration)}</p>
                          {itinerary.segments.map((segment, idx) => (
                            <div key={idx}>
                              <p>Chặng {idx + 1}:</p>
                              <p>Điểm khởi hành: {segment.departure.iataCode}</p>
                              <p>Điểm đến: {segment.arrival.iataCode}</p>
                              <p>Thời gian khởi hành: {formatDateTime(segment.departure.at)}</p>
                              <p>Thời gian đến: {formatDateTime(segment.arrival.at)}</p>
                              <p>Hãng hàng không: {segment.carrierCode}</p>
                              <p>Thời gian bay: {formatTime(segment.duration)}</p>
                            </div>
                          ))}
                        </div>
                      ))}
                    </MenuItem>
                  </MenuList>
                </Menu>
                <Menu>
                  <MenuButton
                    px={4}
                    py={2}
                    transition='all 0.2s'
                    borderRadius='md'
                    borderWidth='1px'
                    _hover={{ bg: 'primary' }}
                  >
                    Chi tiết thông tin vé <ChevronDownIcon />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      {item.travelerPricings.map((travelerPricing, idx) => (
                        <div key={idx}>
                          <p>Loại hành khách: {travelerPricing.travelerType}</p>
                          <p>
                            Tổng giá: {travelerPricing.price.total} {travelerPricing.price.currency}
                          </p>
                          <p>
                            Giá gốc: {travelerPricing.price.base} {travelerPricing.price.currency}
                          </p>
                          {travelerPricing.fareDetailsBySegment.map((fareDetail, fareIdx) => (
                            <div key={fareIdx} className='p-2 shadow-md'>
                              <p>Chặng: {fareDetail.segmentId}</p>
                              <p>Hạng ghế: {fareDetail.cabin}</p>
                              <p>Loại giá vé: {fareDetail.fareBasis}</p>
                            </div>
                          ))}
                        </div>
                      ))}
                    </MenuItem>
                  </MenuList>
                </Menu>
                <div className='mt-4'>
                  <Button type='button' onClick={() => handleBooking(item)}>
                    Booking Flight
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default FlightPage
