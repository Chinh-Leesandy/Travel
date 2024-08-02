import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { SearchHotel } from '../types/hotel/SearchHotel'
import useSearchHotel from '../hooks/hotel/useSearchHotel'
import BgDetail from '../assets/Bg_Detail.png'
import { Hotel } from '../types/hotel/Hotel'
import Button from '../components/ui/button/Button'
import { useDisclosure } from '@chakra-ui/react'
import CustomModal from '../components/ui/modal/Modal'
import { BookingHotel } from '../types/hotel/BookingHotel'
import Loading from '../components/ui/loading/Loading'

const HotelPage: React.FC = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const params: SearchHotel = {
    city: searchParams.get('city') || '',
    radius: Number(searchParams.get('radius')) || 1,
    radiusUnit: searchParams.get('radiusUnit') || 'KM',
    amenities: searchParams.get('amenities')?.split(',') || []
  }
  console.log(params)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null)
  const [bookingHotel, setBookingHotel] = useState<BookingHotel>({
    checkIn: '',
    checkOut: '',
    roomNumber: ''
  })
  const { data, isLoading, error } = useSearchHotel(params)

  if (error) return <div>Error: {error.message}</div>

  const handleBookingClick = (hotel: Hotel) => {
    setSelectedHotel(hotel)
    onOpen()
  }

  console.log(data)
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
        <>
          <div className='p-4 mx-20'>
            <h1 className='text-center text-2xl mb-4 p-2'>Hotel list matches search results</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              {data.slice(0, 20).map((item: Hotel) => (
                <div className='flex flex-col bg-white shadow-md rounded-lg p-4' key={item.id}>
                  <img
                    className='w-full h-40 object-cover mb-4 rounded-md'
                    src='https://i.pinimg.com/236x/89/d5/49/89d549e4fa5a9e00e71415c27a2d5dcd.jpg'
                    alt='img-hotel'
                  />
                  <div className='info_hotel'>
                    <h1 className='text-lg font-bold mb-2 whitespace-nowrap overflow-hidden overflow-ellipsis'>
                      {item.name}
                    </h1>
                    <p className='mb-2'>
                      Cách trung tâm thành phố: {item.distance.value} {item.distance.unit}
                    </p>
                  </div>
                  <div className='mt-auto'>
                    <Button type='button' onClick={() => handleBookingClick(item)}>
                      Booking Hotel
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {selectedHotel && (
            <CustomModal
              isOpen={isOpen}
              onClose={onClose}
              title='Booking Hotel'
              footer={
                <div className='flex justify-around items-center w-full'>
                  <Button type='button' onClick={onClose}>
                    Cancel
                  </Button>
                  <Button type='button'>Booking</Button>
                </div>
              }
            >
              <h1 className='text-lg font-bold mb-2'>Khách sạn {selectedHotel.name}</h1>
              <div className='mt-4'>
                <label className='block'>Check-in Date</label>
                <input
                  type='date'
                  className='border p-2 w-full'
                  value={bookingHotel.checkIn}
                  onChange={(e) => setBookingHotel({ ...bookingHotel, checkIn: e.target.value })}
                />
              </div>
              <div className='mt-4'>
                <label className='block'>Check-out Date</label>
                <input
                  type='date'
                  className='border p-2 w-full'
                  value={bookingHotel.checkOut}
                  onChange={(e) => setBookingHotel({ ...bookingHotel, checkOut: e.target.value })}
                />
              </div>
              <div className='mt-4'>
                <label className='block'>Room Number</label>
                <input
                  type='number'
                  className='border p-2 w-full'
                  value={bookingHotel.roomNumber}
                  onChange={(e) => setBookingHotel({ ...bookingHotel, roomNumber: e.target.value })}
                />
              </div>
            </CustomModal>
          )}
        </>
      )}
    </>
  )
}

export default HotelPage
